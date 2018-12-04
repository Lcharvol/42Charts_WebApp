import React from 'react';
import { withStateHandlers } from 'recompose';
import { isNil } from 'ramda';

import { Container, ButtonContainer, AddIcon, RemoveIcon } from './styles';
import {
  reqAddNewFriends,
  reqDeleteFriends,
  reqGetMyFriends,
} from '../../requests';
import { eventGa } from '../../googleAnalytics';
import { ADD_FRIEND, REMOVE_FRIEND } from '../../constants/GaLabels';
import { DARK_BACKGROUND_COLOR } from '../../constants/colors';

const AddOrRemoveFriendButton = ({
  user,
  userId,
  addFriend,
  removeFriend,
  isHover,
  handleChangeIsHover,
  enhanceMe,
}) => {
  const remove = !isNil(removeFriend);
  const add = !isNil(addFriend);
  return (
    <Container
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
      <ButtonContainer remove={remove} isHover={isHover}>
        {remove ? <RemoveIcon /> : <AddIcon />}
        {remove ? 'Remove Friend' : 'Add Friend'}
      </ButtonContainer>
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
