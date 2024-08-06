import { Suspense } from 'react' ; 
import { Canvas } from '@react-three/fiber' ; 
import { useTexture , Decal , Float , OrbitControls , Preload } from '@react-three/drei' ; 

import CanvasLoader from '../Loader' ; 

const Ball = ( { imgUrl } ) => {
    const [ decal ] = useTexture ([ imgUrl ]) 

    return (
        <Float 
            speed={3.75}
            rotationIntensity={1}
            floatIntensity={2}
        >
            <ambientLight intensity={0.25} />
            <directionalLight position={[0 , 0 , 0.05 ]}/>

            <mesh
                castShadow
                receiveShadow
                scale={2.75}
            >

                <icosahedronGeometry args={[1,2]}/> 
                <meshStandardMaterial
                    color={'#B5D2FB'}
                    polygonOffset
                    polygonOffsetFactor={-4}
                    flatShading
                />
                
                <Decal 
                    map={decal} 
                    position={[0, 0 , 1]}
                    rotation={[2* Math.PI, 0 , 6.25]} 
                    flatShading
                />

            </mesh>
        </Float>
    )
}

const BallCanvas = ( { icon } ) => {
    return (
        <Canvas
            frameloop="always"
            gl= {{ preserveDrawingBuffer : true }} 
        >
            <Suspense fallback = { <CanvasLoader/> } >
                <OrbitControls enableZoom =  { false } />
                <Ball imgUrl = { icon } />
            </Suspense>

            <Preload all />
        </Canvas>
    )
}

export default BallCanvas