import { OrbitControls } from "@react-three/drei"


const Controls = () => {
    return (
        <OrbitControls
         enableZoom={false}
         enablePan={false}
         rotateSpeed={0.5}
         maxPolarAngle={Math.PI / 2.1}
         minPolarAngle={Math.PI / 3}
         maxAzimuthAngle={Math.PI / 4}
        minAzimuthAngle={-Math.PI / 4}
        // target={[0,0,15]}
        />
    )
}

export default Controls;