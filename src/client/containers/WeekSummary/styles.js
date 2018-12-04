import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdExpandMore, MdExpandLess } from 'react-icons/md';

import { MAIN_COLOR, DARK_FONT_COLOR } from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 200px;
  padding: 10px;
  padding-top: 0px;
  box-sizing: border-box;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const WeekSummaryElem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  min-height: 50px;
  padding-left: 15px;
  padding-right: 15px;
  box-sizing: border-box;
  margin-top: 5px;
  margin-bottom: 5px;
`;

export const WeekSummaryLabel = styled.div`
  positon: relative;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  color: ${DARK_FONT_COLOR};
  font-size: 0.25em;
  padding-left: 15px;
`;

export const WeekSummaryValue = styled.div`
  positon: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
  color: ${MAIN_COLOR};
  flex: 1;
  font-size: 0.35em;
`;

export const Spacer = styled.div`
  position:relative;
  display:flex
  width:100%;
  min-height:5px;
`;

export const ExpandButton = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${MAIN_COLOR};
  font-size: 0.6em;
  width: 100%;
  cursor: pointer;
`;

export const MoreIcon = styled(MdExpandMore)`
  position: relative;
  display: flex;
  color: ${MAIN_COLOR};
  cursor: pointer;
`;

export const LessIcon = styled(MdExpandLess)`
  position: relative;
  display: flex;
  color: ${MAIN_COLOR};
  cursor: pointer;
`;

export const StyledLink = styled(Link)`
  positon: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
  color: ${MAIN_COLOR};
  flex: 1;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;
