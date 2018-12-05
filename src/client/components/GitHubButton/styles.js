import styled from 'styled-components';
import { GoMarkGithub } from 'react-icons/go';

import {
  LIGHT_BACKGROUND_COLOR,
  BORDER_COLOR,
  BACKGROUND_COLOR,
  LIGHT_GREY,
} from '../../constants/colors';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 28px;
  background-color: $;
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
