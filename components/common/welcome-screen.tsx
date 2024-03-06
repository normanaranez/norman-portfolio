"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { ElementRef, useRef } from "react";

export const WelcomeScreen = () => {

  const containerRef = useRef<ElementRef<"section">>(null);
  const titleContainerRef = useRef<ElementRef<"div">>(null);
  
  useGSAP(() => {
    
    gsap.to(titleContainerRef.current, {
        opacity: 0,
        delay: 0.5,
    });

    gsap.from(["#title-1", "#title-2", "#title-3"], {
        opacity: 0,
        y: "+=30",
        stagger: 1,
        delay: 1
    });

    // gsap.from("#image-1", {
    //     opacity: 0,
    //     x: "-=100",
    //     duration: 1,
    //     delay: 1,
    //     onComplete: () => {
    //         gsap.to("#title-1", {
    //             y: "+=20",
    //             repeat: -1,
    //             yoyo: true,
    //             duration: 1.5,
    //             ease: "power1.inOut",
    //             delay: 0.5
    //         })
    //     }
    // });
    
    // gsap.from("#image-2", {
    //     opacity: 0,
    //     x: "+=100",
    //     duration: 1,
    //     delay: 2,
    //     onComplete: () => {
    //         gsap.to("#title-2", {
    //             y: "+=20",
    //             repeat: -1,
    //             yoyo: true,
    //             duration: 1.5,
    //             ease: "power1.inOut",
    //             delay: 0.5
    //         })
    //     }
    // });
    
    // gsap.from("#image-3", {
    //     opacity: 0,
    //     x: "-=100",
    //     duration: 1,
    //     delay: 3,
    //     onComplete: () => {
    //         gsap.to("#title-3", {
    //             y: "+=20",
    //             repeat: -1,
    //             yoyo: true,
    //             duration: 1.5,
    //             ease: "power1.inOut",
    //             delay: 0.5
    //         })
    //     }
    // });

    gsap.to(containerRef.current, { 
        xPercent: -100,
        duration: 1,
        delay: 5
    });

  }, {
    scope: containerRef
  });

  return (
    <section
      ref={containerRef}
      className="absolute inset-0 flex items-center justify-center bg-black"
    >
        <div ref={titleContainerRef} className="absolute inset-0 bg-black z-10" />
        <div className="flex gap-20 flex-col text-center">
            <h2 id="title-1" className="text-9xl font-bold text-white uppercase">Seeking a versatile software developer?</h2>
            <h2 id="title-2" className="text-9xl font-bold text-white uppercase">Specializing in backend and frontend.</h2>
            <h2 id="title-3" className="text-9xl font-bold text-white uppercase">Crafting seamless digital experiences.</h2>
            {/* <h2>Let's build something extraordinary together.</h2> */}
        </div>
    </section>
  );
};
