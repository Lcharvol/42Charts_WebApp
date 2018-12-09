import React from 'react';
import { string } from 'prop-types';

import { Container, ValidatedIcon, FailedIcon, NoStatusIcon } from './styles';

const proptypes = {
  status: string.isRequired,
};

const getIconFromStatus = status => {
  if (status === 'validated') return <ValidatedIcon />;
  else if (status === 'failed') return <FailedIcon />;
  else return <NoStatusIcon />;
};

const StatusIcon = ({ status }) => (
  <Container>{getIconFromStatus(status)}</Container>
);

StatusIcon.propTypes = proptypes;

export default StatusIcon;
