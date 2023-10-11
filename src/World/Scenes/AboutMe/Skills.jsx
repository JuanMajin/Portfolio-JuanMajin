import { CuboidCollider, Physics, RigidBody } from "@react-three/rapier";
import Pumpink from "../Welcome/Models/Pumpink";
import { useEffect, useRef, useState } from "react";

const Skills = () => {
    const ballBodyRef = useRef();
    const onHandleSphere = () => {

        ballBodyRef.current.wakeUp();
        ballBodyRef.current.applyImpulse({
            x: 0,
            y: 2,
            z: 0
        } ,true)
    }

    const[play,setPlay]=useState(false)
    const [hitSound]=useState(()=>new Audio("assets/sounds/hit.wav"))

    useEffect(()=>{
        if(play){
            hitSound.currentTime=0;
            hitSound.volume==50;
            hitSound.play();

        }
    },[play])

    useEffect(()=>{
        ballBodyRef.current.sleep();
    },[])
    return(
        <>
            <Pumpink position={[20, 0, 8]} scale={5} />
            <Pumpink position={[22, 0, 8]} scale={4} />
            <Pumpink position={[18, 0, 8]} scale={4} />
            <RigidBody  colliders={"trimesh"}  position={[20,10,8.2]} rotation-x={-Math.PI / 2} ref={ballBodyRef} 
            onCollisionEnter={()=>setPlay(false)} onCollisionExit={()=>setPlay(true)}>

                
            <mesh scale={0.5} onClick={onHandleSphere}>
                <torusGeometry args={[1, 0.5, 16, 32]} />
                <meshStandardMaterial color={"red"} />
                
            </mesh>
            </RigidBody>
        </>
    )

}

export default Skills;