import {  useState } from 'react'
import { Canvas } from '@react-three/fiber'
import ScenePortOfBeirut from './scene/PortOfBeirut';
import SceneInterface from './components/SceneInterface'
import cameraSpots from './json/cameraSpots.json'

const canvasStyle = {
  height: "100vh",
  width: "100vw",
  backgroundColor: '#999999',
}

export default function App() {
  const [cameraMetaData, setCameraMetaData] = useState(cameraSpots[0]);

  const selectCamera = num => {
    return setCameraMetaData(cameraSpots[num])
  }

  return (
    <>
      <div id="canvas-container" style={canvasStyle}>
        <SceneInterface selectCamera={selectCamera}/>
        <Canvas frameloop="demand" >

          {/* --- load Scene here */}
          <ScenePortOfBeirut cameraMetaData={cameraMetaData}/>
          {/* <SceneName2/> */}
          {/* <SceneName3/> */}
          {/* <SceneName4/> */}
        </Canvas> 
      </div>
    </>
  )
}