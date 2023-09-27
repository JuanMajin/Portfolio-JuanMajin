import { OrbitControls } from "@react-three/drei";
import { Tree } from "./World/Tree";
import Bat from "./World/Bat";
import HauseH from "./World/Hause";
import Ghost from "./World/Ghost";
import Pumpink from "./World/Pumpink";
import Tombstone from "./World/Tombstone";
import Light from "./World/Lights";
import Enviroments from "./World/Environments";
import { Suspense, useRef } from "react";
import WelcomeText from "./World/WelcomeText";
import Sign from "./World/Sing";

const Experience = () => {
    return (
        <>
            <Enviroments />
            <Light/>
            <OrbitControls target={[0,0,15]} maxPolarAngle={Math.PI /2.1}/>
            {/* <OrbitControls makeDefault /> */}
     <Suspense fallback={null}>
      <Bat />
      <Tree position={[20, 0, 4]} scale={16} />
      <Tree position={[-20, 0, -4]} scale={16} />
      <HauseH position={[0, 16, -14]} scale={20} rotation-y={-Math.PI / 2} />
      <Ghost scale={5} rotation-y={-Math.PI / -2} />
      <Pumpink position={[20, 0, 8]} scale={5} />
      <Pumpink position={[22, 0, 8]} scale={4} />
      <Pumpink position={[18, 0, 8]} scale={4} />
      <Tombstone position={[-20, 0, 10]} scale={0.04} rotation-y={-Math.PI / -2} />
      <WelcomeText/>
      <Sign position={[0,0,15]} scale={1.4}  />
    </Suspense>
           
            <mesh position-y={0} rotation-x={-Math.PI / 2} receiveShadow >
                <circleGeometry attach="geometry" args={[28]}  />
                <meshStandardMaterial attach="material" color={0x26274A} />
        
            </mesh>
        </>
    )
}

export default Experience;