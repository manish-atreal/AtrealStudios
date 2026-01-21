import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { NavLink } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const controls = useAnimation();
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const isMissionInView = useInView(missionRef, { once: true });
  const isVisionInView = useInView(visionRef, { once: true });

  useEffect(() => {
    if (isMissionInView) {
      controls.start("visible");
    }
    if (isVisionInView) {
      controls.start("visible");
    }
  }, [isMissionInView, isVisionInView, controls]);

  return (
    <>
    <div className="min-h-screen bg-white">
      {/* Hero Section with Background Image */}
      <motion.div
        className="lg:h-[500px] md:h-[350px] h-[220px] flex items-center justify-center lg:justify-center lg:flex-col"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dlm8wf7gu/image/upload/v1743157974/about_us_mm87iy.png')",
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Content for larger screens */}
        <motion.div
          className=" w-3/4 sm:w-1/2 flex justify-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="AboutContent-d text-white hidden text-center lg:flex flex-col gap-0 items-center justify-center">
            <span className="text-[45px]">Welcome to</span>
            <motion.span
              className="font-bold text-[65px] -mt-8 font-futura"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, type: "spring" }}
            >
              ATREAL STUDIOS
            </motion.span>
            <motion.span
              className="text-[30px] w-3/4 -mt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
            >
              Where we revolutionize the way properties are designed,
              visualized, and experienced.
            </motion.span>
          </div>
        </motion.div>

        {/* Content for smaller screens */}
        <div className="absolute left-[20%] sm:hidden">
          <motion.div
            className="AboutContent-m text-white sm:text-2xl text-lg font-bold w-4/5 text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Welcome to
            <br />
            ATREAL STUDIOS,
            <br />
            <span className="text-sm font-normal">
              where we revolutionize the way properties are designed,
              visualized, and experienced.
            </span>
          </motion.div>
        </div>
      </motion.div>

      {/* Mission & Vision Section */}
      <div className="px-[40px] py-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Our Mission */}
        <motion.div
          ref={missionRef}
          className="bg-blue-100 p-6 rounded-lg shadow-lg"
          initial={{ x: -100, opacity: 0 }}
          animate={isMissionInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.h2
            className="text-4xl text-center font-semibold text-blue-950 mb-4"
            initial={{ opacity: 0 }}
            animate={isMissionInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Our Mission
          </motion.h2>
          <motion.p
            className="text-blue-900 text-center"
            initial={{ opacity: 0 }}
            animate={isMissionInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            On a mission to revolutionize real estate sales through cutting-edge
            AR and VR technology. We empower developers to showcase properties
            with immersive, interactive experiences, enabling buyers to
            visualize their future homes before construction begins. Our goal is
            to enhance trust, transparency and engagement in the real estate
            industry.
          </motion.p>
        </motion.div>

        {/* Our Vision */}
        <motion.div
          ref={visionRef}
          className="bg-blue-100 p-6 rounded-lg shadow-lg"
          initial={{ x: 100, opacity: 0 }}
          animate={isVisionInView ? { x: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          whileHover={{ scale: 1.02 }}
        >
          <motion.h2
            className="text-4xl font-semibold text-blue-950 text-center mb-4"
            initial={{ opacity: 0 }}
            animate={isVisionInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Our Vision
          </motion.h2>
          <motion.p
            className="text-blue-900 text-center"
            initial={{ opacity: 0 }}
            animate={isVisionInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            To become the global leader in immersive real estate visualization,
            making property buying seamless, informed and futuristic. We
            envision a world where every buyer can walk through their dream home
            before it's built, transforming the way real estate is marketed and
            sold.
          </motion.p>
        </motion.div>

        
      </div>

    </div>
    <div 
      className="flex justify-center items-center gap-4 py-8 -mt-[40px]">
          <NavLink
          to="/team"
          className={({ isActive }) =>
            `px-4 py-2 rounded text-white font-semibold transition-all duration-200 ${
              isActive ? "bg-blue-950" : "bg-blue-950/80 hover:bg-blue-950"
            }`
          }
        >
          Meet the Team
        </NavLink>
    </div>
        

        </>
  );
};

export default About;
