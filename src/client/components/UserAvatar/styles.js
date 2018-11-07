import styled from 'styled-components';
import { BACKGROUND_COLOR } from '../../constants/colors';

export const Container = styled.div`
    position:relative;
    margin:${({ margin }) => margin};
    display:flex;
    border-radius:3px;
    min-width:${({ width }) => width};
    min-height:${({ height }) => height};
    background-color:${BACKGROUND_COLOR};
    background-image:url('${({ profilPicture }) => profilPicture}');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
