import { Float, Html, Text } from "@react-three/drei"

const WelcomeText = () => {
    const text =`Welcome to \n Halloween Hause`
    return(
        // <Html position={[0,3,0]} center distanceFactor={12} >
        //     <h2 className="welcome-text">HelloWord</h2>
        // </Html>
        <Float>
        <Text
            font="/assets/fonts/PermanentMarker-Regular.ttf"
            fontSize={2}
            color="azure"
            position-y={8}
            position-x={1.5}
            maxWidth={3}
            textAlign="center"
            >
            {text}
            
        </Text>
        </Float>
    )

}

export default WelcomeText;