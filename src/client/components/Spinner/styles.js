import styled from 'styled-components';

import { MAIN_COLOR } from '../../constants/colors';

export const SpinnerContainer = styled.div`
  position: relative;
  display: flex;
  margin-top: 50px;
  width: 50%;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 100px;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  z-index: 1000;
  top: 60px;
`;

export const SpinnerElem = styled.div`
  background-color: #333;
  height: ${({ height }) => height}px;
  margin: 5px;
  width: 6px;
  display: inline-block;
  background-color: ${MAIN_COLOR};
  opacity: 0.4;
  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;
  animation: sk-stretchdelay 1.2s infinite ease-in-out;
  animation-delay: ${({ delay }) => delay}s;
  @-webkit-keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      -webkit-transform: scaleY(0.4);
    }
    20% {
      -webkit-transform: scaleY(1);
    }
  }
  @keyframes sk-stretchdelay {
    0%,
    40%,
    100% {
      transform: scaleY(0.4);
      -webkit-transform: scaleY(0.4);
    }
    20% {
      transform: scaleY(1);
      -webkit-transform: scaleY(1);
      opacity: 1;
    }
  }
`;
