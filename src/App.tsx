import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Pages/About.jsx'; // Import About page
import VenomousAnimals from './Pages/VenomousAnimals.jsx'; // Import Venomous Animals page
import FirstAid from './Pages/FirstAid.jsx'; // Import First Aid page
import Emergency from './Pages/Emergency.jsx'; // Import Emergency page
import Hospitals from './Pages/Hospitals.jsx'; // Import Hospitals page
import Map from './Pages/Map.jsx'; // Import Map page
import Contact from './Pages/Contact.jsx'; // Import Contact page

import Navbar from './components/Navbar.jsx';
import HomePage from "./Pages/HomePage.jsx";
import EmergencyContacts from './Pages/EmergencyContacts.jsx';
import Footer from './components/Footer.jsx'; // Import Footer component

const App = () => { 

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/about" element={<About />} /> 
        <Route path="/venomous-animals" element={<VenomousAnimals />} /> 
        <Route path="/first-aid" element={<FirstAid />} /> 
        <Route path="/emergency" element={<Emergency />} /> 
        <Route path="/hospitals" element={<Hospitals />} /> 
        <Route path="/map" element={<Map />} /> 
        <Route path="/contact" element={<Contact />} /> 

        <Route path="/emergency-contacts" element={<EmergencyContacts />} />
      </Routes>
      <Footer /> {/* Include Footer component */}
    </Router>
  );
};

export default App;