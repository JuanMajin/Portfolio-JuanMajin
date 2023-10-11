import { Canvas } from "@react-three/fiber"
import Experience from "./World/Experience"
import Info from "./Info/Info"
import { Loader } from "@react-three/drei"

const App = () => {
    // Camera settings
    const cameraSettings = {
        position: [0,3,25],
        fov: 70
    }

    return (
        <>
            <Info name={"JuanMajin"} biography={"Studen from univalle university - System engineer " }/>
            <Canvas
                camera={cameraSettings}
                shadows
            >
                <Experience />
                
            </Canvas>
            <Loader />
        </>
    )
}
export default App