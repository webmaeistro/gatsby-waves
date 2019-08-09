/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import BarScroller from "gatsby-theme-waves/src/components/bar-scroller"
import Wave from "gatsby-theme-waves/src/components/wave"
import { Canvas } from "react-three-fiber"
import * as THREE from "three"
import GLTF from "./gatsby.gltf"
import Model from "./model"
import Controls from "./controls"

function toColumns(items, columnCount) {
  const columns = Array(columnCount)
    .fill()
    .map(() => [])

  columns[0].push(null)
  columns[1].push(React.createElement("div", {}, []))
  items.forEach((item, i) => {
    const isHr = item.props.mdxType === "hr"
    if (isHr) {
      columns[0].push(null)
      columns[1].push(React.createElement("div", {}, []))
    } else {
      const step = columns[0].length - 1
      columns[1][step].props.children.push(item)
    }
  })

  return columns
}

function Thing({ vertices }) {
  return (
    <group ref={ref => console.log("we have access to the instance")}>
      <line>
        <geometry
          attach="geometry"
          vertices={vertices.map(v => new THREE.Vector3(...v))}
          onUpdate={self => (self.verticesNeedUpdate = true)}
        />
        <lineBasicMaterial attach="material" color="black" />
      </line>
      <mesh
        onClick={e => console.log("click")}
        onPointerOver={e => console.log("hover")}
        onPointerOut={e => console.log("unhover")}
      >
        <octahedronGeometry attach="geometry" />
        <meshBasicMaterial
          attach="material"
          color="peachpuff"
          opacity={0.5}
          transparent
        />
      </mesh>
    </group>
  )
}

function ThreeWave(props) {
  const childrenToColumns = children => {
    const items = React.Children.map(children, child => [child])
    const columnCount = 2
    const columns = toColumns(items, columnCount)
    return columns
  }

  return (
    <Wave
      columnComponents={[ThreeSticker, BarScroller]}
      childrenToStepColumns={childrenToColumns}
      {...props}
    />
  )
}

function ThreeSticker({ deck, progress, currentStep, variant }) {
  const prevIndex = Math.floor(progress)
  const nextIndex = prevIndex + 1

  return (
    <div sx={{ variant: `styles.waves.${variant}.StickerContainer` }}>
      <div sx={{ variant: `styles.waves.${variant}.Sticker` }}>
        <Canvas camera={{ position: [0, 0, 300], zoom: 1 }}>
          <Model
            url={
              "https://rawcdn.githack.com/LekoArts/gatsby-react-three-fiber/864de40e1872f45eb8a0deb80b2b943b632aad7f/src/components/gatsby.gltf"
            }
          />
          <ambientLight intensity={1.2} />
          <pointLight intensity={1} position={[0, 0, 10]} color="#663399" />
          <pointLight intensity={1} position={[0, 0, -10]} color="#663399" />
          <Controls
            enablePan={false}
            enableZoom={false}
            enableDamping
            dampingFactor={0.5}
            rotateSpeed={1}
            maxPolarAngle={Math.PI / 3}
            minPolarAngle={Math.PI / 3}
            rotation={currentStep}
          />
        </Canvas>
      </div>
    </div>
  )
}

export default ThreeWave
