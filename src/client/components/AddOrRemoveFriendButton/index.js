import React from 'react';
import { withStateHandlers } from 'recompose';
import { isNil } from 'ramda';

import { Container, IconContainer, AddIcon, RemoveIcon, Label } from './styles';
import {
  reqAddNewFriends,
  reqDeleteFriends,
  reqGetMyFriends,
} from '../../requests';

const AddOrRemoveFriendButton = ({
  user,
  userId,
  addFriend,
  removeFriend,
  isHover,
  handleChangeIsHover,
  opacity,
  enhanceMe,
}) => {
  const remove = !isNil(removeFriend);
  const add = !isNil(addFriend);
  return (
    <Container
      opacity={opacity}
      onClick={e => {
        e.preventDefault();
        if (add) {
          addFriend(user);
          reqAddNewFriends(user.id).then(() =>
            reqGetMyFriends().then(friends => enhanceMe({ friends })),
          );
        }
        if (remove) {
          removeFriend(userId);
          reqDeleteFriends(user.id);
        }
      }}
      onMouseEnter={() => handleChangeIsHover(true)}
      onMouseLeave={() => handleChangeIsHover(false)}
    >
      <IconContainer remove={remove} isHover={isHover}>
        {remove ? <RemoveIcon /> : <AddIcon />}
      </IconContainer>
      {/* <Label opacity={isHover ? 1 : 0} remove={remove}>
        {add && 'Add to Friends'}
        {remove && 'Remove Friend'}
      </Label> */}
    </Container>
  );
};

export default withStateHandlers(
  ({ initialIsHover = false }) => ({
    isHover: initialIsHover,
  }),
  {
    handleChangeIsHover: () => newValue => ({
      isHover: newValue,
    }),
  },
)(AddOrRemoveFriendButton);
