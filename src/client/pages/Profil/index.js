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
import Marks from '../../containers/Marks';
import InfoContainer from './InfoContainer';
import Box from '../../containers/Box';
import Logs from '../../containers/Logs';
import SelectButton from '../../components/SelectButton';
import {
  FILTER_MARK_BUTTON_VALUES,
  LOGS_FILTER_VALUES,
} from '../../constants/selectButtonValues';

const proptypes = {
  me: object,
  selectedCursus: number.isRequired,
  handleChangeSelectedCursus: func.isRequired,
  currentTime: object,
  marksSortBy: number.isRequired,
  logsFilter: number.isRequired,
  handleChangeMarkSortBy: func.isRequired,
  handleChangeLogsFilter: func.isRequired,
};

const getLevelFromCursus = (cursusId, cursus) => {
  const selectedCursusObject = find(propEq('id', cursusId))(cursus);
  if (!isNil(selectedCursusObject)) return selectedCursusObject.level;
  else if (!isEmpty(cursus)) return cursus[0].level;
  return 0;
};

const Profil = ({
  me,
  selectedCursus,
  marks,
  myLogs,
  currentTime,
  marksSortBy,
  logsFilter,
  handleChangeLogsFilter,
  vhandleChangeSelectedCursus,
  handleChangeMarkSortBy,
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
        width={'45%'}
        height={'400px'}
        content={
          <Marks
            marks={marks || []}
            currentTime={currentTime}
            sortBy={marksSortBy}
          />
        }
        headerLeft={
          <SelectButton
            values={FILTER_MARK_BUTTON_VALUES}
            handler={handleChangeMarkSortBy}
          />
        }
      />
      <Box
        label={'My Log'}
        width={'45%'}
        height={'400px'}
        content={
          <Logs
            logs={myLogs}
            currentTime={currentTime}
            logsFilter={logsFilter}
          />
        }
        headerLeft={
          <SelectButton
            values={LOGS_FILTER_VALUES}
            handler={handleChangeLogsFilter}
          />
        }
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
    ({
      initialSelectedCursus = 1,
      initialMarksSortBy = 0,
      initialLogsFilter = 0,
    }) => ({
      selectedCursus: initialSelectedCursus,
      marksSortBy: initialMarksSortBy,
      logsFilter: initialLogsFilter,
    }),
    {
      handleChangeSelectedCursus: () => cursusId => ({
        selectedCursus: cursusId,
      }),
      handleChangeMarkSortBy: () => newSortBy => ({
        marksSortBy: newSortBy,
      }),
      handleChangeLogsFilter: () => newFilterId => ({
        logsFilter: newFilterId,
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
