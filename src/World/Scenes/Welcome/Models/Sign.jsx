import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { MathUtils } from "three";



export function Sign(props) {
  const[active, setActive] = useState(false);
  const { nodes, materials } = useGLTF("assets/models/sign/sign.glb");
  useFrame((state)=>{
    state.camera.position.x = MathUtils.lerp(state.camera.position.x, active ? 27 : 0, 0.01);
    state.camera.position.z= MathUtils.lerp(state.camera.position.z, active ? 15: 25, 0.01);
  })

  const[play,setPlay]=useState(false)
  const [hitSound]=useState(()=>new Audio("assets/sounds/hit.wav"))

  useEffect(()=>{
      if(play){
          hitSound.currentTime=0;
          hitSound.volume==20;
          hitSound.play();

      }
  },[play])


  return (
    <group {...props} dispose={null}>
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sign.geometry}
          material={materials.wood}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.AboutMe.geometry}
          material={materials.green}
          onClick={() => {
            window.open(`https://www.linkedin.com/in/juan-jose-majin-845a9a247/`);
            setPlay(true);
          }}
      
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TextAboutMe.geometry}
          material={materials.text}
          material-color="white"
          position={[0.03, 2.23, 0.087]}
          rotation={[1.559, -0.139, -0.088]}
          scale={0.189}
        />
    
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Projects.geometry}
          material={materials.yellow}
          onClick={() =>{window.open("https://github.com/JuanMajin");
          setPlay(true);
        }}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.TextProjects.geometry}
          material={materials.text}
          position={[0.02, 1.86, 0.092]}
          rotation={[Math.PI / 2, 0, 0.087]}
          scale={0.189}
          
        />
      </group>
    </group>
  );
}

useGLTF.preload("assets/models/sign/sign.glb");
export default Sign;