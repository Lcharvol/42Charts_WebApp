import React from 'react';
import { contains, split, isEmpty } from 'ramda';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container } from './styles';
import SideMenuHeader from './SideMenuHeader';
import Separator from '../../components/Separator';
import Menu from './Menu';
import { enhanceMe } from '../../actions/me';
import { enhanceTime } from '../../actions/time';
import { getMe } from '../../selectors/me';
import { reqMe, reqPing } from '../../requests';

import { noAuthneeded } from '../../auth';

const SideMenu = ({ me, routes, hidden }) => {
  const { pathname } = window.location;
  const [route] = split('/', pathname.slice(1));
  if (contains(route, noAuthneeded) || route === 'serverdown') return null;
  return (
    <Container hidden={hidden}>
      <SideMenuHeader me={me} />
      <Separator width={'85%'} />
      <Menu routes={routes} />
    </Container>
  );
};

const actions = { enhanceMe, enhanceTime };

const mapStateToProps = state => ({
  me: getMe(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
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
        reqPing()
          .then(res => res)
          .catch(err => window.location.replace('serverdown'));
        if (isEmpty(this.props.me)) {
          reqMe()
            .then(res => this.props.enhanceMe(res))
            .catch(err => err);
        }
      }
      this.props.enhanceTime({ currentYear, currentMonth, currentDay });
    },
  }),
);
export default enhance(SideMenu);
