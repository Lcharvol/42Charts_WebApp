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
`;
