import styled from 'styled-components';
import { FONT_COLOR } from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  width: 150px;
  height: 100px;
`;

export const LeftSide = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const RightSide = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Flag = styled.div`
  position: relative;
  display: flex;
  background-color: ${({ color }) => color};
  width: 65px;
  height: 65px;
  border-radius: 3px;
`;

export const Name = styled.div`
  position: relative;
  display: flex;
  font-size: 0.3em;
  color: ${({ color }) => color};
  font-weight: bold;
`;

export const Score = styled.div`
  position: relative;
  display: flex;
  font-size: 0.3em;
  color: ${FONT_COLOR};
`;

export const Rank = styled.div`
  position: relative;
  display: flex;
  font-size: 0.3em;
  color: ${FONT_COLOR};
`;
