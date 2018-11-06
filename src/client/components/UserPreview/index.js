import React from 'react';
import { object } from 'prop-types';

import { Container, Login, Level } from './styles';
import { UserAvatar } from '../UserAvatar';

const propTypes = {
  user: object.isRequired,
};

const UserPreview = ({ user }) => (
  <Container>
    <UserAvatar profilPicture={user.imageUrl} width={'60px'} height={'60px'} />
    <Login>{user.login}</Login>
    <Level>{user.cursusLevel}</Level>
  </Container>
);

UserPreview.propTypes = propTypes;

export default UserPreview;
