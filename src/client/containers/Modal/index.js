import React from 'react';
import { string } from 'prop-types';

import { Container, Content } from './styles';

const proptypes = {
  label: string.isRequired,
};

const Modal = ({ label }) => (
  <Container>
    <Content />
  </Container>
);

Modal.proptypes = proptypes;

export default Modal;
