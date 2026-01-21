import React, { useEffect, useRef } from "react";

export default function Footer() {
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = footerRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && footer) {
            footer.classList.remove("opacity-0", "translate-y-10");
            footer.classList.add("opacity-100", "translate-y-0");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (footer) observer.observe(footer);

    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);

  return (
    <footer ref={footerRef} className="  bg-blue-950">
      <hr />
      <div className="pt-6 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl">
        <div className="grid px-4 md:px-24 lg:px-8 gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Logo and Description */}
          <div>
            <a
              id="nav-title"
              href="/"
              className="text-2xl font-bold flex items-center justify-center"
            >
              {/* <img
                src="https://res.cloudinary.com/dlm8wf7gu/image/upload/v1743143678/logo_uq8pvi.svg"
                alt="logo"
                className="w-auto h-14"
              /> */}
            </a>
            <div className="mt-6 lg:max-w-sm ml-2">
              <p className="text-sm text-white">
                Immersive VR Solutions: Redefining Reality, Enhancing
                Experiences, and Revolutionizing the Future of Innovation.
              </p>
            </div>
          </div>

          {/* Contact Section */}
<div className="grid grid-cols-2 gap-y-3 gap-x-2 items-start text-sm text-white">
  {/* Phone */}
  <p className="font-medium">Phone:</p>
  <a href="tel:+91 8806500879" className="font-semibold">
    +91 8806500879
  </a>

  {/* Email */}
  <p className="font-medium">Email:</p>
  <span className="font-semibold">info@atreal.in</span>

  {/* Office Address */}
  <p className="font-medium">Office Address:</p>
  <a
    href="https://maps.app.goo.gl/3JM53sG9cBQyVAX58"
    target="_blank"
    rel="noopener noreferrer"
    className="font-semibold"
  >
    204, Kingston Court Commercial, Virar (W) 401303, Maharashtra
  </a>

  {/* Registered Address */}
  <p className="font-medium">Registered Address:</p>
  <span className="font-semibold">
    GF-001, Mauryansh Elanza, Shyamal Cross Rd, Nr. Parekh, Jodhpur Char Rasta, Ahmedabad-380015, Gujarat
  </span>
</div>


          {/* Social Section */}
          <div>
            <span className="text-xl tracking-wide text-white">Social</span>
            <div className="flex items-center mt-1 space-x-3">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/company/atreal-studios-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-blue-400"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/profile.php?id=61566532654463&mibextid=wwXIfr&rdid=EWdCQxgfWSqwimFp&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1BRFKPCdiX%2F%3Fmibextid%3DwwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-blue-500"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M22 0H2C0.895 0 0 0.895 0 2v20c0 1.105 0.895 2 2 2h11v-9h-3v-4h3V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463 0.099 2.795 0.143v3.24l-1.918 0.001c-1.504 0-1.795 0.715-1.795 1.763V11h4.44l-1 4h-3.44v9H22c1.105 0 2-0.895 2-2V2C24 0.895 23.105 0 22 0z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/atreal_studios/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition-colors duration-300 hover:text-pink-500"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-white">
              Transforming Visions into Virtual Reality. Experience, Innovate,
              and Redefine the Future Today!
            </p>
          </div>
        </div>

        <hr className="text-white" />

        {/* Bottom Footer Links */}
        <div className="flex flex-col-reverse justify-between pt-5 pb-10 px-5 lg:flex-row">
          <p className="text-sm text-white">
            © Copyright 2025 Atreal Studios Pvt. Ltd. All rights reserved.
          </p>
          <ul className="flex flex-col text-white mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
            <li>
              <a
                href="/"
                className="text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                {/* F.A.Q */}
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                {/* Privacy Policy */}
              </a>
            </li>
            <li>
              <a
                href="/"
                className="text-sm transition-colors duration-300 hover:text-deep-purple-accent-400"
              >
                {/* Terms &amp; Conditions */}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
