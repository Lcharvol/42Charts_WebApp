import styled from 'styled-components';

import logo from '../../../../public/logo.svg';
import { MAIN_COLOR, BACKGROUND_COLOR } from '../../constants/colors';
import { MdSettings } from 'react-icons/md';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 160px;
`;

export const LogoContainer = styled.div`
    position:absolute;
    display:flex;
    width:100px;
    height:100px;
    background-image:url('${logo}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 1000px) {
      width:70px;
      height:70px;
    };
    z-index:1000;
`;

export const TopSide = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  width: 100%;
  background-color: ${MAIN_COLOR};
  opacity: 0.6;
`;

export const BottomSide = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  width: 100%;
`;

export const OptionButton = styled(MdSettings)`
  position: absolute;
  display: flex;
  top: 10px;
  left: 10px;
  font-size: 0.35em;
  color: ${BACKGROUND_COLOR};
  &:hover {
    opacity: 0.6;
  }
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  z-index: 1000;
`;
