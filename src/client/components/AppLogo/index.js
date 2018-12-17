import React from 'react';
import {
  compose,
  withStateHandlers,
  lifecycle,
  onlyUpdateForKeys,
} from 'recompose';

import {
  Container,
  LogoContainer,
  BottomSide,
  TopSide,
  FakeTopSide,
} from './styles';
import { getRandomNumber } from '../../utils';

const intv = handleChangeOpacity =>
  setInterval(() => {
    let randomTimer = getRandomNumber(500, 1500);
    handleChangeOpacity();
    setTimeout(() => handleChangeOpacity(), randomTimer);
  }, 2000);

const AppLogo = ({ opacity }) => (
  <Container>
    <TopSide opacity={opacity} />
    <FakeTopSide size={70} delay={0.3} opacity={opacity} />
    <FakeTopSide size={90} delay={0.5} opacity={opacity} />
    <LogoContainer />
    <BottomSide opacity={opacity} />
  </Container>
);

export default compose(
  withStateHandlers(
    ({ initialOpacity = 0 }) => ({
      opacity: initialOpacity,
    }),
    {
      handleChangeOpacity: ({ opacity }) => () => ({
        opacity: getRandomNumber(0, 100) / 100,
      }),
    },
  ),
  lifecycle({
    componentDidMount() {
      intv(this.props.handleChangeOpacity);
    },
    componentWillUnmount() {
      clearInterval(intv);
    },
  }),
  onlyUpdateForKeys(['opacity']),
)(AppLogo);
