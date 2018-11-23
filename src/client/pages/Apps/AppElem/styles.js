import styled from 'styled-components';
import { isNil } from 'ramda';

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
  top: 0;
  left: 0;
  background-color: rgba(25, 25, 25, 0.4);
  width: 115px;
  height: 115px;
  opacity: ${({ opacity }) => opacity};
  transition: all 0.2s ease-in-out;
`;

export const LikeIcon = styled.div``;

export const DislikeIcon = styled.div``;

export const MoreIcon = styled.div``;
