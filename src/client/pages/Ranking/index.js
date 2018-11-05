import React from 'react';
import { map } from 'ramda';

import { Container, UsersPrewiewContainer } from './styles';
import PromoFilter from './PromoFilter';
import UserPreview from '../../components/UserPreview';

const fakeUser = [
  {
    id: 0,
    firstName: 'Lucas',
    lastName: 'Charvolin',
    login: 'Lcharvol',
    profilPicture: 'https://cdn.intra.42.fr/users/medium_lcharvol.jpg',
    lvl: 16.03,
  },
  {
    id: 1,
    firstName: 'Yoann',
    lastName: 'Fuks',
    login: 'Yfuks',
    profilPicture: 'https://cdn.intra.42.fr/users/medium_yfuks.jpg',
    lvl: 2,
  },
];

const Ranking = () => (
  <Container>
    <PromoFilter />
    <UsersPrewiewContainer>
      {map(
        user => (
          <UserPreview key={user.id} user={user} />
        ),
        fakeUser,
      )}
    </UsersPrewiewContainer>
  </Container>
);

export default Ranking;
