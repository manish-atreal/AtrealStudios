import React from "react";
import buildersImg from "../assets/builders_developers.svg";
import architectsImg from "../assets/architects_interior_designers.svg";
import realEstateImg from "../assets/real_estate_agents.svg";
import beyondImg from "../assets/businesses_beyond_real_estate.svg";

export const services = [
  {
    title: "Builders & Developers",
    description: "Showcase projects with immersive VR, AR, and 3D experiences.",
    image: buildersImg,
    link: "/services/builders-developers",
  },
  {
    title: "Architect & Interior Designers",
    description:
      "Visualize designs with stunning AR, VR walkthroughs, and 3D modeling.",
    image: architectsImg,
    link: "/services/architect-interior-designers",
  },
  {
    title: "Business & Enterprises",
    description:
      "Boost engagement and operations with immersive VR solutions tailored for modern enterprises.",

    image: realEstateImg,
    link: "/services/business&enterprises",
  },
  {
    title: "Healthcare & Education",
    description:
      "Empowering learning and wellness with immersive AR, VR, and 3D experiences.",

    image: beyondImg,
    link: "/services/healthcare&education",
  },
  {
    title: "Atreal Connect",
    description:"Walk the property. Together. Online.",
    image:"/walk-the-property-together.png",
    link:"/services/viewer"
  }
];
