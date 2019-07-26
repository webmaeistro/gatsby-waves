import React from "react"
import { ThemeProvider, Container, Styled } from "theme-ui"
import { roboto } from "@theme-ui/presets"
import wavesVariants from "gatsby-theme-waves/src/gatsby-plugin-theme-ui/waves"

import Header from "../header"

const theme = {
  ...roboto,
  breakpoints: ["1000px"],
  styles: {
    waves: wavesVariants,
  },
}

export default props => (
  <ThemeProvider theme={theme}>
    <Styled.root>
      <Header codeUrl="https://github.com/pomber/gatsby-theme-waves/tree/master/demo/src/pages/maps" />
      <Container>{props.children}</Container>
    </Styled.root>
  </ThemeProvider>
)
