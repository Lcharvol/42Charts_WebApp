import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  position: relative;
  width: ${({ width }) => width};
  height: 1px;
  background-color: ${({ color }) => color};
  margin-left: auto;
  margin-right: auto;
`;
