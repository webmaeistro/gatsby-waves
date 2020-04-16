/** @jsx jsx */
import { jsx, useThemeUI } from "theme-ui"
import React from "react"
import { useSpring } from "use-spring"

function getProgress(scroller, focusPoint) {
  const children = scroller.childNodes
  const middle = window.innerHeight * focusPoint
  let prevBottom = children[0].getBoundingClientRect().bottom
  for (let i = 1; i < children.length; i++) {
    const { top, bottom } = children[i].getBoundingClientRect()
    const breakpoint = (prevBottom + top) / 2
    if (middle < breakpoint) {
      return i - 1
    }
    prevBottom = bottom
  }
  return children.length - 1
}

function useFocusPoint(variant) {
  if (typeof window === "undefined") return false
  //TODO keep focus point in ref and update on window resize
  const { theme } = useThemeUI()
  const focus = theme.styles.waves[variant].focus || [0.7, 0.5]
  //TODO find out how to get default breakpoints from theme-ui
  const breakpoint = theme.breakpoints ? theme.breakpoints[0] : "40em"
  let mql = window.matchMedia(`(min-width: ${breakpoint})`)
  return mql.matches ? focus[1] : focus[0]
}

function useCurrentStep(ref, variant) {
  const [progress, setProgress] = React.useState(0)
  const focusPoint = useFocusPoint(variant)

  React.useEffect(() => {
    const scroller = ref.current.querySelector(".scroller")
    function onScroll() {
      const newProgress = getProgress(scroller, focusPoint)
      setProgress(newProgress)
    }
    document.addEventListener("scroll", onScroll)
    return () => {
      document.removeEventListener("scroll", onScroll)
    }
  }, [])

  return progress
}

function Wave({
  children,
  variant = "default",
  columnComponents = [],
  childrenToStepColumns,
  ...rest
}) {
  const ref = React.useRef()
  const currentStep = useCurrentStep(ref, variant)

  const [progress] = useSpring(currentStep, {
    decimals: 3,
    stiffness: 80,
    damping: 48,
    mass: 8,
  })

  const columns = React.useMemo(() => {
    return childrenToStepColumns(children)
  }, [])

  return (
    <div ref={ref} sx={{ variant: `styles.waves.${variant}.Wave` }}>
      {columns.map((columnSteps, columnIndex) => {
        const Component = columnComponents[columnIndex]
        //TODO rename currentStep to currentStepIndex
        return (
          <Component
            key={columnIndex}
            steps={columnSteps}
            progress={progress}
            variant={variant}
            currentStep={currentStep}
            {...rest}
          />
        )
      })}
    </div>
  )
}

export default Wave
