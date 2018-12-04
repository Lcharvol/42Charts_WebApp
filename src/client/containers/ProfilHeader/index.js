import React from 'react';
import { number, object, string } from 'prop-types';
import { isNil, find, propEq, isEmpty } from 'ramda';

import {
  Container,
  LeftSide,
  RightSide,
  InlineBlock,
  ColumnBlock,
} from './styles';
import UserAvatar from '../../components/UserAvatar';
import InfoContainer from './InfoContainer';
import UserCoalition from '../../containers/UserCoalition';
import LevelBar from '../../components/LevelBar';
import { coalitionsBackground } from '../../constants/coalitions';
import { MAIN_COLOR } from '../../constants/colors';
import DEFAULT_BACKGROUND from '../../../../public/poly_background.jpg';
import { RESPONSIVITY_WIDTH } from './constants';
import AddOrRemoveFriendButtonProfil from '../../components/AddOrRemoveFriendButtonProfil';

const proptypes = {
  winWidth: number.isRequired,
  coalition: object,
  profilPicture: string,
  color: string,
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
  color = MAIN_COLOR,
  displayAddFriendButton,
  isMyFriend,
  addFriend,
  removeFriend,
  enhanceMe,
}) => {
  const colationElem =
    find(propEq('name', coalition.name))(coalitionsBackground) || {};
  return (
    <Container
      backgroundUrl={
        !isNil(colationElem) ? colationElem.backgroundUrl : DEFAULT_BACKGROUND
      }
    >
      <LeftSide>
        <UserAvatar
          profilPicture={profilPicture}
          width={'150px'}
          height={'150px'}
          round
        />
        <InfoContainer
          selectedCursus={selectedCursus}
          user={user}
          color={color[0] === '#' ? color : `#${color}`}
        />
        <ColumnBlock>
          {winWidth <= RESPONSIVITY_WIDTH &&
            !isNil(colationElem) && <UserCoalition coalition={coalition} />}
          {winWidth <= RESPONSIVITY_WIDTH &&
            displayAddFriendButton && (
              <AddOrRemoveFriendButtonProfil
                user={user}
                usable={true}
                userId={user.id}
                addFriend={isMyFriend ? undefined : addFriend}
                removeFriend={isMyFriend ? removeFriend : undefined}
                enhanceMe={enhanceMe}
              />
            )}
        </ColumnBlock>
      </LeftSide>
      <RightSide>
        <InlineBlock>
          {winWidth > RESPONSIVITY_WIDTH &&
            !isNil(colationElem) && <UserCoalition coalition={coalition} />}
          {winWidth > RESPONSIVITY_WIDTH &&
            displayAddFriendButton && (
              <AddOrRemoveFriendButtonProfil
                user={user}
                usable={true}
                userId={user.id}
                addFriend={isMyFriend ? undefined : addFriend}
                removeFriend={isMyFriend ? removeFriend : undefined}
                enhanceMe={enhanceMe}
              />
            )}
        </InlineBlock>
        <LevelBar
          level={getLevelFromCursus(selectedCursus, cursus || [])}
          color={color[0] === '#' ? color : `#${color}`}
          gradientColor={colationElem.gradientColor}
        />
      </RightSide>
    </Container>
  );
};

ProfilHeader.propTypes = proptypes;

export default ProfilHeader;
