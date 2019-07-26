import React from "react"
import { ThemeProvider, Container, Styled } from "theme-ui"
import { roboto } from "@theme-ui/presets"

import Header from "../header"

import wavesVariants from "gatsby-theme-waves/src/gatsby-plugin-theme-ui/waves"
import sidebarVariant from "./waves-variant"

const theme = {
  ...roboto,
}

theme.styles.waves = {
  ...sidebarVariant,
}

export default props => (
  <ThemeProvider theme={theme}>
    <Styled.root>
      <Header codeUrl="https://github.com/pomber/gatsby-theme-waves/tree/master/demo/src/pages/charts" />
      <Container>{props.children}</Container>
    </Styled.root>
  </ThemeProvider>
)
