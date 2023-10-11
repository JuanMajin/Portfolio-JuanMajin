
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Ghost(props) {
  const { nodes, materials } = useGLTF("assets/models/ghost/cloth_ghost.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <group position={[-150, 50, -500]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ee_obj_1_Mat_0.geometry}
            material={materials.material}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.ee_obj_1_Mat1_0.geometry}
            material={materials["Mat.1"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("assets/models/ghost/cloth_ghost.glb");
export default Ghost;


