import React from 'react';

import { SideMenuHeaderContainer, Login } from './styles';
import UserAvatar from '../../components/UserAvatar';

const SideMenuHeader = ({ me, winWidth }) => {
  return (
    <SideMenuHeaderContainer>
      <UserAvatar
        width={'50px'}
        height={'50px'}
        margin={winWidth > 1000 ? '15px' : '0px'}
        profilPicture={me.imageUrl}
      />
      {winWidth > 1000 && <Login to={'/'}>{me.login}</Login>}
    </SideMenuHeaderContainer>
  );
};

export default SideMenuHeader;
