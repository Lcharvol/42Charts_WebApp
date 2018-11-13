import React from 'react';

import { Container } from './styles';

export const UserAvatar = ({
  width = '40px',
  height = '40px',
  profilPicture,
  margin = '5px',
  round = false,
}) => (
  <Container
    margin={margin}
    width={width}
    height={height}
    profilPicture={profilPicture}
    round={round}
  />
);

export default UserAvatar;
