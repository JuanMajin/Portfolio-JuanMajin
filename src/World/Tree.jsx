import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Tree(props) {
  const { nodes, materials } = useGLTF("/assets/models/tree/dead_tree.glb");
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Tree_Tree_0.geometry}
          material={materials.Tree}
          position={[0.765, 16.519, 1.023]}
          scale={14.506}
        />
      </group>
    </group>
  );
}
useGLTF.preload("/assets/models/tree/dead_tree.glb");

export default Tree;