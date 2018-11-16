import React from 'react';
import { contains, split, isEmpty } from 'ramda';
import { compose, lifecycle, withStateHandlers } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container } from './styles';
import SideMenuHeader from './SideMenuHeader';
import Separator from '../../components/Separator';
import Menu from './Menu';
import { enhanceMe } from '../../actions/me';
import { enhanceTime } from '../../actions/time';
import { loadInfos } from '../../actions/app';
import { getMe } from '../../selectors/me';
import { reqMe, reqPing } from '../../requests';

import { noAuthneeded } from '../../auth';
import { DARK_BORDER_COLOR } from '../../constants/colors';

const SideMenu = ({
  me,
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
      <SideMenuHeader me={me} winWidth={winWidth} />
      <Separator width={'85%'} color={DARK_BORDER_COLOR} />
      <Menu
        routes={routes}
        winWidth={winWidth}
        selectedLink={selectedLink}
        handleChangeSelectedLink={handleChangeSelectedLink}
      />
    </Container>
  );
};

const actions = { enhanceMe, enhanceTime, loadInfos };

const mapStateToProps = state => ({
  me: getMe(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStateHandlers(
    ({
      initialWinWidth = 0,
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
        this.props.handleChangeWinWidth(window.innerWidth);
        window.addEventListener('resize', event =>
          this.props.handleChangeWinWidth(event.srcElement.innerWidth),
        );
        reqPing()
          .then(res => res)
          .catch(err => window.location.replace('serverdown'));
        if (isEmpty(this.props.me.projects)) {
          reqMe()
            .then(res => this.props.enhanceMe(res))
            .catch(err => err);
        }
      }
      this.props.enhanceTime({ currentYear, currentMonth, currentDay });
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.handleChangeWinWidth);
    },
  }),
);
export default enhance(SideMenu);
