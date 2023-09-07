import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import Info from "./Info/Info"

const App = () => {
    // Camera settings
    const cameraSettings = {
        position: [-2, 5, 7],
        fov: 60
    }

    return (
        <>
            <Info name={"JuanMajin"} biography={"Studen from univalle univesity - System engineer " }/>
            <Canvas
                camera={cameraSettings}
            >
                <Experience />
            </Canvas>
        </>
    )
}
export default App