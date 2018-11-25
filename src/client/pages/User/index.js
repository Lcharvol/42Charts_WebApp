import React from 'react';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { drop, length, isEmpty, filter, propEq } from 'ramda';
import { MdCollectionsBookmark, MdTimeline, MdTune } from 'react-icons/md';

import { Container, Content } from './styles';
import { reqGetUserById, reqGetUserLogsById } from '../../requests';
import { loadUser, loadUserLogs, resetUser } from '../../actions/user';
import { getCurrentTime } from '../../selectors/time';
import { getUser, getUserLogs } from '../../selectors/user';

import ProfilHeader from '../../containers/ProfilHeader';
import Box from '../../containers/Box';
import Marks from '../../containers/Marks';
import Logs from '../../containers/Logs';
import AllStats from '../../containers/AllStats';
import SelectButton from '../../components/SelectButton';
import {
  FILTER_MARK_BUTTON_VALUES,
  LOGS_FILTER_VALUES,
} from '../../constants/selectButtonValues';
import { USER_STATS_CONTENT } from '../../constants/stats';

const User = ({
  user,
  winWidth,
  currentTime,
  marksSortBy,
  userLogs,
  logsFilter,
  selectedCursus,
  handleChangeMarkSortBy,
  handleChangeLogsFilter,
  handleChangeSelectedCursus,
}) => {
  if (isEmpty(user)) return <div />;
  return (
    <Container>
      <ProfilHeader
        winWidth={winWidth}
        coalition={user.coalition}
        profilPicture={user.imageUrl}
        cursus={user.cursus}
        user={user}
        color={user.coalition.color}
        selectedCursus={selectedCursus}
      />
      <Content>
        <Box
          label={'Marks'}
          width={'calc(50% - 27px)'}
          height={'400px'}
          content={
            <Marks
              marks={filter(propEq('status', 'finished'))(user.projects) || []}
              currentTime={currentTime}
              sortBy={marksSortBy}
            />
          }
          headerRight={
            <SelectButton
              values={FILTER_MARK_BUTTON_VALUES}
              handler={handleChangeMarkSortBy}
              value={marksSortBy}
            />
          }
          icon={<MdCollectionsBookmark />}
        />
        <Box
          label={'Logs'}
          width={'calc(50% - 27px)'}
          height={'400px'}
          content={
            <Logs
              logs={userLogs.logs}
              currentTime={currentTime}
              logsFilter={logsFilter}
              handleChangeLogsFilter={handleChangeLogsFilter}
            />
          }
          headerRight={
            <SelectButton
              values={LOGS_FILTER_VALUES}
              handler={handleChangeLogsFilter}
              value={logsFilter}
            />
          }
          icon={<MdTimeline />}
        />
        <Box
          label={'Stats'}
          width={'100%'}
          height={'auto'}
          content={<AllStats stats={USER_STATS_CONTENT} />}
          icon={<MdTune />}
        />
      </Content>
    </Container>
  );
};

const mapStateToProps = state => ({
  currentTime: getCurrentTime(state),
  user: getUser(state),
  userLogs: getUserLogs(state),
});

const actions = { loadUser, loadUserLogs, resetUser };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStateHandlers(
    ({
      initialWinWidth = window.innerWidth,
      initialMarksSortBy = 0,
      initialLogsFilter = 0,
      initialSelectedCursus = 1,
    }) => ({
      winWidth: initialWinWidth,
      marksSortBy: initialMarksSortBy,
      logsFilter: initialLogsFilter,
      selectedCursus: initialSelectedCursus,
    }),
    {
      handleChangeWinWidth: () => newWinWidth => ({
        winWidth: newWinWidth,
      }),
      handleChangeLogsFilter: () => newFilterId => ({
        logsFilter: newFilterId,
      }),
      handleChangeMarkSortBy: () => newSortBy => ({
        marksSortBy: newSortBy,
      }),
      handleChangeSelectedCursus: () => cursusId => ({
        selectedCursus: cursusId,
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      const userId = drop(1, this.props.location.search);
      window.scrollTo(0, 0);

      if (length(userId) > 0) {
        reqGetUserById(userId)
          .then(data => this.props.loadUser(data))
          .catch(err => err);
        reqGetUserLogsById(userId)
          .then(data => this.props.loadUserLogs(data))
          .catch(err => err);
      }
      window.addEventListener('resize', event =>
        this.props.handleChangeWinWidth(event.srcElement.innerWidth),
      );
    },
    componentWillUnmount() {
      this.props.resetUser();
      window.removeEventListener('resize', this.props.handleChangeWinWidth);
    },
  }),
);
export default enhance(User);
