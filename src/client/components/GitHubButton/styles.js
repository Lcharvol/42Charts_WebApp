import styled from 'styled-components';
import { GoMarkGithub } from 'react-icons/go';
import { MdEdit } from 'react-icons/md';

import {
  LIGHT_BACKGROUND_COLOR,
  BORDER_COLOR,
  BACKGROUND_COLOR,
  LIGHT_GREY,
  MAIN_COLOR,
} from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  height: 34px;
  margin-right: 10px;
  margin-bottom: 10px;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 28px;
  border-radius: 3px;
  line-height: 20px;
  padding: 3px 10px;
  background-color: #eff3f6;
  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
  color: #24292e;
  border: 1px solid rgba(27, 31, 35, 0.2);
  cursor: pointer;
  &:hover {
    background-color: white;
    background-image: none;
  }
  z-index: 300;
`;

export const GitHubIcon = styled(GoMarkGithub)`
  position: relative;
  display: flex;
  color: #24292e;
  font-size: 0.5em;
`;

export const Label = styled.div`
  position: relative;
  display: flex;
  font-size: 0.25em;
  margin-left: 5px;
`;

export const ModifyLinkContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 35px;
  min-height: 100%;
  background-color: #eff3f6;
  background-image: linear-gradient(-180deg, #fafbfc, #eff3f6 90%);
  border: 1px solid rgba(27, 31, 35, 0.2);
  border-radius: 3px;
  margin-left: -5px;
  z-index: 200;
  cursor: pointer;
  &:hover {
    color: ${MAIN_COLOR};
  }
  opacity: 0.9;
`;

export const ModifyLinkIcon = styled(MdEdit)`
  font-size: 0.4em;
  margin-left: 3px;
`;
