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
  margin-left: 7px;
  margin-right: 7px;
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

export const LogoContainer = styled.div`
  position: relative;
  display: flex;
  color: rgba(25, 25, 25, 0.8);
  font-size: 0.4em;
`;
