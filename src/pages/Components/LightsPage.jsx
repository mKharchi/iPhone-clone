"use client"
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import dynamic from 'next/dynamic';

const Lights = dynamic(() => import('./Lights'), { ssr: false });

export default function LightsPage() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Lights />
      </Suspense>
    </Canvas>
  );
}