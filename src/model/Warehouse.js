import React, { useRef, useState, useLayoutEffect } from 'react'
import { useGLTF } from "@react-three/drei";
import { useLoader, useFrame, applyProps } from '@react-three/fiber'

import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

import WarehouseFile from '../3dFiles/Warehouse.gltf'


const deg2rad = degrees => degrees * (Math.PI / 180);


export default function Warehouse(props) {
  // const { nodes, materials } = useGLTF(WarehouseFile);

    // const warehouseGLFT = useLoader(
  const { nodes, materials } = useLoader(
    GLTFLoader,
    WarehouseFile,
    loader => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("https://www.gstatic.com/draco/v1/decoders/");
      loader.setDRACOLoader(dracoLoader);
    }
  );


  // useLayoutEffect(() => {
  //   // nodes.traverse((obj) => obj.isMesh && (obj.receiveShadow = obj.castShadow = true))
  //   nodes.applyProps(materials.default, {
  //     color: 'orange',
  //     // roughness: 0,
  //     // normalMap: new THREE.CanvasTexture(new FlakesTexture(), THREE.UVMapping, THREE.RepeatWrapping, THREE.RepeatWrapping),
  //     // 'normalMap-repeat': [40, 40],
  //     normalScale: [0.05, 0.05]
  //   })
  // })

  return (
    <group scale={0.5} 
    rotation={[0, deg2rad(12.203), 0]} 
    position={[947.649/2, 1.74671/2, -1700.26/2]}
    {...props} dispose={null} >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 4.09, 13.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 5.18, 13.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Cut_03.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.79, 13.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Main.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.61, 2.76, 13.9]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.96, 13.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_8.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 5.18, 16.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Sheet.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.64, 2.79, 13.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_9.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 1.7, 16.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Cut_03_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.79, 16.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Sheet_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.64, 2.79, 16.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_6.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.96, 16.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_13.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 5.18, 33.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_12.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 4.09, 33.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Cut_03_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.79, 33.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_10.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 0.39, 16.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Main_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.61, 2.76, 33.9]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_4.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 1.7, 13.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_11.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.96, 33.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_18.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 5.18, 36.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_19.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 1.7, 36.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Sheet_4.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.64, 2.79, 36.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Cut_03_4.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.79, 36.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_5.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 0.39, 13.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_7.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 4.09, 16.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_15.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 0.39, 33.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Main_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.61, 2.76, 16.35]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_16.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.96, 36.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_14.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 1.7, 33.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Sheet_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.64, 2.79, 33.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_20.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 0.39, 36.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_22.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 4.09, 53.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_23.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 5.18, 53.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_17.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 4.09, 36.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Main_5.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.61, 2.76, 53.9]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_21.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.96, 53.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Cut_03_5.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.79, 53.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_30.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 0.39, 56.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_25.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 0.39, 53.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_28.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 5.18, 56.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_26.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.96, 56.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_31.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.96, 73.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Cut_03_6.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.79, 56.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_29.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 1.7, 56.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_34.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 1.7, 73.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_33.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 5.18, 73.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Sheet_6.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.64, 2.79, 56.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_36.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.96, 76.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Cut_03_7.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.79, 73.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_32.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 4.09, 73.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_39.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 1.7, 76.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_38.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 5.18, 76.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Sheet_8.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.64, 2.79, 76.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Main_7.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.61, 2.76, 73.9]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Cut_03_8.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.79, 76.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_42.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 4.09, 93.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_40.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 0.39, 76.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_43.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 5.18, 93.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_41.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.96, 93.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Main_9.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.61, 2.76, 93.9]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Cut_03_9.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.79, 93.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_50.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 0.39, 96.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_44.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 1.7, 93.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_48.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 5.18, 96.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Sheet_10.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.64, 2.79, 96.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Main_4.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.61, 2.76, 36.35]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_24.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 1.7, 53.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_52.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 4.09, 113.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Sheet_5.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.64, 2.79, 53.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Sheet_9.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.64, 2.79, 93.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Cut_03_10.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.79, 96.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Main_11.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.61, 2.76, 113.9]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_27.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 4.09, 56.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_47.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 4.09, 96.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_53.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 5.18, 113.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Main_10.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.61, 2.76, 96.35]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_60.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 0.39, 116.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Main_6.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.61, 2.76, 56.35]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Cut_03_11.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.79, 113.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_55.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 0.39, 113.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_61.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 2.96, 13.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_35.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 0.39, 73.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_58.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 5.18, 116.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_56.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.96, 116.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Sheet_7.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.64, 2.79, 73.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Cut_03_12.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.79, 116.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_64.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 1.7, 13.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_59.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 1.7, 116.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_37.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 4.09, 76.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_66.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 2.96, 16.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Sheet_12.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.64, 2.79, 116.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_63.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 5.18, 13.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_68.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 5.18, 16.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Main_8.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.61, 2.76, 76.35]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Cut_03_13.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 2.79, 13.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_62.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 4.09, 13.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Cut_03_14.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 2.79, 16.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_45.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 0.39, 93.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_69.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 1.7, 16.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_74.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 1.7, 33.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Sheet_14.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.64, 2.79, 16.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Main_13.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.61, 2.76, 13.9]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_46.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.96, 96.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Sheet_15.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.64, 2.79, 33.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_49.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 1.7, 96.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_72.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 4.09, 33.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_70.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 0.39, 16.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_77.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 4.09, 36.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_51.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 2.96, 113.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_71.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 2.96, 33.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Main_15.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.61, 2.76, 33.9]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Main_16.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.61, 2.76, 36.35]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_54.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 1.7, 113.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_80.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 0.39, 36.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_73.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 5.18, 33.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_92.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 4.09, 73.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Sheet_11.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.64, 2.79, 113.87]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Cut_03_15.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 2.79, 33.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_57.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.63, 4.09, 116.37]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_93.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 5.18, 73.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_79.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 1.7, 36.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Main_12.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.61, 2.76, 116.35]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Main_19.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.61, 2.76, 73.9]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Sheet_16.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.64, 2.79, 36.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_97.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 4.09, 76.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_R_9.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.62, 0.01, 52.62]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_65.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 0.39, 13.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Main_20.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.61, 2.76, 76.35]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Sheet_13.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.64, 2.79, 13.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Cut_03_19.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 2.79, 73.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_102.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 4.09, 113.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_67.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 4.09, 16.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_98.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 5.18, 76.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_104.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 1.7, 113.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_L_17.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.62, 0.01, 57.62]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Main_14.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.61, 2.76, 16.35]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Main_21.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.61, 2.76, 113.9]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_96.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 2.96, 76.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_75.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 0.39, 33.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_100.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 0.39, 76.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Cut_03_20.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 2.79, 76.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_76.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 2.96, 36.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_108.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 5.18, 116.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_101.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 2.96, 113.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_78.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 5.18, 36.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Cut_03_22.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 2.79, 116.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_R_12.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.62, 2.79, 93.89]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_103.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 5.18, 113.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Cut_03_16.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 2.79, 36.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 11.38]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Cut_03_21.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 2.79, 113.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_105.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 0.39, 113.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_91.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 2.96, 73.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_6.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 28.74]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Sheet_21.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.64, 2.79, 113.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_109.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 1.7, 116.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_94.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 1.7, 73.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_10.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 46.1]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Sheet_22.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.64, 2.79, 116.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_107.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 4.09, 116.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_95.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 0.39, 73.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Main_22.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.61, 2.76, 116.35]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_14.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 63.46]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Sheet_19.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.64, 2.79, 73.87]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_1.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 7.04]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_18.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 80.82]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 15.72]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_5.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 24.4]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_99.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 1.7, 76.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_7.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 33.08]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Sheet_20.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.64, 2.79, 76.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_22.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 98.18]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_9.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 41.76]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_11.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 50.44]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_26.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 115.54]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_15.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 67.8]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_13.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 59.12]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_2_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 0]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_19.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 85.16]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_17.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 76.48]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[16.38, 10.33, 0]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_23.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 102.52]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_L_22.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.62, 2.79, 96.36]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_21.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 93.84]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_6.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[11.23, 11.47, 0]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_27.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 119.88]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_106.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 2.96, 116.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_10.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[6.07, 12.61, 0]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_25.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 111.2]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Edge_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 0]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Door_Transom_00_110.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.63, 0.39, 116.37]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_14.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0.92, 13.76, 0]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_1_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[16.4, 9.81, 130.25]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_01_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 0]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Transom_02_Middle.geometry}
        material={materials["Clay-Base_65.001"]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_0.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 2.7]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_1.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[17.67, 10.04, 0]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_5.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[12.51, 11.19, 0]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_0.geometry}
        material={materials["Clay-Base_65.001"]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_4.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 20.06]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_4.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[13.8, 10.9, 0]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_9.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[7.36, 12.33, 0]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_8.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 37.42]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_8.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[8.65, 12.04, 0]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_13.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[2.2, 13.47, 0]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_12.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[3.49, 13.18, 0]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_Sill.geometry}
        material={materials["Clay-Base_65.001"]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_12.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 54.78]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dainage.geometry}
        material={materials["Clay-Base_65.001"]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_1.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 0.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 2.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_16.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 72.14]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Transom_01_Top.geometry}
        material={materials["Clay-Base_65.001"]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_4.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 3.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_20.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 89.5]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_6.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_24.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 106.86]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 1.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_7.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 5.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_9.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 7.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_28.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.97, 9.81, 124.22]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_12.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 10]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_10.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 8.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_5.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 4.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_0.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[18.96, 9.76, 0]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_15.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 12.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_18.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 15]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_13.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 10.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_8.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 6.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[15.09, 10.62, 0]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_21.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 17.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_16.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 13.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_7.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[9.94, 11.76, 0]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_24.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 20]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_11.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 9.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_27.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 22.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_11.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[4.78, 12.9, 0]}
        rotation={[-Math.PI / 2, 0.22, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_19.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 15.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_14.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 11.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_30.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 25]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_33.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 27.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_22.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 18.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_17.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 14.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_36.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 30]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_25.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 20.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_39.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 32.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_20.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 16.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_42.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 35]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_28.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 23.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_23.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 19.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_45.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 37.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_31.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 25.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_26.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 21.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_48.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 40]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_34.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 28.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_29.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 24.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_51.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 42.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_37.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 30.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_54.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 45]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_32.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 26.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_57.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 47.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_40.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 33.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_60.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 50]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_35.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 29.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_63.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 52.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_43.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 35.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_66.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 55]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_38.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 31.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_69.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 57.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_46.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 38.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_41.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 34.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_72.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 60]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_49.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 40.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_44.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 36.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_52.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 43.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_75.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 62.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_47.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 39.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_55.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 45.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_78.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 65]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_50.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 41.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_58.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 48.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_81.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 67.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_53.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 44.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_61.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 50.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_84.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 70]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_56.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 46.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_64.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 53.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_87.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 72.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_59.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 49.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_67.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 55.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_90.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 75]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_62.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 51.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_70.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 58.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_93.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 77.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_65.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 54.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_73.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 60.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_96.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 80]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_68.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 56.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_76.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 63.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_99.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 82.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_71.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 59.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_79.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 65.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_102.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 85]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_74.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 61.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_82.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 68.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_105.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 87.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_77.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 64.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_85.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 70.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_80.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 66.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_108.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 90]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_88.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 73.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_83.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 69.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_111.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 92.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_86.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 71.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_91.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 75.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_114.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 95]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_94.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 78.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_89.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 74.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_117.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 97.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_97.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 80.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_92.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 76.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_120.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 100]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_100.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 83.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_95.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 79.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_123.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 102.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_103.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 85.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_98.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 81.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_106.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 88.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_126.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 105]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_101.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 84.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_109.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 90.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_129.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 107.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_104.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 86.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_112.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 93.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_132.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 110]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_107.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 89.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_115.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 95.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_135.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 112.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_110.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 91.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_118.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 98.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_138.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 115]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_121.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 100.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_113.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 94.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_141.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 117.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_124.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 103.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_116.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 96.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_144.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 120]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_127.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 105.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_119.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 99.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_147.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 122.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_130.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 108.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_122.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 101.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_150.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 125]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_133.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 110.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_125.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 104.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_153.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 127.5]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_136.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 113.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_128.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 106.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_156.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 130]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_139.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 115.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_131.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 109.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_134.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 111.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_142.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 118.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_137.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 114.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_145.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 120.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_140.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 116.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_148.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 123.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_143.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 119.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_151.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 125.83]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_146.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 121.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_154.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 128.33]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_149.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 124.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_152.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 126.67]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod_Instance.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[22.37, 5.82, 19.95]}
        rotation={[-Math.PI / 2, -0.45, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_155.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 129.17]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Main_Canopy.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[21.95, 5.82, 15.13]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[22.37, 5.82, 10.3]}
        rotation={[-Math.PI / 2, -0.45, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Rail.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[19.75, -0.09, 15.13]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Subtract.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[21.95, 5.82, 15.13]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20, 0.01, 15.13]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_B.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20, 0.01, 15.13]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20, 0.01, 15.13]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod_Instance_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[22.37, 5.82, 39.95]}
        rotation={[-Math.PI / 2, -0.45, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[22.37, 5.82, 30.3]}
        rotation={[-Math.PI / 2, -0.45, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Main_Canopy_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[21.95, 5.82, 35.13]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Subtract_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[21.95, 5.82, 35.13]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Rail_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[19.75, -0.09, 35.13]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_B_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20, 0.01, 35.13]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20, 0.01, 35.13]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A_4.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20, 0.01, 35.13]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod_Instance_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[22.37, 5.82, 59.95]}
        rotation={[-Math.PI / 2, -0.45, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Corru_Facade.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20.53, 8.12, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[22.37, 5.82, 50.3]}
        rotation={[-Math.PI / 2, -0.45, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Main_Canopy_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[21.95, 5.82, 55.13]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Corru_Steel.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[21.95, 5.82, 15.13]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Subtract_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[21.95, 5.82, 55.13]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Rail_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[19.75, -0.09, 55.13]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod_4.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[22.37, 5.82, 70.3]}
        rotation={[-Math.PI / 2, -0.45, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_B_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20, 0.01, 55.13]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Main_Canopy_4.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[21.95, 5.82, 75.13]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A_5.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20, 0.01, 55.13]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Subtract_4.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[21.95, 5.82, 75.13]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A_6.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20, 0.01, 55.13]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Rail_4.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[19.75, -0.09, 75.13]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_B_4.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20, 0.01, 75.13]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod_Instance_4.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[22.37, 5.82, 79.95]}
        rotation={[-Math.PI / 2, -0.45, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A_7.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20, 0.01, 75.13]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod_Instance_5.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[22.37, 5.82, 99.95]}
        rotation={[-Math.PI / 2, -0.45, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Corru_Steel_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[21.95, 5.82, 35.13]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A_8.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20, 0.01, 75.13]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod_5.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[22.37, 5.82, 90.3]}
        rotation={[-Math.PI / 2, -0.45, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Main_Canopy_5.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[21.95, 5.82, 95.13]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Subtract_5.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[21.95, 5.82, 95.13]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Rail_5.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[19.75, -0.09, 95.13]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_B_5.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20, 0.01, 95.13]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A_9.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20, 0.01, 95.13]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A_10.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20, 0.01, 95.13]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod_6.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[22.37, 5.82, 110.3]}
        rotation={[-Math.PI / 2, -0.45, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Main_Canopy_6.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[21.95, 5.82, 115.13]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Subtract_6.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[21.95, 5.82, 115.13]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Rail_6.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[19.75, -0.09, 115.13]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_B_6.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20, 0.01, 115.13]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A_11.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20, 0.01, 115.13]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A_12.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[20, 0.01, 115.13]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Corru_Steel_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[21.95, 5.82, 55.13]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Top.geometry}
        material={materials["Clay-Base_65.001"]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Top_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 20]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Top_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 40]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Top_4.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 60]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod_Instance_6.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[22.37, 5.82, 119.95]}
        rotation={[-Math.PI / 2, -0.45, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Top_5.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 80]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Top_6.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 100]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Top_7.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 120]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe.geometry}
        material={materials["Clay-Base_65.001"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss.geometry}
        material={materials["Clay-Base_65.001"]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 20]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_4.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 30]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_4.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 30]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_6.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 50]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_7.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 60]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_8.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 70]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_9.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 80]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Corru_Steel_4.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[21.95, 5.82, 75.13]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_10.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 90]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Bottom.geometry}
        material={materials["Clay-Base_65.001"]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_11.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 100]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Bottom_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 20]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_12.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 110]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_13.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 120]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Corru_Steel_5.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[21.95, 5.82, 95.13]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Bottom_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 40]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_14.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 130]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 10]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Structure_0.geometry}
        material={materials["Clay-Base_50"]}
        position={[9.88, 2.39, 130.25]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Bottom_4.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 60]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Structure_2_2.geometry}
        material={materials["Clay-Base_50"]}
        position={[9.88, 6.83, 130.25]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 20]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Bottom_5.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 80]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Bottom_6.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 100]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall.geometry}
        material={materials["Clay-Base_50"]}
        position={[0, 0, 130.25]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Bottom_7.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 120]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 20]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base.geometry}
        material={materials["Clay-Base_65.001"]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_0_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 2.7]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_5.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 40]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 10]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_3_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 15.72]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 10]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_6.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 50]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_7_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 33.08]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_4.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 30]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_11_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 50.44]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_6.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 50]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_5.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 40]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_15_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 67.8]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_8.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 70]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_5.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 40]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_19_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 85.16]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_10.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 90]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_7.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 60]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_23_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 102.52]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_8.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 70]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_12.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 110]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_27_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 119.88]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_9.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 80]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_Edge_4.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 0]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_14.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 130]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_2_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-16.38, 10.33, 0]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_10.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 90]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_5_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-12.51, 11.19, 0]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Structure_1_2.geometry}
        material={materials["Clay-Base_50"]}
        position={[9.88, 4.61, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Corru_Steel_6.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[21.95, 5.82, 115.13]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_9_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-7.36, 12.33, 0]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_11.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 100]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Structure_4_3.geometry}
        material={materials["Clay-Base_50"]}
        position={[9.88, 11.28, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_13_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-2.2, 13.47, 0]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_12.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 110]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Window_Sill_2.geometry}
        material={materials["Clay-Base_65.001"]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_7.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 60]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_2_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 11.38]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_0_2.geometry}
        material={materials["Clay-Base_65.001"]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_13.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 120]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_3_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 2.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_5_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 24.4]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_14.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 130]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_9.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 80]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_6_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Vert_Structure.geometry}
        material={materials["Clay-Base_50"]}
        position={[9.88, 2.39, 130.25]}
        rotation={[-Math.PI / 2, Math.PI / 2, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_9_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 41.76]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_9_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 7.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Structure_1.geometry}
        material={materials["Clay-Base_50"]}
        position={[9.88, 4.61, 130.25]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_12_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 10]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Structure_4.geometry}
        material={materials["Clay-Base_50"]}
        position={[9.88, 11.28, 130.25]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_11.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 100]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_13_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 59.12]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_15_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 12.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Structure_0_2.geometry}
        material={materials["Clay-Base_50"]}
        position={[9.88, 2.39, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_18_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 15]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_17_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 76.48]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Structure_3_3.geometry}
        material={materials["Clay-Base_50"]}
        position={[9.88, 9.06, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_13.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 120]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_21_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 17.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_24_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 20]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_21_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 93.84]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Structure_3.geometry}
        material={materials["Clay-Base_50"]}
        position={[9.88, 9.06, 130.25]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_1_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 7.04]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_27_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 22.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Vert_Structure_2.geometry}
        material={materials["Clay-Base_50"]}
        position={[9.88, 2.39, 0]}
        rotation={[-Math.PI / 2, -Math.PI / 2, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_30_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 25]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_25_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 111.2]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_4_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 20.06]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_33_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 27.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Structure_2_3.geometry}
        material={materials["Clay-Base_50"]}
        position={[9.88, 6.83, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_1_4.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-16.4, 9.81, 130.25]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_36_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 30]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_8_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 37.42]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_39_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 32.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_0_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.96, 9.76, 0]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_12_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 54.78]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_2.geometry}
        material={materials["Clay-Base_50"]}
        rotation={[-Math.PI / 2, 0, -Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_42_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 35]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_3_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-15.09, 10.62, 0]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_16_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 72.14]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_45_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 37.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_6_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 28.74]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_20_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 89.5]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_7_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-9.94, 11.76, 0]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_48_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 40]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_24_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 106.86]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_51_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 42.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_10_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 46.1]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_11_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-4.78, 12.9, 0]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_28_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 124.22]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_54_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 45]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_57_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 47.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_14_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 63.46]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_01_4.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 0]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_60_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 50]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_6_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-11.23, 11.47, 0]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_18_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 80.82]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_63_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 52.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_10_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-6.07, 12.61, 0]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_66_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 55]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_14_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-0.92, 13.76, 0]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_22_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 98.18]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_69_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 57.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Transom_02_Middle_2.geometry}
        material={materials["Clay-Base_65.001"]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_1_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 0.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_72_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_26_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 115.54]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_4_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 3.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_75_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 62.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Roof_02_4_3.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-18.97, 9.81, 0]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_7_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 5.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_78_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 65]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_10_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 8.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_81_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 67.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_1_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-17.67, 10.04, 0]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_13_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 10.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_84_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 70]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_16_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 13.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_4_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-13.8, 10.9, 0]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_87_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 72.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_19_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 15.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_90_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 75]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_8_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-8.65, 12.04, 0]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_22_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 18.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_93_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 77.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_25_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 20.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rafters_12_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-3.49, 13.18, 0]}
        rotation={[Math.PI / 2, 0.22, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_96_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 80]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_28_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 23.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_99_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 82.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Dainage_2.geometry}
        material={materials["Clay-Base_65.001"]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_31_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 25.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_102_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 85]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_34_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 28.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Transom_01_Top_2.geometry}
        material={materials["Clay-Base_65.001"]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_105_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 87.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_37_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 30.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_2_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 1.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_108_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 90]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_40_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 33.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_111_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 92.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_43_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 35.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_5_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 4.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_114_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 95]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_8_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 6.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_117_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 97.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_46_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 38.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_49_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 40.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_120_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 100]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_52_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 43.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_55_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 45.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_123_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 102.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_11_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 9.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_58_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 48.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_126_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 105]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_61_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 50.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_14_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 11.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_64_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 53.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_129_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 107.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_17_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 14.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_67_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 55.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_132_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 110]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_20_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 16.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_70_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 58.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_23_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 19.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_135_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 112.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_73_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 60.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_76_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 63.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_138_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 115]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_26_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 21.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_79_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 65.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_141_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 117.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_82_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 68.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_29_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 24.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_144_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 120]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_85_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 70.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_147_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 122.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_32_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 26.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_88_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 73.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_150_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 125]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_35_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 29.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_91_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 75.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_153_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 127.5]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_94_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 78.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_38_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 31.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_156_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 130]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_97_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 80.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_41_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 34.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_100_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 83.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_103_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 85.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_44_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 36.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_106_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 88.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_47_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 39.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_109_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 90.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_50_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 41.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_112_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 93.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_53_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 44.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_115_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 95.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_56_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 46.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_118_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 98.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_59_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 49.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_62_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 51.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_65_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 54.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_121_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 100.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_68_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 56.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_124_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 103.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_71_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 59.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_74_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 61.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_127_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 105.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_130_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 108.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_77_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 64.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_133_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 110.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_80_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 66.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_136_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 113.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_139_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 115.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_83_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 69.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_142_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 118.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_86_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 71.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_145_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 120.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_89_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 74.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_148_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 123.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_151_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 125.83]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_92_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 76.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_154_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 128.33]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_95_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 79.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_98_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 81.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod_Instance_7.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-22.37, 5.82, 19.95]}
        rotation={[Math.PI / 2, -0.45, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Main_Canopy_7.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-21.95, 5.82, 15.12]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_101_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 84.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_B_7.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20, 0.01, 15.12]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_104_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 86.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A_14.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20, 0.01, 15.12]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_107_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 89.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod_8.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-22.37, 5.82, 30.3]}
        rotation={[Math.PI / 2, -0.45, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_110_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 91.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Main_Canopy_8.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-21.95, 5.82, 35.12]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Subtract_8.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-21.95, 5.82, 35.12]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_113_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 94.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Rail_8.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-19.75, -0.09, 35.12]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_B_8.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20, 0.01, 35.12]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_116_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 96.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A_15.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20, 0.01, 35.12]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Corru_Steel_7.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-21.95, 5.82, 15.12]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_119_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 99.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A_16.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20, 0.01, 35.12]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_122_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 101.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod_Instance_9.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-22.37, 5.82, 59.95]}
        rotation={[Math.PI / 2, -0.45, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_125_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 104.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod_10.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-22.37, 5.82, 70.3]}
        rotation={[Math.PI / 2, -0.45, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_128_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 106.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Main_Canopy_10.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-21.95, 5.82, 75.12]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_131_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 109.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Subtract_10.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-21.95, 5.82, 75.12]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_134_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 111.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Rail_10.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-19.75, -0.09, 75.12]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_137_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 114.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_B_10.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20, 0.01, 75.12]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_140_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 116.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A_19.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20, 0.01, 75.12]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_143_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 119.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A_20.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20, 0.01, 75.12]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_146_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 121.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_149_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 124.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod_11.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-22.37, 5.82, 90.3]}
        rotation={[Math.PI / 2, -0.45, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_152_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 126.67]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Main_Canopy_11.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-21.95, 5.82, 95.12]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Corru_Facade_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20.53, 8.12, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Mullion_155_2.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 129.17]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Subtract_11.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-21.95, 5.82, 95.12]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Rail_11.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-19.75, -0.09, 95.12]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_B_11.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20, 0.01, 95.12]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod_7.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-22.37, 5.82, 10.3]}
        rotation={[Math.PI / 2, -0.45, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod_9.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-22.37, 5.82, 50.3]}
        rotation={[Math.PI / 2, -0.45, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Subtract_7.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-21.95, 5.82, 15.12]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A_21.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20, 0.01, 95.12]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Main_Canopy_9.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-21.95, 5.82, 55.12]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Rail_7.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-19.75, -0.09, 15.12]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A_22.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20, 0.01, 95.12]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A_13.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20, 0.01, 15.12]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Subtract_9.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-21.95, 5.82, 55.12]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod_12.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-22.37, 5.82, 110.3]}
        rotation={[Math.PI / 2, -0.45, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Rail_9.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-19.75, -0.09, 55.12]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_B_9.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20, 0.01, 55.12]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod_Instance_8.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-22.37, 5.82, 39.95]}
        rotation={[Math.PI / 2, -0.45, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Main_Canopy_12.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-21.95, 5.82, 115.12]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A_17.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20, 0.01, 55.12]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Subtract_12.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-21.95, 5.82, 115.12]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A_18.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20, 0.01, 55.12]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Top_Rail_12.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-19.75, -0.09, 115.12]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_B_12.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20, 0.01, 115.12]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod_Instance_10.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-22.37, 5.82, 79.95]}
        rotation={[Math.PI / 2, -0.45, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A_23.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20, 0.01, 115.12]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_02_A_24.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-20, 0.01, 115.12]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Top_8.geometry}
        material={materials["Clay-Base_65.001"]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Corru_Steel_9.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-21.95, 5.82, 55.12]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Top_9.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 20]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Top_10.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 40]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Top_11.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod_Instance_12.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-22.37, 5.82, 119.95]}
        rotation={[Math.PI / 2, -0.45, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Top_12.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 80]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Bottom_12.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 80]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Top_14.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 120]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Bottom_14.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 120]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_15.geometry}
        material={materials["Clay-Base_65.001"]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_16.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 10]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_18.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 10]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_18.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 30]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_19.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 40]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_21.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 40]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_21.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_22.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 70]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_23.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 80]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_24.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 90]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_25.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 100]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_26.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 110]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_27.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 120]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Corru_Steel_8.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-21.95, 5.82, 35.12]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_28.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 130]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_30.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 130]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Structure_1_4.geometry}
        material={materials["Clay-Base_50"]}
        position={[-9.88, 4.61, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tension_Rod_Instance_11.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-22.37, 5.82, 99.95]}
        rotation={[Math.PI / 2, -0.45, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Structure_4_5.geometry}
        material={materials["Clay-Base_50"]}
        position={[-9.88, 11.28, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Corru_Steel_10.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-21.95, 5.82, 75.12]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Bottom_8.geometry}
        material={materials["Clay-Base_65.001"]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Bottom_9.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 20]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Bottom_10.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 40]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Bottom_11.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Top_13.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 100]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Corru_Steel_12.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-21.95, 5.82, 115.12]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Wall_01_Bottom_13.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 100]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_23.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 60]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_15.geometry}
        material={materials["Clay-Base_65.001"]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_17.geometry}
        material={materials["Clay-Base_65.001"]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_25.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 80]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_17.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 20]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_27.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 100]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_19.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 20]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_29.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 120]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Structure_3_4.geometry}
        material={materials["Clay-Base_50"]}
        position={[-9.88, 9.06, 130.25]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_19.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 40]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Vert_Structure_4.geometry}
        material={materials["Clay-Base_50"]}
        position={[-9.88, 2.39, 0]}
        rotation={[Math.PI / 2, -1.57, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_20.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 50]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Structure_2_5.geometry}
        material={materials["Clay-Base_50"]}
        position={[-9.88, 6.83, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_4.geometry}
        material={materials["Clay-Base_50"]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_22.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 50]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_24.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 70]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_26.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 90]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_28.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 110]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Vert_Structure_3.geometry}
        material={materials["Clay-Base_50"]}
        position={[-9.88, 2.39, 130.25]}
        rotation={[Math.PI / 2, Math.PI / 2, 0]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Structure_1_3.geometry}
        material={materials["Clay-Base_50"]}
        position={[-9.88, 4.61, 130.25]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Structure_4_4.geometry}
        material={materials["Clay-Base_50"]}
        position={[-9.88, 11.28, 130.25]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Structure_0_4.geometry}
        material={materials["Clay-Base_50"]}
        position={[-9.88, 2.39, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Structure_3_5.geometry}
        material={materials["Clay-Base_50"]}
        position={[-9.88, 9.06, 0]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Corru_Steel_11.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[-21.95, 5.82, 95.12]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_16.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 10]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_17.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 20]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_18.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 30]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Truss_20.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 30]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_20.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 50]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_21.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 60]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_22.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 70]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_23.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 80]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_24.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 90]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_25.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 100]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_26.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 110]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_Base_27.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 120]}
        rotation={[Math.PI / 2, 0, -Math.PI]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Drain_Pipe_28.geometry}
        material={materials["Clay-Base_65.001"]}
        position={[0, 0, 130]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Structure_0_3.geometry}
        material={materials["Clay-Base_50"]}
        position={[-9.88, 2.39, 130.25]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_Structure_2_4.geometry}
        material={materials["Clay-Base_50"]}
        position={[-9.88, 6.83, 130.25]}
        rotation={[-Math.PI / 2, 0, Math.PI]}
        scale={-0.01}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Back_Wall_3.geometry}
        material={materials["Clay-Base_50"]}
        position={[0, 0, 130.25]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={-0.01}
      />
    </group>
  );
}

useGLTF.preload("/Warehouse.gltf");