import React from 'react';
import { withStateHandlers } from 'recompose';
import { isNil } from 'ramda';

import { Container, IconContainer, Icon, Label } from './styles';

const AddOrRemoveFriendButton = ({
  user,
  userId,
  addFriend,
  removeFriend,
  isHover,
  handleChangeIsHover,
  opacity,
}) => (
  <Container
    opacity={opacity}
    onClick={e => {
      e.preventDefault();
      if (!isNil(addFriend)) addFriend(user);
      if (!isNil(removeFriend)) removeFriend(userId);
    }}
    onMouseEnter={() => handleChangeIsHover(true)}
    onMouseLeave={() => handleChangeIsHover(false)}
  >
    <IconContainer isHover={isHover}>
      <Icon />
    </IconContainer>
    {isHover && (
      <Label>
        {!isNil(addFriend) && 'Add to Friends'}
        {!isNil(removeFriend) && 'Remove Friend'}
      </Label>
    )}
  </Container>
);

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
