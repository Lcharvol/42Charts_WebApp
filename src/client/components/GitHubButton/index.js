import React from 'react';
import { isNil } from 'ramda';
import { string } from 'prop-types';

import { Container, GitHubIcon, Label } from './styles';

const proptypes = {
  link: string,
};

const getGitHubNameFromLink = link => '';

const GitHubButton = ({ link }) => (
  <Container>
    <GitHubIcon />
    <Label>{!isNil(link) ? getGitHubNameFromLink(link) : 'Add Github'}</Label>
  </Container>
);

GitHubButton.propTypes = proptypes;

export default GitHubButton;
