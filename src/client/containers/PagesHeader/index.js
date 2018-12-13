import React, { Fragment } from 'react';
import { withStateHandlers, lifecycle, compose } from 'recompose';
import { Container, Content, FakeHeader } from './styles';

const PagesHeader = ({ isWrapped, children }) => (
  <Fragment>
    <Container isWrapped={isWrapped}>
      <Content>{children}</Content>
    </Container>
    {isWrapped && <FakeHeader />}
  </Fragment>
);

export default compose(
  withStateHandlers(
    ({ initialIsWrapped = false, initialTopPos = 0 }) => ({
      isWrapped: initialIsWrapped,
    }),
    {
      handleChangeIsWrapped: () => newValue => ({
        isWrapped: newValue,
      }),
      handleChangeScrollTopPos: ({ isWrapped }) => () => {
        const topPos = window.pageYOffset;
        if (topPos > 225 && !isWrapped)
          return {
            isWrapped: true,
          };
        else if (topPos <= 225 && isWrapped)
          return {
            isWrapped: false,
          };
        else
          return {
            isWrapped,
          };
      },
    },
  ),
  lifecycle({
    componentDidMount() {
      window.addEventListener('scroll', this.props.handleChangeScrollTopPos);
    },
    componentWillUnmount() {
      window.removeEventListener('scroll', this.props.handleChangeScrollTopPos);
    },
  }),
)(PagesHeader);
