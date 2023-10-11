import Welcome from "./Scenes/Welcome/Welcome"
import Lights from "./Staging/Lights";
import Environments from "./Staging/Environments";
import Controls from "./Controls/Controls";
import Skills from "./Scenes/AboutMe/Skills";
import { Physics } from "@react-three/rapier";


const Experience = () => {
    return (
        <>
        <Controls />
        <Environments />
        <Lights />
        <Physics>
        <Welcome />
        < Skills/>

        </Physics>
       
        </>
    )
}

export default Experience;