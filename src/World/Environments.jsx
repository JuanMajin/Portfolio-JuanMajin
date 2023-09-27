import { Cloud, Environment, Sky, Stars } from "@react-three/drei"

const Enviroments =() =>{
    return(
        <>
            {/* <Environment files={"/assets/environments/satara_night_1k(1).hdr"} background={true}
            ground={{height:20 , scale:256}}/> */}
            {/* <Environment preset="night" background={true} ground={{height:20 , scale:256}} /> */}
            <Sky
            moonposition={[0, 10, -10]} // Coloca el sol debajo del horizonte
            inclination={0.2}       // Ajusta la inclinación para simular el atardecer
            azimuth={180}          // Ajusta el ángulo azimutal para cambiar la dirección de la luz
            mieCoefficient={0.005}  // Ajusta la dispersión atmosférica
            elevation={5}           // Ajusta la elevación del sol
            mieDirectionalG={0.06}   // Ajusta la luminosidad del sol
            rayleigh={10}        // Ajusta la dispersión de Rayleigh
            turbidity={0.2}         // Ajusta la claridad del cielo
            exposure={0.5}
             />

             <Stars 
             radius={50} // Radius of the inner sphere (default=100)
             depth={50} // Depth of area where stars should fit (default=50)
             count={5000} // Amount of stars (default=5000)
             factor={4} // Size factor (default=4)
             saturation={1} // Saturation 0-1 (default=0)
             />

             <Cloud 
             opacity={0.3}
             speed={0.4} // Rotation speed
             width={50} // Width of the full cloud
             depth={5} // Z-dir depth
             segments={20} // Number of particles
             position-y={10}
             />
        </>
    )
}

export default Enviroments;