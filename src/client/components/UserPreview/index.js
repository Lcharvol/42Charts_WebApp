import React from 'react';
import { object } from 'prop-types';

import { Container, Login } from './styles';
import { UserAvatar } from '../UserAvatar';

const propTypes = {
  user: object.isRequired,
};

const UserPreview = ({ user }) => (
  <Container>
    <UserAvatar
      profilPicture={user.profilPicture}
      width={'60px'}
      height={'60px'}
    />
    <Login>{user.login}</Login>
  </Container>
);

UserPreview.propTypes = propTypes;

export default UserPreview;
