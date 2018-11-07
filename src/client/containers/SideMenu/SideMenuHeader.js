import React from 'react';

import { SideMenuHeaderContainer, Login } from './styles';
import UserAvatar from '../../components/UserAvatar';

const SideMenuHeader = ({ me }) => {
  return (
    <SideMenuHeaderContainer>
      <UserAvatar
        width={'50px'}
        height={'50px'}
        margin={'15px'}
        profilPicture={me.imageUrl}
      />
      <Login>{me.login}</Login>
    </SideMenuHeaderContainer>
  );
};

export default SideMenuHeader;
