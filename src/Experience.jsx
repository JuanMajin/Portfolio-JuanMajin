import { OrbitControls } from "@react-three/drei";
import { Tree } from "./World/Tree";
import Bat from "./World/Bat";
import HauseH from "./World/Hause";
import Ghost from "./World/Ghost";
import Pumpink from "./World/Pumpink";
import Tombstone from "./World/Tombstone";
import Light from "./World/Lights";
import Enviroments from "./World/Environments";

const Experience = () => {
    return (
        <>
            <Enviroments />
            <Light/>
            <OrbitControls makeDefault/>
            <Bat  />
            <Tree position={[20, -2, 4]} scale={16}  />
            <Tree position={[-20, -2, -4]} scale={16} />
            <HauseH position={[1, 16, -12]} scale={20} rotation-y={-Math.PI / 2}  />
            <Ghost scale={5}  rotation-y={-Math.PI / -2} />
            <Pumpink  position={[20, -2, 8]} scale={5} />
            <Pumpink  position={[22, -2, 8]} scale={4} />
            <Pumpink  position={[18, -2, 8]} scale={4} />
            <Tombstone position={[-20, -2, 10]} scale={0.04} rotation-y={-Math.PI / -2} />

           
            <mesh position-y={-2} rotation-x={-Math.PI / 2} receiveShadow >
                <circleGeometry attach="geometry" args={[28]}  />
                <meshStandardMaterial attach="material" color={0x26274A} />
        
            </mesh>
        </>
    )
}

export default Experience;