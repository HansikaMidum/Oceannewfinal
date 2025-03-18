import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-blue-800 text-white p-4 fixed w-full top-0 left-0 z-10 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Title */}
        <div className="text-xl font-bold">
          <Link to="/" className="hover:text-gray-300">OceanMedic</Link>
        </div>

        {/* Navbar Links */}
        <ul className="hidden md:flex space-x-8">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/venomous-animals">Venomous Animals</Link></li>
          <li><Link to="/first-aid">First Aid</Link></li>
          <li><Link to="/emergency">Emergency</Link></li>
          <li><Link to="/hospitals">Hospitals</Link></li>
          <li><Link to="/map">Map</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Menu Icon for Mobile */}
        <div className="md:hidden">
          <button className="text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
