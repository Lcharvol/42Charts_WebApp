import styled from 'styled-components';

import logo from '../../../../public/favicon.png';

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
`;

export const LogoContainer = styled.div`
    position:relative;
    display:flex;
    width:50px;
    height:50px;
    background-image:url('${logo}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
