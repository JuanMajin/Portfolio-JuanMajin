
import { Suspense, useRef } from "react";
import Bat from "./Models/Bat";
import Tree from "./Models/Tree";
import Hause, { HauseH } from "./Models/HauseH";
import Ghost from "./Models/Ghost";
import Pumpink from "./Models/Pumpink";
import Tombstone from "./Models/Tombstone";
import WelcomeText from "./Text/WelcomeText";
import Sign from "./Models/Sign";
import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import Led from "./Models/Led";



const Welcome = () => {
    return (
        <>
     <Suspense fallback={null}>
      <Bat/>
      <Tree position={[20, 0, 4]} scale={16} />
      <Tree position={[-20, 0, -4]} scale={16} />
      <HauseH position={[0, 16, -14]} scale={20} rotation-y={-Math.PI / 2} />
      <Ghost scale={5} rotation-y={-Math.PI / -2} />
      
      <Tombstone position={[-20, 0, 10]} scale={0.04} rotation-y={-Math.PI / -2} />
      <WelcomeText/>
      
      <Sign position={[0,0,15]} scale={1.4}  />
      <Led />
    </Suspense>
          
            <RigidBody type={"fixed"} colliders={"cuboid"} position-y={[-0.4]} >
            <mesh   rotation-x={-Math.PI / 2} receiveShadow >
                <boxGeometry attach="geometry" args={[60,60,1]}  />
                <meshStandardMaterial  color={0x26274A} />
            </mesh>
            </RigidBody>
            
        </>
    )
}

export default Welcome;