/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import React from "react"
import BarScroller from "gatsby-theme-waves/src/components/bar-scroller"
import Wave from "gatsby-theme-waves/src/components/wave"
import { ResponsiveContainer, BarChart, XAxis, YAxis, Bar } from "recharts"

function toColumns(items, columnCount) {
  const columns = Array(columnCount)
    .fill()
    .map(() => [])

  items.forEach((item, i) => {
    const isCode = item.props && item.props.mdxType === "pre"
    if (isCode) {
      const json = JSON.parse(item.props.children.props.children)
      columns[0].push(json)
      columns[1].push(React.createElement("div", {}, []))
    } else {
      const step = columns[0].length - 1
      columns[1][step].props.children.push(item)
    }
  })

  return columns
}

function ChartWave(props) {
  const childrenToColumns = children => {
    const items = React.Children.map(children, child => [child])
    const columnCount = 2
    const columns = toColumns(items, columnCount)
    return columns
  }

  return (
    <Wave
      columnComponents={[ChartSticker, BarScroller]}
      childrenToStepColumns={childrenToColumns}
      variant="sidebar"
      {...props}
    />
  )
}

function ChartSticker({ variant, steps, currentStep, progress }) {
  const { theme } = useThemeUI()
  return (
    <div sx={{ variant: `styles.waves.${variant}.StickerContainer` }}>
      <div sx={{ variant: `styles.waves.${variant}.Sticker` }}>
        <ResponsiveContainer>
          <BarChart
            data={steps[currentStep]}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="x" stroke="currentColor" />
            <YAxis stroke="currentColor" />
            <Bar dataKey="y" fill={theme.colors.secondary} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default ChartWave
