import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { isNil } from 'ramda';
import { FaPlus } from 'react-icons/fa';
import { MdThumbUp } from 'react-icons/md';

import { DARK_FONT_COLOR, MAIN_COLOR } from '../../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 115px;
  height: 115px;
  margin: 15px;
  border-radius: 3px;
  background-image: ${({ imageUrl }) =>
    !isNil(imageUrl)
      ? `url('${imageUrl}')`
      : 'linear-gradient(rgb(35, 35, 35), rgba(30, 30, 30))'};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  transition: all 0.1s ease-in-out;
`;

export const Shadow = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  top: 0;
  left: 0;
  background-color: rgba(25, 25, 25, 0.4);
  width: 115px;
  height: 115px;
  opacity: ${({ opacity }) => opacity};
  transition: all 0.2s ease-in-out;
`;

export const LikeButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const LikeIcon = styled(MdThumbUp)`
  font-size: 0.5em;
  color: ${DARK_FONT_COLOR};
  &:hover {
    color: ${MAIN_COLOR};
  }
`;

export const PlusButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const PlusIcon = styled(FaPlus)`
  font-size: 0.5em;
  color: ${DARK_FONT_COLOR};
  &:hover {
    color: ${MAIN_COLOR};
  }
`;
