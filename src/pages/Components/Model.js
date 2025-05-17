"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import { yellowImg } from "@/utils";
import * as THREE from 'three';
import { Canvas } from "@react-three/fiber";
import ModelView from "./ModelView";
import { models, sizes } from "@/constants";
import { animateWithGsapTimeline } from "@/utils/animations";

const Model = () => {
  const [size, setSize] = useState('small');
  const [model, setModel] = useState({
    title: 'iPhone 15 Pro in Natural Titanium',
    color: ['#8F8A81', '#FFE7B9', '#6F6C64'],
    img: yellowImg,
  });

  // Camera control refs
  const cameraControlSmall = useRef();
  const cameraControlLarge = useRef();

  // Model group refs
  const small = useRef(new THREE.Group());
  const large = useRef(new THREE.Group());

  // Rotation states
  const [smallRotation, setSmallRotation] = useState(0);
  const [largeRotation, setLargeRotation] = useState(0);

  // Client-side mounting detection
  const [isMounted, setIsMounted] = useState(false);
  
  useEffect(() => {
    setIsMounted(true);
  }, []);

  // GSAP animations
  const tl = gsap.timeline();

  useEffect(() => {
    if(size === 'large'){
      animateWithGsapTimeline(tl, small, smallRotation, "#view1", "#view2", {transform:'translateX(-100%)', duration:1});
    }
    if(size === 'small'){
      animateWithGsapTimeline(tl, large, largeRotation, "#view2", "#view1", {transform:'translateX(0)', duration:1});
    }
  }, [size, smallRotation, largeRotation, tl]);

  useGSAP(() => {
    gsap.to('#heading', { y: 0, opacity: 1 });
  }, []);

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>

        <div className="flex flex-col items-center mt-5">
          <div className="w-full h-[75vh] md:h-[90vh] overflow-hidden relative" style={{ touchAction: 'none' }}>
            {/* Model views outside of Canvas - as in your original structure */}
            <div id="view1" className="w-full h-full absolute" style={{ touchAction: 'none' }}>
              {isMounted && (
                <ModelView 
                  index={1}
                  groupRef={small}
                  gsapType="view1"
                  controlRef={cameraControlSmall}
                  setRotationState={setSmallRotation}
                  item={model}
                  size={size}
                />
              )}
            </div>

            <div id="view2" className={`w-full h-full absolute ${size === 'small' ? 'right-[-100%]' : 'left-full'}`} style={{ touchAction: 'none' }}>
              {isMounted && (
                <ModelView 
                  index={2}
                  groupRef={large}
                  gsapType="view2"
                  controlRef={cameraControlLarge}
                  setRotationState={setLargeRotation}
                  item={model}
                  size={size}
                />
              )}
            </div>

            {/* Single Canvas for all rendering - keeping empty as per original structure */}
            {false && isMounted && (
              <Canvas 
                className="w-full h-full"
                style={{
                  position: 'fixed',
                  top: 0,
                  bottom: 0,
                  left: 0,
                  right: 0,
                  touchAction: 'none'
                }}
                dpr={[1, 2]}
              />
            )}
          </div>

          <div className="mx-auto w-full">
            <p className="text-sm font-light text-center mb-5">{model.title}</p>

            <div className="flex-center">
              <ul className="color-container">
                {models.map((item, i) => (
                  <li 
                    key={i} 
                    className="w-6 h-6 rounded-full mx-2 cursor-pointer" 
                    style={{ backgroundColor: item.color[0] }} 
                    onClick={() => setModel(item)} 
                  />
                ))}
              </ul>

              <button className="size-btn-container">
                {sizes.map(({ label, value }) => (
                  <span 
                    key={label} 
                    className="size-btn" 
                    style={{ 
                      backgroundColor: size === value ? 'white' : 'transparent', 
                      color: size === value ? 'black' : 'white'
                    }} 
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </span>
                ))}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Model;