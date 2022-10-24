import React, { useRef, useState, useLayoutEffect, useEffect } from 'react'
import * as THREE from 'three'
import { useLoader, useFrame, applyProps } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
// import { GizmoHelper, GizmoViewport } from '@react-three/drei'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
// import { waitForElementToBeRemoved } from '@testing-library/react'
// import { FlakesTexture } from 'three-stdlib'
// import cameraSpots from '../json/cameraSpots.json'



// import siteFile from '../3dFiles/Site.glb'
import siteFile from '../3dFiles/SiteGLTF.gltf'
import WarehouseFile from '../3dFiles/Warehouse.gltf'

// import CameraController from '../components/CameraController'


// const site = useLoader.preload(GLTFLoader, siteFile /* extensions */)
// const site = DRACOLoader.preload(GLTFLoader, siteFile /* extensions */)


const warehousePosition = {'x': 967.308/2, 'y': 24.5666/2, 'z': -1629.31/2 }
const vec = new THREE.Vector3()
// const eulerRotation = new THREE.Euler( 0, 1, 1.57, 'XYZ' )
const deg2rad = degrees => degrees * (Math.PI / 180);




export default function SceneContent(cameraMetaData){
  const orbitControlsRef = useRef(null);
  // UpdateCamera();
  useEffect(() =>{
    if(!!orbitControlsRef.current){
      console.log(orbitControlsRef.current)
    }
  })

  useFrame(({camera, state}) => {
    camera.lookAt(vec.set(warehousePosition.x, warehousePosition.y, warehousePosition.z))

    // camera.setFocalLength(cameraMetaData.cameraMetaData.focalLength)

    camera.position.lerp(vec.set(
      cameraMetaData.cameraMetaData.position.x/2, 
      cameraMetaData.cameraMetaData.position.y/2, 
      -cameraMetaData.cameraMetaData.position.z/2), 
      .1
    )

    // rotation
    // camera.rotation.set( deg2rad(94.5777-90), deg2rad(238.185), deg2rad(2.15831))
    // camera.rotation.set( 94.5777-90, 238.185, 2.15831)
    // camera.rotation.set( deg2rad(cameraMetaData.cameraMetaData.rotation.x), deg2rad(cameraMetaData.cameraMetaData.rotation.z), deg2rad(cameraMetaData.cameraMetaData.rotation.y))
    // camera.rotation.set( deg2rad(cameraMetaData.cameraMetaData.rotation.x), deg2rad(cameraMetaData.cameraMetaData.rotation.z), deg2rad(cameraMetaData.cameraMetaData.rotation.y))
    // 'rotation': { 'x': 94.5777, 'y': 238.185, 'z': 2.15831 },
    // camera.rotation.set(cameraMetaData.cameraMetaData.rotation.x, cameraMetaData.cameraMetaData.rotation.z, cameraMetaData.cameraMetaData.rotation.y)
  });

  console.log("camera meta data: " + JSON.stringify(cameraMetaData))
  console.log("camera meta data: " + cameraMetaData.cameraMetaData.position.x)

  return(
    <>
      <scene rotation={[0, 0, 0]}>
        {/* --- CAMERA */}
        <PerspectiveCamera 
          makeDefault 
          // manual 
          fov={cameraMetaData.cameraMetaData.fov}
          near={1}
          far={1000}
          // setFocalLength={cameraMetaData.cameraMetaData.focalLength} 
          // position={[
          //   cameraMetaData.cameraMetaData.position.x/2, 
          //   cameraMetaData.cameraMetaData.position.y/2, 
          //   -cameraMetaData.cameraMetaData.position.z/2
          // ]} 
          // rotation={[
          //   deg2rad(cameraMetaData.cameraMetaData.rotation.x), 
          //   deg2rad(cameraMetaData.cameraMetaData.rotation.z), 
          //   deg2rad(cameraMetaData.cameraMetaData.rotation.y),
          // ]} 
        />

        {/* --- CONTROLS */}
        <OrbitControls 
          ref={orbitControlsRef} 
          autoRotate={false} 
          enableRotate={false} 
          enableZoom={false} 
          enablePan={false}
          target={vec.set(
            cameraMetaData.cameraMetaData.position.x/2, 
            cameraMetaData.cameraMetaData.position.y/2, 
            -cameraMetaData.cameraMetaData.position.z/2
          )}
        /> 

        {/* --- HELPER TOOLS */}
        {/* <axesHelper args={[100, 100, 100]} position={[0, 0, 0]} /> */}
        {/* <GizmoHelper alignment="bottom-right" margin={[80, 80]} >
          <GizmoViewport axisColors={["hotpink", "aquamarine", "#3498DB"]} labelColor="black" />
        </GizmoHelper> */}
        {/* <CameraController/> */}

        {/* --- LIGHTS */}
        <ambientLight intensity={1} color={0x404040}/>
        <pointLight position={[250, 400, -800]} intensity={1.5} />

        {/* --- 3D OBJECTS */}
        <Water />
        <Site castShadow /> 
        <Warehouse  />
        {/* <Sphere position={[ 967.308/2, 124.5666/2, -1629.31/2]}/>
        <Sphere position={[ 1409.82/2, 77.8169/2, -1184.09/2]}/>
        <Sphere position={[ 1639.63/2, 61.2004/2, -1098.18/2]}/>
        <Sphere position={[ 252.429/2, 20.8718/2, -2196.86/2]}/> */}
        {/* <Box position={[0, 2, 0]} /> */}
        {/* <CameraIcon position={[252/2, 20, -2196/2]}  /> */}
        {/* <Marker position={[252/2, 20/2, -2196/2]}/> */}
      </scene>
    </>

  )
}

// --- reusable 3D OBJECTS

function Site(){
  const gltf = useLoader(
    GLTFLoader,
    siteFile,
    loader => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
      loader.setDRACOLoader(dracoLoader);
    }
  );
  return (
    <>
      <primitive object={gltf.scene} scale={0.5} position={[0, 0, 0]}/>
      {/* <primitive object={gltf.scene} scale={0.5} position={[0, -50, 0]}/> */}
    </>
  );
};

function Warehouse(props){
  const [hovered, setHover] = useState(false)
  const [clicked, setClicked] = useState(false)
  // const warehouseGLFT = useLoader(
  const { scene, materials } = useLoader(
    GLTFLoader,
    WarehouseFile,
    loader => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
      loader.setDRACOLoader(dracoLoader);
    }
  );
  const color = hovered ? 'magenta' : 'orange'
  useLayoutEffect(() => {
    scene.traverse((obj) => 
      obj.isMesh && (obj.receiveShadow = obj.castShadow = true, obj.material.color.set(color) )  
    )
    // applyProps(materials, {
    //   // color: hovered ? 'magenta' : 'orange',
    //   // roughness: 0,
    //   // normalMap: new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping),
    //   // 'normalMap-repeat': [40, 40],
    //   // normalScale: [0.05, 0.05]
    // })
  })
  return (
    <>
      <primitive 
        {...props} 
        onClick={(event) => setClicked(!clicked)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}
        object={scene} 
        scale={0.5} 
        rotation={[0, deg2rad(12.203), 0]} 
        position={[947.649/2, 1.74671/2, -1700.26/2]}>
          {/* <meshStandardMaterial color={hovered ? 'magenta' : 'orange'}/> */}
        </primitive>
    </>
  );
};

// function CameraIcon(props){
//   // This reference will give us direct access to the mesh
//   const mesh = useRef();
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)
//   // Return view, these are regular three.js elements expressed in JSX
//   return(
//     <mesh 
//     {...props}
//     ref={mesh}
//     scale={active ? 100 : 100}
//     onClick={(event) => setActive(!active)}
//     onPointerOver={(event) => setHover(true)}
//     onPointerOut={(event) => setHover(false)}>
//       <coneGeometry args={[1, 1, 4]}/>
//       <meshStandardMaterial wireframe={true} color={hovered ? 'magenta' : 'orange'} />
//     </mesh>
//   )
// }

// function Marker(props){
//   const markerRef = useRef();
//   const [hovered, setHover] = useState(false)
//   const [clicked, setClicked] = useState(false)

//   // const vec = new THREE.Vector3()
//   // useFrame(state => {
//   //   if(clicked){
//   //     state.camera.lookAt(markerRef.current.position)
//   //     state.camera.position.lerp(vec.set(400, 80, -800), .01)
//   //     state.camera.updateProjectionMatrix()
//   //   }
//   // })
//   return(
//     <mesh 
//     {...props}
//     ref={markerRef}
//     scale={clicked ? 10 : 10}
//     onClick={(event) => setClicked(!clicked)}
//     onPointerOver={(event) => setHover(true)}
//     onPointerOut={(event) => setHover(false)}>
//       <coneGeometry />
//       {/* <meshStandardMaterial wireframe={true} color={hovered ? 'magenta' : 'orange'} /> */}
//       <meshStandardMaterial visible={true} color={hovered ? 'magenta' : 'orange'}/>
//     </mesh>
//   )
// }

// function Sphere(props) {
//   // This reference will give us direct access to the mesh
//   const mesh = useRef()
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
//   // Return view, these are regular three.js elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={mesh}
//       scale={active ? 1.5 : 1}
//       onClick={(event) => setActive(!active)}
//       onPointerOver={(event) => setHover(true)}
//       onPointerOut={(event) => setHover(false)}>
//       <sphereGeometry args={[5, 10, 10]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

// function Box(props) {
//   // This reference will give us direct access to the mesh
//   const mesh = useRef()
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)
//   // Subscribe this component to the render-loop, rotate the mesh every frame
//   useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
//   // Return view, these are regular three.js elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={mesh}
//       scale={active ? 1.5 : 1}
//       onClick={(event) => setActive(!active)}
//       onPointerOver={(event) => setHover(true)}
//       onPointerOut={(event) => setHover(false)}>
//       <boxGeometry args={[1, 1, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

function Water(props){
  return(
    <mesh
    {...props}
    scale={10000}
    rotation={[deg2rad(-90), 0, 0]}
    position={[0, -1, 0]}
    >
      <circleGeometry args={[1]} />
      <meshStandardMaterial color={'#333333'} />
    </mesh>
  )
}