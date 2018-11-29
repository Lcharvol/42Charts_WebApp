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
  size = 25,
  logo,
  isHover,
  handleChangeIsHover,
  hoverValue,
}) => (
  <Container
    color={color}
    size={size}
    shape={shape}
    onMouseEnter={() => handleChangeIsHover(true)}
    onMouseLeave={() => handleChangeIsHover(false)}
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
