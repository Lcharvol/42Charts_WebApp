import styled from 'styled-components';
import {
  DARK_FONT_COLOR,
  DARK_BORDER_COLOR,
  MAIN_COLOR,
  RED,
} from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${DARK_FONT_COLOR};
  min-height: 40px;
  width: 100%;
  font-size: 0.3em;
  border-bottom: solid 1px ${DARK_BORDER_COLOR};
`;

export const ProjectInfos = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
`;

export const ProjectName = styled.div`
  positon: relative;
  display: flex;
`;

export const TierLabel = styled.div`
  position: relative;
  display: flex;
  color: ${MAIN_COLOR};
`;

export const MyMark = styled.div`
  position: relative;
  display: flex;
  color: ${({ validated }) => (validated ? MAIN_COLOR : RED)};
  margin-right: 25px;
`;
