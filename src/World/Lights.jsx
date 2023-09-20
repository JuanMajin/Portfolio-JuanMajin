import { useHelper } from "@react-three/drei";
import { useRef } from "react";
import { PointLightHelper, SpotLightHelper } from "three";
const Lights = () => {
    // const spotLightref = useRef();
    // useHelper(spotLightref,SpotLightHelper, "cyan");
    // const pointLightref = useRef();
    //  useHelper(pointLightref,PointLightHelper,1,"HotPink");
    return <>
            <ambientLight intensity={0.2} />
            <pointLight    position={[-26, 12, -10]} intensity={600} color={"red"}  castShadow/>
            <pointLight    position={[26, 12, -10]} intensity={600} color={"red"} castShadow />
            <pointLight    position={[-22, -2, 8]} intensity={150} color={"blue"} castShadow rotateY={Math.PI /2}/>

            <spotLight
            castShadow
            position={[6,100,-80]}
            angle={Math.PI / 26}
            intensity={160000}
            color={"purple"}
            penumbra={1}
  	    distance={160}

        />
        </>
}
export default Lights;