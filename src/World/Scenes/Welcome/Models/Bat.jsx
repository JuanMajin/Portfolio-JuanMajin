import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
const Bat = () => {
    const batRef = useRef();
    const batModel = useGLTF("/assets/models/bat/scene.gltf")
    console.dir(batModel);


    const {animations} = batModel;

    const {actions} = useAnimations(animations, batRef)

    useEffect(()=>{
        const action = actions["Flight"]
        action.play()
    }, [])

    return(
        <mesh ref={batRef}  position={[-6,2,4]} rotation-y={-Math.PI *2} scale={0.09} castShadow>
            <primitive object={batModel.scene}/>
        </mesh>
    )
};

export default Bat;
useGLTF.preload("/assets/models/bat/scene.gltf");