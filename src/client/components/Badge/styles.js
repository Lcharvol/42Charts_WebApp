import styled from 'styled-components';
import {
  BACKGROUND_COLOR,
  DARK_BORDER_COLOR,
  DARK_FONT_COLOR,
} from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ color }) => color};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ shape }) => (shape === 'round' ? '100%' : '3px')};
  margin-left: 7px;
  margin-right: 7px;
`;

export const Icon = styled.div`
    position:relative;
    display:flex;
    min-width:70%;
    min-height:70%;
    background-image:url('${({ imageUrl }) => imageUrl}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity:0.5;
`;

export const LogoContainer = styled.div`
  position: relative;
  display: flex;
  color: rgba(25, 25, 25, 0.8);
  font-size: 0.4em;
`;

export const HoverValueContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-warp: no-wrap;
  height: 30px;
  background-color: ${BACKGROUND_COLOR};
  border: solid 1px ${DARK_BORDER_COLOR};
  border-radius: 3px;
  font-size: 0.3em;
  color: ${DARK_FONT_COLOR};
  min-width: 180px;
  top: -35px;
  left: 20px;
  padding-right: 5px;
  padding-left: 5px;
  z-index: 2000;
`;
