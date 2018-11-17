import React from 'react';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { drop, length, isEmpty } from 'ramda';
import { MdCollectionsBookmark, MdTimeline } from 'react-icons/md';

import { Container, Content } from './styles';
import { reqGetUserById, reqGetUserLogsById } from '../../requests';
import { getCurrentTime } from '../../selectors/time';

import ProfilHeader from '../../containers/ProfilHeader';
import Box from '../../containers/Box';
import Marks from '../../containers/Marks';
import Logs from '../../containers/Logs';
import SelectButton from '../../components/SelectButton';
import {
  FILTER_MARK_BUTTON_VALUES,
  LOGS_FILTER_VALUES,
} from '../../constants/selectButtonValues';

const User = ({
  user,
  winWidth,
  currentTime,
  marksSortBy,
  userLogs,
  logsFilter,
  handleChangeMarkSortBy,
  handleChangeLogsFilter,
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
      />
      <Content>
        <Box
          label={'Marks'}
          width={'calc(50% - 27px)'}
          height={'400px'}
          content={
            <Marks
              marks={user.projects || []}
              currentTime={currentTime}
              sortBy={marksSortBy}
            />
          }
          headerLeft={
            <SelectButton
              values={FILTER_MARK_BUTTON_VALUES}
              handler={handleChangeMarkSortBy}
              value={marksSortBy}
            />
          }
          icon={<MdCollectionsBookmark />}
        />
        <Box
          label={'My Log'}
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
          headerLeft={
            <SelectButton
              values={LOGS_FILTER_VALUES}
              handler={handleChangeLogsFilter}
              value={logsFilter}
            />
          }
          icon={<MdTimeline />}
        />
      </Content>
    </Container>
  );
};

const mapStateToProps = state => ({
  currentTime: getCurrentTime(state),
});

const actions = {};

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStateHandlers(
    ({
      initialUser = {},
      initialWinWidth = window.innerWidth,
      initialMarksSortBy = 0,
      initialUserLogs = [],
      initialLogsFilter = 0,
    }) => ({
      user: initialUser,
      winWidth: initialWinWidth,
      marksSortBy: initialMarksSortBy,
      userLogs: initialUserLogs,
      logsFilter: initialLogsFilter,
    }),
    {
      loadUser: () => user => ({
        user,
      }),
      loadUserLogs: () => userLogs => ({
        userLogs,
      }),
      handleChangeWinWidth: () => newWinWidth => ({
        winWidth: newWinWidth,
      }),
      handleChangeLogsFilter: () => newFilterId => ({
        logsFilter: newFilterId,
      }),
      handleChangeMarkSortBy: () => newSortBy => ({
        marksSortBy: newSortBy,
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      const userId = drop(1, this.props.location.search);
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
    componentDidUpdate(prevProps) {},
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.handleChangeWinWidth);
    },
  }),
);
export default enhance(User);
