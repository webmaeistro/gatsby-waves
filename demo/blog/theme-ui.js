import deepmerge from "deepmerge"
import blogTheme from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/index"
import wavesTheme from "gatsby-theme-waves/src/gatsby-plugin-theme-ui/index"

export default deepmerge.all([
  blogTheme,
  wavesTheme,
  {
    breakpoints: ["1000px"],
    colors: { primary: "#011627", modes: { dark: { background: "#1e1e1e" } } },
  },
])
