import React from 'react';
import { contains, split, isEmpty, length } from 'ramda';
import { compose, lifecycle, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withCookies } from 'react-cookie';

import { Container } from './styles';
import SideMenuHeader from './SideMenuHeader';
import Menu from './Menu';
import Separator from '../../components/Separator';
import VersionLabel from '../../components/VersionLabel';
import AppLogo from '../../components/AppLogo';
import WeekSummary from '../../containers/WeekSummary';
import { DARK_BORDER_COLOR } from '../../constants/colors';
import { enhanceMe } from '../../actions/me';
import { enhanceTime } from '../../actions/time';
import { loadInfos, loadWeekSummary, loadCampus } from '../../actions/app';
import {
  getMyLogin,
  getMyProfilPicture,
  getMyProjects,
  getMyFriends,
  getMyDisplayname,
} from '../../selectors/me';
import { getWinWidth, getWeekSummary, getCampus } from '../../selectors/app';
import {
  reqMe,
  reqPing,
  reqGetMyFriends,
  reqGetWeekSummary,
  reqGetCampus,
} from '../../requests';
import { noAuthneeded } from '../../auth';
import { visitePageGa } from '../../googleAnalytics';

const SideMenu = ({
  login,
  imageUrl,
  routes,
  hidden,
  winWidth,
  history,
  selectedLink,
  handleChangeSelectedLink,
  cookies,
}) => {
  const { pathname } = window.location;
  const [route] = split('/', pathname.slice(1));

  if (contains(route, noAuthneeded) || route === 'serverdown') return null;
  return (
    <Container hidden={hidden}>
      <AppLogo />
      {winWidth > 1000 && (
        <SideMenuHeader login={login} imageUrl={imageUrl} winWidth={winWidth} />
      )}
      {winWidth > 1000 && <Separator width={'85%'} color={DARK_BORDER_COLOR} />}
      <Menu
        routes={routes}
        route={route}
        winWidth={winWidth}
        selectedLink={selectedLink}
        handleChangeSelectedLink={handleChangeSelectedLink}
        cookies={cookies}
      />
      <VersionLabel />
      {winWidth > 1000 && <WeekSummary />}
    </Container>
  );
};

const actions = {
  enhanceMe,
  enhanceTime,
  loadInfos,
  loadWeekSummary,
  loadCampus,
};

const mapStateToProps = state => ({
  login: getMyLogin(state),
  name: getMyDisplayname(state),
  imageUrl: getMyProfilPicture(state),
  projects: getMyProjects(state),
  friends: getMyFriends(state),
  winWidth: getWinWidth(state),
  weekSummary: getWeekSummary(state),
  campus: getCampus(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  withCookies,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStateHandlers(
    ({ initialSelectedLink = window.location.pathname }) => ({
      selectedLink: initialSelectedLink,
    }),
    {
      handleChangeSelectedLink: () => newSelectedLink => ({
        selectedLink: newSelectedLink,
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      const { pathname } = window.location;
      const [route] = split('/', pathname.slice(1));
      const currentdate = new Date();
      const currentYear = currentdate.getFullYear();
      const currentMonth = currentdate.getMonth() + 1;
      const currentDay = currentdate.getDate();

      visitePageGa();
      if (route !== 'serverdown') {
        reqPing()
          .then(res => res)
          .catch(err => window.location.replace('serverdown'));
        if (route !== 'login') {
          if (isEmpty(this.props.projects)) {
            reqMe()
              .then(res => this.props.enhanceMe(res))
              .catch(err => err);
          }
          if (isEmpty(this.props.friends)) {
            reqGetMyFriends()
              .then(res => this.props.enhanceMe({ friends: res }))
              .catch(err => err);
          }
          if (isEmpty(this.props.weekSummary.mostUsedPost)) {
            reqGetWeekSummary()
              .then(res => {
                this.props.loadWeekSummary(res);
              })
              .catch();
          }
          if (length(this.props.campus) <= 1) {
            reqGetCampus()
              .then(res => {
                this.props.loadCampus(res);
              })
              .catch();
          }
        }
      }
      this.props.enhanceTime({ currentYear, currentMonth, currentDay });
    },
    componentDidUpdate(prevProps) {
      if (prevProps.selectedLink !== this.props.selectedLink) visitePageGa();
    },
  }),
);
export default enhance(SideMenu);
