import React from 'react';
import { ThemeProvider } from 'styled-components';
import Theme from '../shared/theme';
import GlobalStyle from '../shared/baseCSS';
import H1 from '../elements/typography/H1';

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <H1>Hello world!</H1>
    </ThemeProvider>
  )
};
