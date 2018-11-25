import React from 'react';
import { withStateHandlers } from 'recompose';
import { isNil } from 'ramda';

import {
  Container,
  FakeContainer,
  IconContainer,
  AddIcon,
  RemoveIcon,
} from './styles';
import {
  reqAddNewFriends,
  reqDeleteFriends,
  reqGetMyFriends,
} from '../../requests';
import { eventGa } from '../../googleAnalytics';
import { ADD_FRIEND, REMOVE_FRIEND } from '../../constants/GaLabels';

const AddOrRemoveFriendButton = ({
  user,
  userId,
  addFriend,
  removeFriend,
  isHover,
  handleChangeIsHover,
  opacity,
  enhanceMe,
  usable = true,
}) => {
  const remove = !isNil(removeFriend);
  const add = !isNil(addFriend);
  if (!usable) return <FakeContainer />;
  return (
    <Container
      opacity={opacity}
      onClick={e => {
        e.preventDefault();
        if (add) {
          eventGa(ADD_FRIEND);
          addFriend(user);
          reqAddNewFriends(user.id).then(() =>
            reqGetMyFriends().then(friends => enhanceMe({ friends })),
          );
        }
        if (remove) {
          eventGa(REMOVE_FRIEND);
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
