import { OrbitControls } from "@react-three/drei";
import Bee from "./World/Bee";
import { Tree } from "./World/Tree";
import { WoodenFence } from "./World/WoodenFence";
import Bat from "./World/Bat";

const Experience = () => {
    return (
        <>
            <ambientLight intensity={0.5} />
            <directionalLight position={[10, 10, 5]} intensity={2} />
            <OrbitControls makeDefault/>
            <Bat />
            <Bee />
            <Tree position={[3, -2, -3]} scale={0.04} />
            <WoodenFence position={[0, -2, 0]} />
            <mesh position-y={-2} rotation-x={-Math.PI / 2} >
                <planeGeometry attach="geometry" args={[30,30]} />
                <meshStandardMaterial attach="material" color="red" />
            </mesh>
        </>
    )
}

export default Experience;