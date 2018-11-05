import React from 'react';

import { Container } from './styles';
import SideMenuHeader from './SideMenuHeader';
import Separator from '../../components/Separator';
import Menu from './Menu';

const SideMenu = ({ user, routes, hidden }) => (
  <Container hidden={hidden}>
    <SideMenuHeader user={user} />
    <Separator width={'85%'} />
    <Menu routes={routes} />
  </Container>
);

export default SideMenu;
