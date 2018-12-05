import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { compose, lifecycle } from 'recompose';
import { bindActionCreators } from 'redux';
import createBrowserHistory from 'history/createBrowserHistory';
import { connect } from 'react-redux';

import SideMenu from '../../containers/SideMenu';
import Modal from '../../containers/Modal';
import routes from '../../routes';
import { AppContainer } from './styles';
import { initializeGa } from '../../googleAnalytics';
import { updateWinWidth, handleChangeDisplayModal } from '../../actions/app';
import {
  getDisplayModal,
  getModalLabel,
  getModalActionId,
  getModalPlaceholder,
} from '../../selectors/app';

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => <route.component {...props} />}
  />
);

const history = createBrowserHistory();

const App = ({
  displayModal,
  handleChangeDisplayModal,
  modalLabel,
  modalActionId,
  modalPlaceholder,
}) => {
  initializeGa();
  return (
    <AppContainer>
      <Router>
        <div>
          {displayModal && (
            <Modal
              handleChangeDisplayModal={handleChangeDisplayModal}
              modalPlaceholder={modalPlaceholder}
              label={modalLabel}
              actionId={modalActionId}
            />
          )}
          <SideMenu history={history} routes={routes} />
          {routes.map(route => (
            <RouteWithSubRoutes key={route.id} {...route} />
          ))}
        </div>
      </Router>
    </AppContainer>
  );
};

const actions = { updateWinWidth, handleChangeDisplayModal };

const mapStateToProps = state => ({
  displayModal: getDisplayModal(state),
  modalLabel: getModalLabel(state),
  modalActionId: getModalActionId(state),
  modalPlaceholder: getModalPlaceholder(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      window.addEventListener('resize', this.props.updateWinWidth);
    },
    componentWillUnmount() {
      window.removeEventListener('resize', this.props.updateWinWidth);
    },
  }),
)(App);
