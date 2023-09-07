
import React from "react";
import { useGLTF } from "@react-three/drei";
import { useTexture } from "@react-three/drei";

export function WoodenFence(props) {
  const { nodes } = useGLTF("/assets/models/woodenFence/woodenFence.glb");
  const PATH = "/assets/materials/stone/";

  const propsTexture = useTexture({
    map: PATH + 'rocky_trail_disp_1k.png',
    // displacementMap: PATH + 'woodHeight.png',
    normalMap: PATH + 'rocky_trail_nor_dx_1k.jpg',
    roughnessMap: PATH + 'rocky_trail_rough_1k.jpg',
    aoMap: PATH + 'rocky_trail_ao_1k.jpg',
  })

  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.WoodenFence.geometry}
      >
        <meshStandardMaterial {...propsTexture}/>
        </mesh>
    </group>
  );
}

useGLTF.preload("/assets/models/woodenFence/woodenFence.glb");