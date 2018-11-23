import React from 'react';
import { compose, withStateHandlers, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty, map } from 'ramda';
import { array } from 'prop-types';

import { Container, Header, Title, AppsContainer } from './styles';
import { getApps } from '../../selectors/apps';
import { reqGetApps } from '../../requests';
import AppElem from './AppElem';
import { loadApps } from '../../actions/apps';

const proptypes = {
  apps: array.isRequired,
};

const Apps = ({ apps }) => (
  <Container>
    <Header>
      <Title>42 Apps</Title>
    </Header>
    <AppsContainer>
      {map(
        app => (
          <AppElem key={app.id} app={app} />
        ),
        apps,
      )}
    </AppsContainer>
  </Container>
);

Apps.propTypes = proptypes;

const actions = { loadApps };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

const mapStateToProps = state => ({
  apps: getApps(state),
});

const enhance = compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  withStateHandlers(
    ({ initialSelectedCursus = 1 }) => ({
      selectedCursus: initialSelectedCursus,
    }),
    {
      handleChangeSelectedCursus: () => cursusId => ({
        selectedCursus: cursusId,
      }),
    },
  ),
  lifecycle({
    componentWillMount() {
      if (isEmpty(this.props.apps)) {
        reqGetApps()
          .then(res => this.props.loadApps(res))
          .catch(err => err);
      }
    },
  }),
);

export default enhance(Apps);
