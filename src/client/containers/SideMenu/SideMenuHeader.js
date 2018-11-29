import React from 'react';

import { SideMenuHeaderContainer, Login } from './styles';
import UserAvatar from '../../components/UserAvatar';

const SideMenuHeader = ({ imageUrl, login, winWidth }) => {
  return (
    <SideMenuHeaderContainer>
      <UserAvatar
        width={'40px'}
        height={'40px'}
        margin={winWidth > 1000 ? '15px' : 'px'}
        profilPicture={imageUrl}
      />
      {winWidth > 1000 && (
        <Login>{login.charAt(0).toUpperCase() + login.slice(1)}</Login>
      )}
    </SideMenuHeaderContainer>
  );
};

export default SideMenuHeader;
