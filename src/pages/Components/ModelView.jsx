"use client";

import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
import * as THREE from 'three';
import { useRef, useEffect, Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import LightsComponent from './LightsComponent';
import Loader from './Loader';
import IPhone from './IPhone';

const ModelView = ({ index, groupRef, gsapType, controlRef, setRotationState, size, item }) => {
  // Local reference for OrbitControls if no external ref is provided
  const localControlRef = useRef();
  const finalControlRef = controlRef || localControlRef;

  // Track if component is mounted
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
    
    // Update controls when mounted
    if (finalControlRef.current) {
      finalControlRef.current.update();
    }
  }, []);

  return (
    <div id={gsapType} className={`w-full h-full absolute ${index === 2 ? 'right-[-100%]' : ''}`}>
      <Canvas
        className="w-full h-full"
        style={{ pointerEvents: 'auto' }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 4]
        }}
      >
        {/* Camera and lighting */}
        <PerspectiveCamera makeDefault position={[0, 0, 4]} />
        <ambientLight intensity={0.3} />

        <LightsComponent />
        {/* Controls for model interaction */}
        <OrbitControls
          ref={finalControlRef}
          enableZoom={false}
          enablePan={false}
          rotateSpeed={0.4}
          target={new THREE.Vector3(0, 0, 0)}
          onEnd={() => {
            if (setRotationState && finalControlRef.current) {
              setRotationState(finalControlRef.current.getAzimuthalAngle());
            }
          }}
        />

        {/* Model group */}
        <group
          ref={groupRef}
          name={index === 1 ? 'small' : 'large'}
          position={[0, 0, 0]}
        >
          <Suspense fallback={<Loader />}>
            <IPhone
              scale={index === 1 ? [15, 15, 15] : [17, 17, 17]}
              item={item}
              size={size}
            />
          </Suspense>
        </group>
      </Canvas>
    </div>
  );
};

export default ModelView;