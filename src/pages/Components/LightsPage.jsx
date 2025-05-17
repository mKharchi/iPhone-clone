"use client"
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Lights from "./Lights";

export default function LightsPage() {
  return (
    <Canvas>
      <Suspense fallback={null}>
        <Lights />
      </Suspense>
    </Canvas>
  );
}