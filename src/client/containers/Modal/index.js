import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, withStateHandlers } from 'recompose';
import { isNil, test } from 'ramda';

import {
  Container,
  Content,
  Button,
  ButtonsContainer,
  Label,
  StyledInput,
  ButtonSpacer,
} from './styles';
import { MAIN_COLOR, RED, BACKGROUND_COLOR } from '../../constants/colors';
import { enhanceMe } from '../../actions/me';
import { reqPutGitHub } from '../../requests';

const proptypes = {
  label: string.isRequired,
};

const getConfirmAction = (actionId, enhanceMe) => {
  const actions = [
    github => {
      if (!isNil(github.github))
        reqPutGitHub(github.github)
          .then(res => enhanceMe(github))
          .catch(err => err);
    },
  ];
  if (isNil(actionId)) return () => {};
  return actions[actionId];
};

const isInputValid = input =>
  test(/^[a-z\d](?:[a-z\d]|-(?=[a-z\d])){0,38}$/i, input);

const Modal = ({
  label,
  handleChangeDisplayModal,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  actionId,
  enhanceMe,
  error,
  modalPlaceholder,
  innerValue,
  handleChangeInnerValue,
  handleChangeError,
}) => (
  <Container
    onClick={() =>
      handleChangeDisplayModal(false, undefined, undefined, undefined)
    }
  >
    <Content onClick={e => e.stopPropagation()}>
      <Label>{label}</Label>
      <StyledInput
        placeholder={modalPlaceholder}
        type="text"
        spellCheck="false"
        value={!isNil(innerValue) ? innerValue : modalPlaceholder}
        error={error}
        onKeyPress={e => {
          if (e.key === 'Enter' && !error) {
            getConfirmAction(actionId, enhanceMe)({ github: innerValue });
            handleChangeDisplayModal(false, undefined, undefined, undefined);
          }
        }}
        onChange={e => {
          if (!isInputValid(e.target.value)) handleChangeError(true);
          else handleChangeError(false);
          handleChangeInnerValue(e.target.value);
        }}
      />
      <ButtonsContainer>
        <Button
          color={MAIN_COLOR}
          error={error}
          onClick={e => {
            if (!error) {
              getConfirmAction(actionId, enhanceMe)({ github: innerValue });
              handleChangeDisplayModal(false, undefined, undefined, undefined);
            }
          }}
        >
          {confirmLabel}
        </Button>
        <ButtonSpacer />
        <Button
          color={BACKGROUND_COLOR}
          onClick={e => {
            handleChangeDisplayModal(false, undefined, undefined, undefined);
          }}
        >
          {cancelLabel}
        </Button>
      </ButtonsContainer>
    </Content>
  </Container>
);

Modal.proptypes = proptypes;

const actions = { enhanceMe };

const mapDispatchToProps = dispatch => bindActionCreators(actions, dispatch);

export default compose(
  connect(
    null,
    mapDispatchToProps,
  ),
  withStateHandlers(
    ({ initialInnerValue = undefined, initialError = false }) => ({
      innerValue: initialInnerValue,
      error: initialError,
    }),
    {
      handleChangeInnerValue: () => newValue => ({
        innerValue: newValue,
      }),
      handleChangeError: () => newError => ({
        error: newError,
      }),
    },
  ),
)(Modal);
