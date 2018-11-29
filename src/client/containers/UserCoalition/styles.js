import styled from 'styled-components';
import { isNil } from 'ramda';
import { FaTrophy } from 'react-icons/fa';
import { MdTurnedIn } from 'react-icons/md';

import { FONT_COLOR } from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 110px;
`;

export const LeftSide = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const RightSide = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 90px;
  padding-left: 10px;
`;

export const Flag = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${({ gradientColor }) => gradientColor};
  width: 85px;
  height: 85px;
  border-radius: 3px;
  &:hover {
    opacity: 0.8;
  }
  cursor: pointer;
  transition: all 0.2s ease-in-out;
`;

export const CoalitionIcon = styled.div`
  position:relative;
  display:flex;
  width:80%;
  height:80%;
  background-image:url('${({ icon }) => icon}');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity:0.3;
`;

export const Name = styled.div`
  position: relative;
  display: flex;
  font-size: 0.35em;
  color: ${({ color }) => color};
  font-weight: bold;
  min-width: 120px;
  flex: 1;
`;

export const Score = styled.div`
  position: relative;
  display: flex;
  font-size: 0.3em;
  color: ${FONT_COLOR};
  flex: 1;
`;

export const ScoreIcon = styled(FaTrophy)`
  margin-right: 5px;
`;

export const Rank = styled.div`
  position: relative;
  display: flex;
  font-size: 0.3em;
  color: ${FONT_COLOR};
  flex: 1;
`;

export const RankIcon = styled(MdTurnedIn)`
  margin-right: 5px;
  color: ${({ color }) => (!isNil(color) ? color : 'rgba(255,255,255, 0.7)')};
`;
