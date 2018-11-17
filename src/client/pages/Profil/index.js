import React from 'react';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { object, number, func } from 'prop-types';
import { bindActionCreators } from 'redux';
import { find, propEq, isNil, isEmpty } from 'ramda';
import { MdCollectionsBookmark, MdTimeline, MdTune } from 'react-icons/md';

import { Container, Header, LeftSide, RightSide, Content } from './styles';
import { getMe, getMarks, getMyLogs, getMyCoalition } from '../../selectors/me';
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
import UserCoalition from '../../containers/UserCoalition';
import {
  FILTER_MARK_BUTTON_VALUES,
  LOGS_FILTER_VALUES,
} from '../../constants/selectButtonValues';
import { coalitionsBackground } from '../../constants/coalitions';
import AllStats from '../../containers/AllStats';

const proptypes = {
  me: object,
  selectedCursus: number.isRequired,
  handleChangeSelectedCursus: func.isRequired,
  currentTime: object,
  marksSortBy: number.isRequired,
  logsFilter: number.isRequired,
  handleChangeMarkSortBy: func.isRequired,
  handleChangeLogsFilter: func.isRequired,
  myCoalition: object,
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
  handleChangeSelectedCursus,
  handleChangeMarkSortBy,
  myCoalition,
  winWidth,
}) => {
  const colationElem = find(propEq('name', myCoalition.name))(
    coalitionsBackground,
  );
  return (
    <Container>
      <Header
        backgroundUrl={!isNil(colationElem) ? colationElem.backgroundUrl : ''}
      >
        <LeftSide>
          <UserAvatar
            profilPicture={me.imageUrl}
            width={'150px'}
            height={'150px'}
            round
          />
          <InfoContainer selectedCursus={selectedCursus} me={me} />
          {winWidth <= 1000 && <UserCoalition coalition={me.coalition} />}
        </LeftSide>
        <RightSide>
          {winWidth > 1000 && <UserCoalition coalition={me.coalition} />}
          <LevelBar
            level={getLevelFromCursus(selectedCursus, me.cursus || [])}
          />
        </RightSide>
      </Header>
      <Content>
        <Box
          label={'Marks'}
          width={'calc(50% - 27px)'}
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
              logs={myLogs}
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
        <Box
          label={'My Stats'}
          width={'100%'}
          height={'auto'}
          content={<AllStats />}
          icon={<MdTune />}
        />
      </Content>
    </Container>
  );
};

Profil.propTypes = proptypes;

const actions = { enhanceMe };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  me: getMe(state),
  marks: getMarks(state),
  myLogs: getMyLogs(state),
  currentTime: getCurrentTime(state),
  myCoalition: getMyCoalition(state),
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
      initialWinWidth = window.innerWidth,
    }) => ({
      selectedCursus: initialSelectedCursus,
      marksSortBy: initialMarksSortBy,
      logsFilter: initialLogsFilter,
      winWidth: initialWinWidth,
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
      handleChangeWinWidth: () => newWinWidth => ({
        winWidth: newWinWidth,
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      if (isEmpty(this.props.myLogs)) {
        reqGetMyLogs()
          .then(logs => this.props.enhanceMe({ logs }))
          .catch(err => err);
      }
      window.addEventListener('resize', event =>
        this.props.handleChangeWinWidth(event.srcElement.innerWidth),
      );
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.handleChangeWinWidth);
    },
  }),
);

export default enhance(Profil);
