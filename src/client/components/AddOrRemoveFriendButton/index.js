import React from 'react';
import { withStateHandlers } from 'recompose';
import { isNil } from 'ramda';

import { Container, IconContainer, AddIcon, RemoveIcon, Label } from './styles';

const AddOrRemoveFriendButton = ({
  user,
  userId,
  addFriend,
  removeFriend,
  isHover,
  handleChangeIsHover,
  opacity,
}) => {
  const remove = !isNil(removeFriend);
  const add = !isNil(addFriend);
  return (
    <Container
      opacity={opacity}
      onClick={e => {
        e.preventDefault();
        if (add) addFriend(user);
        if (remove) removeFriend(userId);
      }}
      onMouseEnter={() => handleChangeIsHover(true)}
      onMouseLeave={() => handleChangeIsHover(false)}
    >
      <IconContainer remove={remove} isHover={isHover}>
        {remove ? <RemoveIcon /> : <AddIcon />}
      </IconContainer>
      <Label opacity={isHover ? 1 : 0} remove={remove}>
        {add && 'Add to Friends'}
        {remove && 'Remove Friend'}
      </Label>
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
