import { rightImg, watchImg } from "@/utils";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";
import VideoCarousel from "./VideoCarousel";
import Image from "next/image";

const Highlights = () => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: 1,
      y: 0,
    });
    gsap.to(".link", {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  }, []);
  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden h-full common-padding bg-zinc "
    >
      <div className="scrim-max-width">
        <div className="mb-12 w-full md:flex items-end justify-between ">
          <h1 id="title" className="section-heading">
            Get the highlights
          </h1>
          <div className="flex flex-wrap  items-end  gap-5">
            <p className="link">Watch the film
              <Image
                src={watchImg}
                alt="watch"
                className="ml-2"
                width={18}
                height={18}
              />
            </p>
            
            <p className="link">Watch the event
              <Image
                src={rightImg}
                alt="watch"
                className="ml-2"
                width={18}
                height={18}
              />
            </p>
            
          </div>
        </div>
      </div>

      <VideoCarousel />
    </section>
  );
};

export default Highlights;
