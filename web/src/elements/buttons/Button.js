import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const PrimaryButtonStyle = css`
  color: ${props => props.theme.colours.red};
  background-color: ${props => props.theme.colours.salmon};
  &:active {
    color: ${props => props.theme.colours.white};
    background-color: ${props => props.theme.colours.primary.dark};
  }
`;
const SecondaryButtonStyle = css`
  color: ${props => props.theme.colours.black};
  background-color: ${props => props.theme.colours.warmgray};
  &:active {
    background-color: ${props => props.theme.colours.lightgray};
  }
`;

const ButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  ${props => {
    switch (props.styletype) {
      case 'primary':
        return PrimaryButtonStyle;
      case 'secondary':
        return SecondaryButtonStyle;
      default:
        return PrimaryButtonStyle;
    }
  }};
  border: none;
  font-size: ${props => props.theme.size.h6};
  text-align: center;
  width: 150px;
  margin-bottom: 30px;
  cursor: pointer;
  box-sizing: border-box;
  padding: 0;
  height: ${props => (props.small ? '50px' : '60px')};
  line-height: ${props => (props.small ? '50px' : '60px')};
  border-radius: ${props => (props.small ? '25px' : '30px')};
  font-family: ${props => props.theme.fonts.studioPro};
`;
const Button = ({ children, styletype, ariaLabel, ...props }) => (
  <ButtonStyled
    type='button'
    styletype={styletype}
    aria-label={ariaLabel}
    {...props}
  >
    {children}
  </ButtonStyled>
);
Button.propTypes = {
  styletype: PropTypes.oneOf(['primary', 'secondary']),
  children: PropTypes.node.isRequired,
  ariaLabel: PropTypes.string,
};
Button.defaultProps = {
  styletype: 'primary',
  ariaLabel: '',
};
export default Button;