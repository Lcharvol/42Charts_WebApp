import React from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { isEmpty } from 'ramda';

import { Container } from './styles';
import { getAllProjects } from '../../selectors/projects';
import { reqGetAllProject } from '../../requests';

const Projects = () => <Container />;

const actions = {};

const mapStateToProps = state => ({
  allProjects: getAllProjects(state),
});

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
  lifecycle({
    componentDidMount() {
      if (isEmpty(this.props.allProjects)) {
        reqGetAllProject()
          .then(allProjects => console.log('allProjects: ', allProjects))
          .catch(err => err);
      }
    },
  }),
)(Projects);
