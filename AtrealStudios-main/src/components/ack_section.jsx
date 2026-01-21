import React from 'react';

export default function ack_section() {
  return (
    <section id="vr-section" className="w-full px-6 py-12 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Image Column */}
        <div id="vr-image" className="flex justify-center">
          <img
            src="https://res.cloudinary.com/dlm8wf7gu/image/upload/v1743142058/home_page_pic_01_wj5squ.gif"
            alt="Virtual Reality"
            className="w-full max-w-md"
          />
        </div>

        {/* Text Column */}
        <div id="vr-text" className="text-center lg:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-blue-950 mb-6 leading-tight">
            How is Virtual Reality Being Used?
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-800 leading-relaxed">
            VR is transforming real estate with <strong>virtual tours, 3D visualizations</strong>,
            and <strong>digital staging</strong>. Buyers can explore properties remotely,
            developers can showcase projects before construction, and agents can enhance listings,
            making the industry more <strong>efficient, immersive, and accessible</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}
