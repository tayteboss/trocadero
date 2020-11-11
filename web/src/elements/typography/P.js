import styled from 'styled-components';

const P = styled.p`
    color: ${props => props.theme.colours.lightGray};
    font-family: ${props => props.theme.fonts.studioPro};
    font-size: ${props => props.theme.size.p};
    margin: 0 0 10px 0;
`;

export default P;
