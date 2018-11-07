import React from 'react';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { object, number, func } from 'prop-types';
import { bindActionCreators } from 'redux';
import { map, find, propEq, isNil, isEmpty } from 'ramda';

import { Container, Header, LeftSide, RightSide, Content } from './styles';
import { getMe, getMarks, getMyLogs } from '../../selectors/me';
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
};

const getLevelFromCursus = (cursusId, cursus) => {
  const selectedCursusObject = find(propEq('id', cursusId))(cursus);
  if (!isNil(selectedCursusObject)) return selectedCursusObject.level;
  else if (!isEmpty(cursus)) return cursus[0].level;
  return 0;
};

const Profil = ({ me, selectedCursus, handleChangeSelectedCursus, marks }) => (
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
            <Mark key={mark.id} mark={mark} />
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
