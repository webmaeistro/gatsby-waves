/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { CodeSurfer } from "@code-surfer/standalone"
import { readStepFromElement } from "../stuff/step-reader"

function CodeWave({ steps: stepElements, progress, variant }) {
  const steps = React.useMemo(
    () =>
      stepElements.map(element => {
        const parsedStep = readStepFromElement(element)
        return parsedStep
      }),
    []
  )

  return (
    <div
      sx={{
        variant: `styles.waves.${variant}.StickerContainer`,
      }}
    >
      <div
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <div sx={{ variant: `styles.waves.${variant}.Sticker` }}>
          <CodeSurfer progress={progress} steps={steps} />
        </div>
      </div>
    </div>
  )
}

export default CodeWave
