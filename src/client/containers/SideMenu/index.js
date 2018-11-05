import React from 'react';
import { contains, split } from 'ramda';

import { Container } from './styles';
import SideMenuHeader from './SideMenuHeader';
import Separator from '../../components/Separator';
import Menu from './Menu';

import { noAuthneeded } from '../../auth';

const SideMenu = ({ user, routes, hidden }) => {
  const { pathname } = window.location;
  const [route] = split('/', pathname.slice(1));
  if (contains(route, noAuthneeded)) return null;

  return (
    <Container hidden={hidden}>
      <SideMenuHeader user={user} />
      <Separator width={'85%'} />
      <Menu routes={routes} />
    </Container>
  );
};

export default SideMenu;
