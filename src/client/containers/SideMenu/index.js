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
import { getMe } from '../../selectors/me';
import { reqMe } from '../../requests';

import { noAuthneeded } from '../../auth';

const SideMenu = ({ me, routes, hidden }) => {
  const { pathname } = window.location;
  const [route] = split('/', pathname.slice(1));
  if (contains(route, noAuthneeded)) return null;

  return (
    <Container hidden={hidden}>
      <SideMenuHeader me={me} />
      <Separator width={'85%'} />
      <Menu routes={routes} />
    </Container>
  );
};

const actions = { enhanceMe };

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
      if (isEmpty(this.props.me)) {
        reqMe()
          .then(res => this.props.enhanceMe(res))
          .catch(err => console.log('err: ', err));
      }
    },
  }),
);
export default enhance(SideMenu);
