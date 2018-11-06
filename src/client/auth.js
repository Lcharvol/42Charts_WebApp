import { Component } from 'react';
import { node } from 'prop-types';
import { split, contains } from 'ramda';

import { reqMe } from './requests';

export const noAuthneeded = ['login', 'serverdown'];

const propTypes = {
  children: node,
};

class Auth extends Component {
  state = {
    isAuthorized: false,
    isRequested: false,
  };

  async componentWillMount() {
    try {
      await reqMe();
      this.setState({ isAuthorized: true, isRequested: true });
    } catch (err) {
      this.setState({ isRequested: true });
    }
  }

  render() {
    const { children } = this.props;

    const { isAuthorized, isRequested } = this.state;
    const { pathname } = window.location;
    const [route] = split('/', pathname.slice(1));
    if (!isRequested) return null;
    if (contains(route, noAuthneeded) && isAuthorized) {
      window.location = '/';
      return null;
    }
    if (!contains(route, noAuthneeded) && !isAuthorized) {
      window.location = '/login';
      return null;
    }

    return children;
  }
}

Auth.propTypes = propTypes;

export default Auth;
