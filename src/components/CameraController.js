import * as React from 'react'
import { Vector3, PerspectiveCamera } from 'three'
import { useSelector } from 'react-redux'
import { useThree, useFrame } from '@react-three/fiber'

import { ReduxState } from 'src/types/common'
import { Cube } from 'src/types/game'

const SelectorProps  = {
  prevLookAt: Cube,
  lookAt: Cube,
  position: Cube,
}

function selector(ReduxState): SelectorProps {
  return {
    prevLookAt: state.camera.prevLookAt,
    lookAt: state.camera.lookAt,
    position: state.camera.position,
  }
}

function CameraController(): JSX.Element {
  const ref = React.useRef<PerspectiveCamera | null>(null)

  const { prevLookAt, lookAt, position } = useSelector(selector)

  const prevVectorLookAt = React.useMemo(
    function memo() {
      return new Vector3(prevLookAt.x, prevLookAt.y, prevLookAt.z)
    },
    [prevLookAt.x, prevLookAt.y, prevLookAt.z]
  )

  const vectorLookAt = React.useMemo(
    function memo() {
      return new Vector3(lookAt.x, lookAt.y, lookAt.z)
    },
    [lookAt.x, lookAt.y, lookAt.z]
  )

  const vectorPosition = React.useMemo(
    function memo() {
      return new Vector3(position.x, position.y, position.z)
    },
    [position.x, position.y, position.z]
  )

  const { setDefaultCamera } = useThree()

  // Make the camera known to the system
  React.useEffect(
    function effect() {
      if (ref.current !== null) {
        setDefaultCamera(ref.current)
      }
    },
    [setDefaultCamera]
  )

  // const requestRef = React.useRef<number>(0)

  // const animate = React.useCallback(
  //   function callback(/* time */): void {
  //     // console.info('animate')

  //     if (ref.current !== null) {
  //       ref.current.lookAt(prevVectorLookAt.lerp(vectorLookAt, 0.1))
  //       ref.current.updateMatrixWorld()
  //       // console.info('updateMatrixWorld')
  //     }

  //     requestRef.current = requestAnimationFrame(animate)
  //   },
  //   [prevVectorLookAt, vectorLookAt]
  // )

  // React.useEffect(() => {
  //   animate()
  //   requestRef.current = window.requestAnimationFrame(animate)

  //   return () => window.cancelAnimationFrame(requestRef.current)
  // }, [animate]) // Make sure the effect runs only once

  // Update it every frame
  useFrame(function renderCallback() {
    if (ref.current !== null) {
      ref.current.lookAt(prevVectorLookAt.lerp(vectorLookAt, 0.1))
      ref.current.updateMatrixWorld()
    }
  })

  return <perspectiveCamera ref={ref} fov={75} position={vectorPosition} />
}

export default React.memo(CameraController)