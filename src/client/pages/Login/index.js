import React from 'react';
import { isNil, length } from 'ramda';
import { withCookies } from 'react-cookie';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, LoginContent, Logo, LoginButton } from './styles';
import { getLogin } from '../../requests';
import Spinner from '../../components/Spinner';
import { getChartsToken, getChartsRefreshToken } from '../../selectors/app';
import { storeToken } from '../../actions/app';

const extractUrlValue = (key, url) => {
  if (typeof url === 'undefined') url = window.location.href;
  var match = url.match('[?&]' + key + '=([^&]+)');
  return match ? match[1] : null;
};

const Login = ({ history, chartsToken, ...props }) => {
  return (
    <Container>
      <LoginContent>
        <Logo />
        {isNil(localStorage.getItem('chartsToken')) ||
        length(localStorage.getItem('chartsToken')) === 0 ? (
          <LoginButton
            onClick={() => {
              getLogin().then(redicrectUri =>
                window.location.replace(redicrectUri),
              );
            }}
          >
            Login
          </LoginButton>
        ) : (
          <Spinner />
        )}
      </LoginContent>
    </Container>
  );
};

const actions = { storeToken };

const mapStateToProps = state => ({
  chartsToken: getChartsToken(state),
  refreshChartsToken: getChartsRefreshToken(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default compose(
  withCookies,
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentWillMount() {
      const token = extractUrlValue('token');
      const refreshToken = extractUrlValue('refresh');
      const isFetching = !isNil(token) && !isNil(refreshToken);
      const storedToken = this.props.cookies.get('chartsToken') || undefined;
      const storedchartsRefreshToken =
        this.props.cookies.get('chartsRefreshToken') || undefined;
      if (!isNil(storedToken)) {
        localStorage.setItem('chartsToken', storedToken);
        localStorage.setItem('chartsRefreshToken', storedchartsRefreshToken);
        this.props.storeToken('chartsToken', storedToken);
        this.props.storeToken('chartsRefreshToken', storedchartsRefreshToken);
      }
      if (isFetching) {
        this.props.storeToken('chartsToken', token);
        this.props.storeToken('chartsRefreshToken', refreshToken);
        localStorage.setItem('chartsToken', token);
        localStorage.setItem('chartsRefreshToken', refreshToken);
        this.props.cookies.set('chartsToken', token, { path: '/' });
        this.props.cookies.set('chartsRefreshToken', refreshToken, {
          path: '/',
        });
        window.location.reload();
      }
    },
  }),
)(Login);
