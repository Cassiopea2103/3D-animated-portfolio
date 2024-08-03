import { useState , useEffect , Suspense } from "react" ; 
import { OrbitControls , Preload , useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import CanvasLoader from '../Loader'


const Computers = () => {

    // setting up breakpoints : 
    const isTablet  = window.innerWidth >= 768  ; 
    const isDesktop  = window.innerWidth >= 1024  ; 

    // Camera position : 
    let targetPosition ; 
    if ( isDesktop ) targetPosition = [ 0 , -3.7 , -2 ] ; 
    else if ( isTablet ) targetPosition = [ 0 , -0.5 , -0.7 ] ; 
    else targetPosition = [ 0.7 , -0.3 , -0.4 ] ; 


    // load the 3D computer model : 
    const computer = useGLTF ( './desktop_pc/scene.gltf' ) ; 

    return (
        <mesh>
            {/* lights */}
            <hemisphereLight 
                intensity = { 1 }
                groundColor = { 'black' }
            />
            <hemisphereLight 
                intensity = { 0.4 }
                groundColor = { 'black' }
            />
            <pointLight 
                intensity={ 1 } 
            /><pointLight 
                intensity={ 1 } 
            />
            <spotLight
                position={[ -20 , 50 , 10 ]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                
            />

            <primitive 
                object = { computer.scene }
                scale = { 
                    isDesktop 
                    ? 0.75
                    :   isTablet 
                        ? 0.45
                        : 0.3
                 }
                position = { targetPosition }
                rotation = {[ -0.01 , -0.2 , -0.1 ]}
            />
        </mesh>
    )
}

// computer canvas component : 
const ComputersCanvas = () => {

    return (
        <Canvas
            frameloop="demand"
            shadows
            camera={{ position : [ 20 , 5 , 5] , fov : 25 }}
            gl= {{ preserveDrawingBuffer : true }} 
        >
            <Suspense fallback = { <CanvasLoader/> } >
                <OrbitControls
                    enableZoom =  { false } 
                    minPolarAngle={ Math.PI / 2 }
                    maxPolarAngle={ Math.PI / 2 }
                />

                <Computers/>
            </Suspense>

            <Preload all />
        </Canvas>
    )
}

export default ComputersCanvas