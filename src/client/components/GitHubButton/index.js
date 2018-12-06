import React from 'react';
import { isNil, split, takeLast } from 'ramda';
import { string, func } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import {
  Container,
  Content,
  GitHubIcon,
  Label,
  ModifyLinkContainer,
  ModifyLinkIcon,
} from './styles';
import { handleChangeDisplayModal } from '../../actions/app';

const proptypes = {
  link: string,
  handleChangeDisplayModal: func.isRequired,
};

const getGitHubNameFromLink = link => takeLast(1, split('/', link));

const GitHubButton = ({ isMe, link, handleChangeDisplayModal }) => {
  if (!isMe && isNil(link)) return null;
  return (
    <Container>
      <Content
        onClick={() => {
          if (isNil(link))
            handleChangeDisplayModal(true, 'Enter your Github login : ', 0, '');
          else window.open(`https://github.com/${link}`, '_blank');
        }}
      >
        <GitHubIcon />
        <Label>
          {!isNil(link) ? getGitHubNameFromLink(link) : 'Add Github'}
        </Label>
      </Content>
      {!isNil(link) &&
        isMe && (
          <ModifyLinkContainer
            onClick={() => {
              handleChangeDisplayModal(
                true,
                'Change your Github login : ',
                0,
                getGitHubNameFromLink(link),
              );
            }}
          >
            <ModifyLinkIcon />
          </ModifyLinkContainer>
        )}
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
