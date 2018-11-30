import styled from 'styled-components';

import logo from '../../../../public/logo.svg';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 160px;
`;

export const LogoContainer = styled.div`
    position:absolute;
    display:flex;
    width:100px;
    height:100px;
    background-image:url('${logo}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    @media (max-width: 1000px) {
      width:70px;
      height:70px;
    };
    z-index:1000;
`;

export const TopSide = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  width: 100%;
  background-image: url('https://cdn.intra.42.fr/coalition/cover/2/alliance_background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 500%;
`;

export const BottomSide = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  width: 100%;
`;
