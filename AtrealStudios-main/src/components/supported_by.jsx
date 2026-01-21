import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import supportedByImages from "../data/supported-by.js";
import OurClients from "../OurClients.jsx";
// Logo item as a component
const LogoItem = ({ img, index }) => (
  <div className="flex-shrink-0 w-36 h-36 flex items-center justify-center p-4 bg-white rounded-lg border border-gray-100 shadow-sm hover:shadow-md transition-all">
    <img
      src={img}
      alt={`Supported by logo ${index + 1}`}
      loading="lazy"
      className="max-w-full max-h-full object-contain"
    />
  </div>
);

export default function Supported_by() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const itemWidth = 144; // 36 * 4 = 144px
  const gapWidth = 32;   // 8 * 4 = 32px
  const totalWidth = supportedByImages.length * (itemWidth + gapWidth);

  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
        className="py-12 text-center overflow-hidden"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-12">
          Supported By
        </h2>

        <div className="relative w-full">
          <div className="flex overflow-hidden">
            <div
              className="flex gap-8 animate-scroll"
              style={{
                width: `${totalWidth * 2}px`,
                animationDuration: `${supportedByImages.length * 3}s`
              }}
            >
              {supportedByImages.map((img, i) => (
                <LogoItem key={`first-${i}`} img={img} index={i} />
              ))}
              {supportedByImages.map((img, i) => (
                <LogoItem key={`second-${i}`} img={img} index={i} />
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          .animate-scroll {
            animation: scroll linear infinite;
            will-change: transform;
          }
        `}</style>
      </motion.div>

      <OurClients/>
    </>
  );
}
