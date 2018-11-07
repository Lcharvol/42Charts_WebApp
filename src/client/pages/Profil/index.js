import React from 'react';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { object, number, func } from 'prop-types';
import { bindActionCreators } from 'redux';
import { map, find, propEq, isNil, isEmpty, split, take } from 'ramda';

import { Container, Header, LeftSide, RightSide, Content } from './styles';
import { getMe, getMarks, getMyLogs } from '../../selectors/me';
import { getCurrentTime } from '../../selectors/time';
import { enhanceMe } from '../../actions/me';
import { reqGetMyLogs } from '../../requests';
import UserAvatar from '../../components/UserAvatar';
import LevelBar from '../../components/LevelBar';
import Mark from '../../components/Mark';
import InfoContainer from './InfoContainer';
import Box from '../../containers/Box';

const proptypes = {
  me: object,
  selectedCursus: number.isRequired,
  handleChangeSelectedCursus: func.isRequired,
  currentTime: object,
};

const getLevelFromCursus = (cursusId, cursus) => {
  const selectedCursusObject = find(propEq('id', cursusId))(cursus);
  if (!isNil(selectedCursusObject)) return selectedCursusObject.level;
  else if (!isEmpty(cursus)) return cursus[0].level;
  return 0;
};

export const getSince = (markedAt, currentTime) => {
  if (isNil(markedAt)) return '';
  const { currentYear, currentMonth, currentDay } = currentTime;
  const splittedDate = split('-', markedAt);
  const markedYear = parseInt(splittedDate[0]);
  const markedMonth = parseInt(splittedDate[1]);
  const markedDay = parseInt(take(2, splittedDate[2]));
  if (currentYear === markedYear && currentMonth === markedMonth)
    return `${currentDay - markedDay === 1 ? 'a' : currentDay - markedDay} day${
      currentDay - markedDay > 1 ? 's' : ''
    } ago`;
  else if (currentYear === markedYear)
    return `${
      currentMonth - markedMonth === 1 ? 'a' : currentMonth - markedMonth
    } month${currentMonth - markedMonth > 1 ? 's' : ''} ago`;
  return `${
    currentYear - markedYear === 1 ? 'a' : currentYear - markedYear
  } year${currentYear - markedYear > 1 ? 's' : ''} ago`;
};

const Profil = ({
  me,
  selectedCursus,
  handleChangeSelectedCursus,
  marks,
  currentTime,
}) => (
  <Container>
    <Header>
      <LeftSide>
        <UserAvatar
          profilPicture={me.imageUrl}
          width={'150px'}
          height={'150px'}
        />
        <InfoContainer selectedCursus={selectedCursus} me={me} />
      </LeftSide>
      <RightSide>
        <LevelBar level={getLevelFromCursus(selectedCursus, me.cursus || [])} />
      </RightSide>
    </Header>
    <Content>
      <Box
        label={'Marks'}
        width={'400px'}
        height={'400px'}
        content={map(
          mark => (
            <Mark
              key={mark.id}
              mark={mark}
              since={getSince(mark.markedAt, currentTime)}
            />
          ),
          marks,
        )}
      />
    </Content>
  </Container>
);

Profil.propTypes = proptypes;

const actions = { enhanceMe };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  me: getMe(state),
  marks: getMarks(state),
  myLogs: getMyLogs(state),
  currentTime: getCurrentTime(state),
});

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStateHandlers(
    ({ initialSelectedCursus = 1 }) => ({
      selectedCursus: initialSelectedCursus,
    }),
    {
      handleChangeSelectedCursus: () => cursusId => ({
        selectedCursus: cursusId,
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      if (isEmpty(this.props.marks)) {
        reqGetMyLogs()
          .then(logs => this.props.enhanceMe({ logs }))
          .catch(err => err);
      }
    },
  }),
);

export default enhance(Profil);
