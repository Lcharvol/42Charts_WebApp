import React from 'react';

import { SideMenuHeaderContainer, Login } from './styles';
// import UserAvatar from '../../components/UserAvatar';

const SideMenuHeader = ({ user }) => (
  <SideMenuHeaderContainer>
    {/* <UserAvatar
      width={'50px'}
      height={'50px'}
      margin={'15px'}
      profilPicture={user.profilPicture}
    /> */}
    <Login>{user.login}</Login>
  </SideMenuHeaderContainer>
);

export default SideMenuHeader;
