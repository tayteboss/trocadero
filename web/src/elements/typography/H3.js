import styled from 'styled-components';

const H3 = styled.h3`
    color: ${props => props.theme.colours.lightGray};
    font-family: ${props => props.theme.fonts.studioPro};
    font-size: ${props => props.theme.size.h3};
    margin: 0 0 24px 0;
`;

export default H3;
