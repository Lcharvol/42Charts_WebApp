import React from 'react';
import { number, object, string } from 'prop-types';
import { isNil, find, propEq, isEmpty } from 'ramda';

import { Container, LeftSide, RightSide } from './styles';
import UserAvatar from '../../components/UserAvatar';
import InfoContainer from './InfoContainer';
import UserCoalition from '../../containers/UserCoalition';
import LevelBar from '../../components/LevelBar';
import { coalitionsBackground } from '../../constants/coalitions';

const proptypes = {
  winWidth: number.isRequired,
  coalition: object,
  profilPicture: string,
};

const getLevelFromCursus = (cursusId, cursus) => {
  const selectedCursusObject = find(propEq('id', cursusId))(cursus);
  if (!isNil(selectedCursusObject)) return selectedCursusObject.level;
  else if (!isEmpty(cursus)) return cursus[0].level;
  return 0;
};

const ProfilHeader = ({
  winWidth,
  coalition,
  profilPicture,
  cursus,
  selectedCursus,
  user,
}) => {
  const colationElem = find(propEq('name', coalition.name))(
    coalitionsBackground,
  );
  return (
    <Container
      backgroundUrl={!isNil(colationElem) ? colationElem.backgroundUrl : ''}
    >
      <LeftSide>
        <UserAvatar
          profilPicture={profilPicture}
          width={'150px'}
          height={'150px'}
          round
        />
        <InfoContainer selectedCursus={selectedCursus} user={user} />
        {winWidth <= 1000 && <UserCoalition coalition={coalition} />}
      </LeftSide>
      <RightSide>
        {winWidth > 1000 && <UserCoalition coalition={coalition} />}
        <LevelBar level={getLevelFromCursus(selectedCursus, cursus || [])} />
      </RightSide>
    </Container>
  );
};

ProfilHeader.propTypes = proptypes;

export default ProfilHeader;
