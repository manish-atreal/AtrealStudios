import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-[calc(90vh)] -mt-8 md:-mt-6 overflow-hidden">
      {/* Background Video with Zoom-in Animation */}
      <motion.video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <source
          src="https://res.cloudinary.com/dlm8wf7gu/video/upload/v1743161909/TrialVideo_vtpimy.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </motion.video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-1"></div>

      {/* Hero Content with Fade and Slide In */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white px-4"
      >
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold text-white">
          Transforming Vision Into Reality
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mt-4 text-white">
          Immersive 3D Models and VR Experiences for <br />
          <span className="text-xl md:text-2xl lg:text-4xl font-semibold text-white">
            Future & Real Estate
          </span>
        </p>
      </motion.div>
    </section>
  );
}
