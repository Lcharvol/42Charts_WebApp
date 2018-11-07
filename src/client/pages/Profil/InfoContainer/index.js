import React from 'react';
import { map, find, propEq, isNil } from 'ramda';

import { Container, FullName, Content, Label, Value } from './styles';

const getSelectedCursusObject = (cursusId, cursus) =>
  find(propEq('id', cursusId))(cursus);

const InfoContainer = ({ me, selectedCursus }) => {
  const cursusObject = getSelectedCursusObject(selectedCursus, me.cursus || []);
  const infoElems = [
    {
      id: 0,
      label: 'Login',
      value: me.login,
    },
    {
      id: 1,
      label: 'Year',
      value: me.poolYear,
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
      <FullName>{me.displayname}</FullName>
      {map(
        elem => (
          <Content key={elem.id}>
            <Label>{elem.label}</Label>
            <Value>{elem.value}</Value>
          </Content>
        ),
        infoElems,
      )}
    </Container>
  );
};

export default InfoContainer;
