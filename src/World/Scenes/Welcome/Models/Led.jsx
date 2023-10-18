import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Led(props) {
  const { nodes, materials } = useGLTF("assets/models/led/led2.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["LeD On"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Texto.geometry}
        material={nodes.Texto.material}
        position={[-9,1,1]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[5,5,5]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["0"].geometry}
        material={materials["Led off"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["1"].geometry}
        material={materials["LeD On"]}
        position={[0.012, 0, -0.001]}
      />
    </group>
  );
}

useGLTF.preload("assets/models/led/led2.glb");
export default Led;