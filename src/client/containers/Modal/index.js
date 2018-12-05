import React from 'react';
import { string } from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, withStateHandlers } from 'recompose';
import { isNil, length } from 'ramda';

import {
  Container,
  Content,
  Button,
  ButtonsContainer,
  Label,
  StyledInput,
} from './styles';
import { MAIN_COLOR, RED } from '../../constants/colors';
import { enhanceMe } from '../../actions/me';

const proptypes = {
  label: string.isRequired,
};

const getConfirmAction = (actionId, enhanceMe) => {
  const actions = [enhanceMe];
  if (isNil(actionId)) return () => {};
  return actions[actionId];
};

const Modal = ({
  label,
  handleChangeDisplayModal,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  actionId,
  enhanceMe,
  modalPlaceholder,
  innerValue,
  handleChangeInnerValue,
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
        value={length(innerValue) > 0 ? innerValue : modalPlaceholder}
        onChange={e => handleChangeInnerValue(e.target.value)}
      />
      <ButtonsContainer>
        <Button
          color={MAIN_COLOR}
          onClick={e => {
            getConfirmAction(actionId, enhanceMe)({ githubLink: innerValue });
            handleChangeDisplayModal(false, undefined, undefined, undefined);
          }}
        >
          {confirmLabel}
        </Button>
        <Button color={RED}>{cancelLabel}</Button>
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
    ({ initialInnerValue = '' }) => ({
      innerValue: initialInnerValue,
    }),
    {
      handleChangeInnerValue: () => newValue => ({
        innerValue: newValue,
      }),
    },
  ),
)(Modal);
