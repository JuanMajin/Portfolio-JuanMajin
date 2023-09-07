import { OrbitControls } from "@react-three/drei";
import Bee from "./World/Bee";
import { Tree } from "./World/Tree";
import { WoodenFence } from "./World/WoodenFence";
import Bat from "./World/Bat";

const Experience = () => {
    return (
        <>
            <ambientLight intensity={1} />
            <directionalLight position={[0, -4, 10]} intensity={3} />
            <directionalLight position={[0, 8, 20]} intensity={3} />

            <OrbitControls makeDefault/>
            <Bat />
            <Bee />
            <Tree position={[3, -2, -3]} scale={0.04} />
            <WoodenFence position={[0, -2, 0]} scale={1} />
            <mesh position-y={-2} rotation-x={-Math.PI / 2} >
                <circleGeometry attach="geometry" args={[20]} />
                <meshStandardMaterial attach="material" color="black"/>
            </mesh>
        </>
    )
}

export default Experience;