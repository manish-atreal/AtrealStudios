import React, { useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import HeroSection from "./components/hero_section.jsx";
import AckSection from "./components/ack_section.jsx";
import Supported_by from "./components/supported_by.jsx";
import Services from "./Services.jsx";
export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
      <HeroSection />
      <AckSection />
      <Services />
      <Supported_by />

      {/* contact us section  */}
      <section className="w-full pt-16 mb-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          {/* Video Column */}
          <div className="order-1 md:order-2 flex items-center justify-center w-full h-60 sm:h-72 md:h-80 lg:h-96 rounded-lg overflow-hidden relative">
            {/* YouTube Shorts Thumbnail with Play Button */}
            <a
              href="https://youtube.com/shorts/YKjFkUX_BJw?si=pPpgGlRNKarblHa8"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-full relative"
            >
              {/* YouTube Thumbnail Image */}
              <img
                src="https://img.youtube.com/vi/YKjFkUX_BJw/sddefault.jpg"
                alt="YouTube Shorts Preview"
                className="w-full h-full object-cover rounded-lg"
              />

              {/* Dark overlay for better button visibility */}
              {/* <div className="absolute inset-0 bg-black bg-opacity-20 rounded-lg"></div> */}

              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center shadow-lg transform transition-transform hover:scale-105">
                  <svg
                    className="w-6 h-6 sm:w-8 sm:h-8 text-red-600"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
            </a>
          </div>

          {/* Text Column with scroll motion */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            className="order-2 md:order-1 text-center md:text-left"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 leading-tight mb-4">
              Ready to Experience the Future?🚀
            </h2>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-950 leading-relaxed">
              Virtual Reality is changing the way we interact, learn, and
              explore. Be a part of this revolution and take the first step into
              a whole new world!
            </p>
            <NavLink
              to="/contact"
              className="mt-10 inline-block bg-blue-950 text-white text-sm sm:text-base px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition "
            >
              Join Us Today!
            </NavLink>
          </motion.div>
        </div>
      </section>
      {/* end of contact us section  */}
    </>
  );
}
