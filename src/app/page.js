"use client"
import { useRef } from "react";
import Header from "./components/header.js";
import About from "./components/about.js";
import Experience from "./components/experience.js";
import Project from "./components/project.js";

export default function Home() {
  const spotlightRef = useRef(null);

  // Move spotlight on mouse move
  function handleMouseMove(e) {
    const spotlight = spotlightRef.current;
    if (spotlight) {
      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY}px`;
    }
  }

  return (
    <div
      onMouseMove={handleMouseMove}
    >
      {/* Spotlight effect */}
      <div
        ref={spotlightRef}
        className="pointer-events-none fixed inset-0 fixed z-30 transition duration-300 lg:absolute h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full lg:absolute"
        style={{
          background: "radial-gradient(circle at center, rgba(29,78,216,0.15) 0%, transparent 80%)",
          left: "50vw",
          top: "50vh",
        }}
      ></div>
      <div className="font-sans mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-4">
          <Header />
          <main className="pt-24 w-full lg:w-[52%] lg:py-24 flex flex-col" id="content">
            <About />
            <Experience />
            <Project />
          </main>
        </div>
      </div>
    </div>
  );
}