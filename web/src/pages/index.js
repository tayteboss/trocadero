import React from "react"
import { ThemeProvider } from "styled-components"
import Theme from "../shared/theme"
import GlobalStyle from "../shared/baseCSS"

export default function Home() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <div>Hello world!</div>
    </ThemeProvider>
  )
}
