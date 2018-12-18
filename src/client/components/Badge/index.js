import React from 'react';
import { isNil, length } from 'ramda';
import { withStateHandlers } from 'recompose';
import { string, number, bool, func } from 'prop-types';

import { Container, Icon, LogoContainer, HoverValueContainer } from './styles';

const proptypes = {
  color: string,
  imageUrl: string,
  size: number,
  shape: string,
  isHover: bool.isRequired,
  handleChangeIsHover: func.isRequired,
  hoverValue: string,
};

const Badge = ({
  color,
  imageUrl,
  shape = 'round',
  width = 25,
  height = 25,
  logo,
  icon,
  isHover,
  handleChangeIsHover,
  hoverValue,
}) => (
  <Container
    color={color}
    width={width}
    height={height}
    shape={shape}
    onMouseEnter={() => handleChangeIsHover(true)}
    onMouseLeave={() => handleChangeIsHover(false)}
    icon={icon}
  >
    {isHover &&
      !isNil(hoverValue) &&
      length(hoverValue) > 0 && (
        <HoverValueContainer>{hoverValue}</HoverValueContainer>
      )}
    {!isNil(imageUrl) && <Icon imageUrl={imageUrl} />}
    {!isNil(logo) && <LogoContainer>{logo}</LogoContainer>}
  </Container>
);

Badge.propTypes = proptypes;

export default withStateHandlers(
  ({ initialIsHover = false }) => ({
    isHover: initialIsHover,
  }),
  {
    handleChangeIsHover: () => newValue => ({
      isHover: newValue,
    }),
  },
)(Badge);
