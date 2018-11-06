import React from 'react';
import { splitAt } from 'ramda';

import { SideMenuHeaderContainer, Login, FirstLetter } from './styles';
import UserAvatar from '../../components/UserAvatar';

const SideMenuHeader = ({ me }) => {
  const splitedName = splitAt(1, me.login || '');
  const firstLetter = splitedName[0];
  const name = splitedName[1];

  return (
    <SideMenuHeaderContainer>
      <UserAvatar
        width={'50px'}
        height={'50px'}
        margin={'15px'}
        profilPicture={me.imageUrl}
      />
      <Login>
        <FirstLetter>{firstLetter}</FirstLetter>
        {name}
      </Login>
    </SideMenuHeaderContainer>
  );
};

export default SideMenuHeader;
