import React from 'react';
import { isNil, split, takeLast } from 'ramda';
import { string, func } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Container, GitHubIcon, Label } from './styles';
import { handleChangeDisplayModal } from '../../actions/app';

const proptypes = {
  link: string,
  handleChangeDisplayModal: func.isRequired,
};

const getGitHubNameFromLink = link => takeLast(1, split('/', link));

const GitHubButton = ({ isMe, link, handleChangeDisplayModal }) => {
  if (!!isMe && isNil(link)) return null;
  return (
    <Container
      onClick={() => {
        if (isNil(link))
          handleChangeDisplayModal(
            true,
            'Enter your Github link: ',
            0,
            'https://github.com/',
          );
        else window.open(link, '_blank');
      }}
    >
      <GitHubIcon />
      <Label>{!isNil(link) ? getGitHubNameFromLink(link) : 'Add Github'}</Label>
    </Container>
  );
};

GitHubButton.propTypes = proptypes;

const actions = { handleChangeDisplayModal };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default connect(
  null,
  mapDispatchToProps,
)(GitHubButton);
