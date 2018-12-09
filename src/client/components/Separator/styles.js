import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: ${({ width }) => width};
  height: 1px;
  background-image: linear-gradient(
    to right,
    transparent 0%,
    ${({ color }) => color} 10%,
    ${({ color }) => color} 90%,
    transparent 100%
  );
  margin-left: auto;
  margin-right: auto;
`;
