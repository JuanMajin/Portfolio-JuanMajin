import { Canvas } from "@react-three/fiber"
import Experience from "./Experience"
import Info from "./Info/Info"

const App = () => {
    // Camera settings
    const cameraSettings = {
        position: [10, 14, 30],
        fov: 60
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
        </>
    )
}
export default App