import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useState, useEffect } from "react";
import { heroVideo, smallHeroVideo } from "../../utils";
const Hero = () => {
  const [videoSrc, setVideoSrc] = useState(heroVideo); // Default to heroVideo initially

  useEffect(() => {
    // Set initial video source based on window width
    const setInitialVideoSource = () => {
      if (typeof window !== 'undefined') {
        setVideoSrc(window.innerWidth > 768 ? heroVideo : smallHeroVideo);
      }
    };
    
    setInitialVideoSource();

    const handleVideoSource = () => {
      if (typeof window !== 'undefined') {
        if (window.innerWidth > 768) {
          setVideoSrc(heroVideo);
        } else {
          setVideoSrc(smallHeroVideo);
        }
      }
    };

    window.addEventListener("resize", handleVideoSource);
    return () => {
      window.removeEventListener("resize", handleVideoSource);
    };
  }, []);

  useGSAP(() => {
    gsap.to("#hero", {
      opacity: 1,
      delay: 2,
      duration: 1,
      ease: "power2.inOut",
    });

    gsap.to("#cta", {
      opacity: 1,
      y: -50,
      delay: 2,
      duration: 1,
      ease: "power2.inOut",
    });
  }, []);

  return (
    <section className="w-full relatove nav-height bg-black">
      <div className="h-5/6 w-full flex-center flex-col">
        <p id="hero" className="hero-title">
          iPhone 15 Pro
        </p>
        <div className="md:w-10/12 w-9/12 ">
          <video
            className="pointer-events-none"
            autoPlay
            muted
            playsInline={true}
            key={videoSrc}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        </div>
      </div>
      <div
        id="cta"
        className="flex flex-col items-center opacity-0 translate-y-20 "
      >
        <a href="#highlights" className="btn">
          Buy
        </a>
        <p className="font-normal text-xl ">From $199/month or $999 </p>
      </div>
    </section>
  );
};

export default Hero;
