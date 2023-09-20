import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Pumpink(props) {
  const { nodes, materials } = useGLTF("assets/models/pumpink/jack_o_lantern.glb");
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={20.265}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pumpkin_Pumpkin_Mat_0.geometry}
            material={materials.Pumpkin_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Pumpkin_P_Stem_Mat_0.geometry}
            material={materials.P_Stem_Mat}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Candle_Candle_Mat_0.geometry}
            material={materials.Candle_Mat}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("assets/models/pumpink/jack_o_lantern.glb");
export default Pumpink;