import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from '../src/components/navbar.jsx';
import Home from './Home.jsx';  
import About from './About.jsx';
import Career from './Career.jsx';
import Contact from './Contact.jsx';
import Footer from './components/footer.jsx';
import Architect_interior_designers from './service-pages/architect_interior_designers.jsx';
import Enterprises from './service-pages/enterprises.jsx';
import Healthcare_Education from './service-pages/healthcare_education.jsx';
import Builders_developers from './service-pages/builders_developers.jsx';
import Services from './Services.jsx';
import Team from './Team.jsx';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
     <Router>
    <h1>Atreal Studios</h1>
     <Navbar />
     <div className="pt-20"> {/* Add padding to prevent overlap */}
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} />
         <Route path="/career" element={<Career />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/services/architect-interior-designers" element={<Architect_interior_designers />} />
         <Route path="/services/business&enterprises" element={<Enterprises />} />
         <Route path="/services/builders-developers" element={<Builders_developers/>} />
         <Route path="/services/healthcare&education" element={<Healthcare_Education/>} />
         <Route path="/services" element={<Services/>} />
         <Route path="/team" element={<Team/>} />
       </Routes>
     </div>
     <Footer />
   </Router>
     </>
  );
  

}

export default App
