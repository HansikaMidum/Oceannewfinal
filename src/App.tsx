import React, { useState, useEffect } from 'react';
import { Menu, AlertTriangle, Search, Phone, MapPin, Info, Heart, ChevronRight } from 'lucide-react';

function App() {
  const heroImages = [
    "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2000"
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center transition-all duration-1000"
        style={{ backgroundImage: `url("${heroImages[currentImageIndex]}")` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center text-white">
          <div className="max-w-2xl text-center">
            <h1 className="text-5xl font-bold mb-4">Stay Safe on Sri Lanka's Coastlines</h1>
            <p className="text-xl mb-8">Identify venomous marine animals, learn first aid, and find emergency help.</p>
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-lg font-semibold transition duration-300">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { App };