import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/navbar.jsx";
import Footer from "./components/footer.jsx";

import Home from "./Home.jsx";
import About from "./About.jsx";
import Career from "./Career.jsx";
import Contact from "./Contact.jsx";
import Services from "./Services.jsx";
import Team from "./Team.jsx";
import Viewer from "./Viewer.jsx";

import Architect_interior_designers from "./service-pages/architect_interior_designers.jsx";
import Enterprises from "./service-pages/enterprises.jsx";
import Healthcare_Education from "./service-pages/healthcare_education.jsx";
import Builders_developers from "./service-pages/builders_developers.jsx";


function LayoutWrapper() {
  const location = useLocation();

  const hideLayout = location.pathname === "/services/viewer";

  return (
    <>
      {!hideLayout && <Navbar />}

      <div className={!hideLayout ? "pt-20" : ""}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/career" element={<Career />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />

          <Route path="/services/architect-interior-designers" element={<Architect_interior_designers />} />
          <Route path="/services/business&enterprises" element={<Enterprises />} />
          <Route path="/services/builders-developers" element={<Builders_developers />} />
          <Route path="/services/healthcare&education" element={<Healthcare_Education />} />

          <Route path="/services/viewer" element={<Viewer />} />
        </Routes>
      </div>

      {!hideLayout && <Footer />}
    </>
  );
}

function App() {
  return (
    <Router>
      <LayoutWrapper />
    </Router>
  );
}

export default App;
