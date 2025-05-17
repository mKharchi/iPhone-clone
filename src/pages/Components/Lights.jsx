"use client"

import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import dynamic from 'next/dynamic';
import * as THREE from 'three';

const LightsComponent = dynamic(() => import('./LightsComponent'), { ssr: false });

export default function LightsPage() {
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <Canvas
        gl={{
          antialias: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          outputEncoding: THREE.sRGBEncoding
        }}
        camera={{
          fov: 45,
          near: 0.1,
          far: 200,
          position: [0, 0, 6]
        }}
      >
        <Suspense fallback={null}>
          <LightsComponent />
        </Suspense>
      </Canvas>
    </div>
  );
}