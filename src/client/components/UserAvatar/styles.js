import styled from 'styled-components';
import { BACKGROUND_COLOR } from '../../constants/colors';

export const Container = styled.div`
    position:relative;
    margin:${({ margin }) => margin};
    display:flex;
    min-width:${({ width }) => width};
    min-height:${({ height }) => height};
    background-color:${BACKGROUND_COLOR};
    background-image:url('${({ profilPicture }) => profilPicture}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius:${({ round }) => (round ? '100%' : '3px')};
`;
