import React from 'react';
import { contains, split, isEmpty } from 'ramda';
import {
  compose,
  lifecycle,
  withStateHandlers,
  onlyUpdateForKeys,
} from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container } from './styles';
import SideMenuHeader from './SideMenuHeader';
import Separator from '../../components/Separator';
import VersionLabel from '../../components/VersionLabel';
import AppLogo from '../../components/AppLogo';
import Menu from './Menu';
import { enhanceMe } from '../../actions/me';
import { enhanceTime } from '../../actions/time';
import { loadInfos } from '../../actions/app';
import {
  getMyLogin,
  getMyProfilPicture,
  getMyProjects,
  getMyFriends,
  getMyDisplayname,
} from '../../selectors/me';
import {
  reqMe,
  reqPing,
  reqGetMyFriends,
  reqRefreshToken,
} from '../../requests';

import { noAuthneeded } from '../../auth';
import { DARK_BORDER_COLOR } from '../../constants/colors';

const SideMenu = ({
  login,
  imageUrl,
  routes,
  hidden,
  winWidth,
  history,
  selectedLink,
  handleChangeSelectedLink,
}) => {
  const { pathname } = window.location;
  const [route] = split('/', pathname.slice(1));
  if (contains(route, noAuthneeded) || route === 'serverdown') return null;
  return (
    <Container hidden={hidden}>
      <AppLogo />
      <SideMenuHeader login={login} imageUrl={imageUrl} winWidth={winWidth} />
      <Separator width={'85%'} color={DARK_BORDER_COLOR} />
      <Menu
        routes={routes}
        winWidth={winWidth}
        selectedLink={selectedLink}
        handleChangeSelectedLink={handleChangeSelectedLink}
      />
      <VersionLabel />
    </Container>
  );
};

const actions = { enhanceMe, enhanceTime, loadInfos };

const mapStateToProps = state => ({
  login: getMyLogin(state),
  name: getMyDisplayname(state),
  imageUrl: getMyProfilPicture(state),
  projects: getMyProjects(state),
  friends: getMyFriends(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStateHandlers(
    ({
      initialWinWidth = window.innerWidth,
      initialSelectedLink = window.location.pathname,
    }) => ({
      winWidth: initialWinWidth,
      selectedLink: initialSelectedLink,
    }),
    {
      handleChangeWinWidth: () => newWinWidth => ({
        winWidth: newWinWidth,
      }),
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

      if (route !== 'serverdown') {
        window.addEventListener('resize', event =>
          this.props.handleChangeWinWidth(event.srcElement.innerWidth),
        );
        reqPing()
          .then(res => res)
          .catch(err => window.location.replace('serverdown'));
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
      }
      this.props.enhanceTime({ currentYear, currentMonth, currentDay });
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.handleChangeWinWidth);
    },
  }),
  onlyUpdateForKeys(['login', 'imageUrl', 'selectedLink', 'winWidth']),
);
export default enhance(SideMenu);
