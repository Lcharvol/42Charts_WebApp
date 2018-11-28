import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ color }) => color};
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  border-radius: ${({ shape }) => (shape === 'round' ? '100%' : '3px')};
`;

export const Icon = styled.div`
    position:relative;
    display:flex;
    min-width:70%;
    min-height:70%;
    background-image:url('${({ imageUrl }) => imageUrl}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    opacity:0.5;
`;
