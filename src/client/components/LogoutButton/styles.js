import styled from 'styled-components';

import LogoutButtonUI from '../../../../public/logout_button.svg';

export const Container = styled.svg`
    position:absolute;
    top:15px;
    left: calc(100vw - 60px);
    display:flex;
    background-image:url('${LogoutButtonUI}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    width:40px;
    height:40px;
    opacity:1;
    cursor:pointer;
    &:hover {
        transform: rotate(90deg) scale(0.8);
        opacity:0.8;
    }
    transition: opacity 0.2s ease-in-out, transform 0.2s ease-in-out;
`;
