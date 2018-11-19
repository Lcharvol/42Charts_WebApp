import React from 'react';
import { map, find, propEq, isNil } from 'ramda';

import { Container, FullName, Content, Label, Value } from './styles';

const getSelectedCursusObject = (cursusId, cursus) =>
  find(propEq('id', cursusId))(cursus);

const InfoContainer = ({ user, selectedCursus, color }) => {
  const cursusObject = getSelectedCursusObject(
    selectedCursus,
    user.cursus || [],
  );
  const infoElems = [
    {
      id: 0,
      label: 'Login',
      value: user.login,
    },
    {
      id: 1,
      label: 'Year',
      value: user.poolYear,
    },
    {
      id: 2,
      label: 'Cursurs',
      value: !isNil(cursusObject) ? cursusObject.name : '',
    },
    {
      id: 3,
      label: 'Grade',
      value: !isNil(cursusObject) ? cursusObject.grade : '',
    },
  ];
  return (
    <Container>
      <FullName>{user.displayname}</FullName>
      {map(
        elem => (
          <Content key={elem.id}>
            <Label color={color}>{elem.label}</Label>
            <Value>{elem.value}</Value>
          </Content>
        ),
        infoElems,
      )}
    </Container>
  );
};

export default InfoContainer;
