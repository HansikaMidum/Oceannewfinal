import React, { useState, useEffect } from 'react';
import { Menu, AlertTriangle, Search, Phone, MapPin, Info, Heart, ChevronRight } from 'lucide-react';

function App() {
  const heroImages = [
    "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1582967788606-a171c1080cb0?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&q=80&w=2000",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80&w=2000"
  ];

  const dangerousAnimals = [
    {
      name: "Box Jellyfish",
      description: "One of the most venomous marine creatures, causing severe pain and potential cardiac arrest",
      image: "https://images.unsplash.com/photo-1626396890999-99ed0d9c8875?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Stonefish",
      description: "The most venomous fish known, with powerful neurotoxins in its spines",
      image: "https://images.unsplash.com/photo-1621451537084-482c73073a0f?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Beaked Sea Snake",
      description: "Highly venomous sea snake with potent neurotoxic venom",
      image: "https://images.unsplash.com/photo-1567880905822-56f8e06fe630?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Blue-ringed Octopus",
      description: "Small but deadly octopus with no known antivenom",
      image: "https://images.unsplash.com/photo-1544552866-d3ed42536cfd?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Fire Coral",
      description: "Causes severe burning and skin reactions on contact",
      image: "https://images.unsplash.com/photo-1682687982501-1e58ab814714?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Yellow-lipped Sea Krait",
      description: "Highly venomous sea snake with potent neurotoxic venom",
      image: "https://images.unsplash.com/photo-1515555230216-82228b88ea98?auto=format&fit=crop&q=80&w=1000"
    },
    {
      name: "Cone Snail",
      description: "Contains powerful venom that can be fatal to humans",
      image: "https://images.unsplash.com/photo-1620160165828-16d11c141016?auto=format&fit=crop&q=80&w=1000"
    }
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === heroImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000); // Changed to 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4">
            <div className="flex items-center space-x-2">
              <AlertTriangle className="h-6 w-6" />
              <span className="text-xl font-bold">OceanMedic</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="hover:text-blue-200">Home</a>
              <a href="#" className="hover:text-blue-200">About</a>
              <a href="#" className="hover:text-blue-200">Venomous Animals</a>
              <a href="#" className="hover:text-blue-200">First Aid</a>
              <a href="#" className="hover:text-blue-200">Emergency</a>
              <a href="#" className="hover:text-blue-200">Hospitals</a>
              <a href="#" className="hover:text-blue-200">Map</a>
              <a href="#" className="hover:text-blue-200">Contact</a>
            </nav>
            <button className="md:hidden">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div 
        className="relative h-[600px] bg-cover bg-center transition-all duration-1000"
        style={{
          backgroundImage: `url("${heroImages[currentImageIndex]}")`,
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl text-white">
              <h1 className="text-5xl font-bold mb-4">Stay Safe on Sri Lanka's Coastlines</h1>
              <p className="text-xl mb-8">Identify venomous marine animals, learn first aid, and find emergency help.</p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition duration-300">
                Explore Now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <QuickLinkCard
              icon={<Search className="h-8 w-8" />}
              title="Identify Dangerous Species"
              description="Learn to identify and avoid dangerous marine animals"
              image="https://images.unsplash.com/photo-1544552866-d3ed42536cfd?auto=format&fit=crop&q=80&w=800"
            />
            <QuickLinkCard
              icon={<Heart className="h-8 w-8" />}
              title="Emergency First Aid"
              description="Quick first aid guides for marine animal injuries"
              image="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=800"
            />
            <QuickLinkCard
              icon={<MapPin className="h-8 w-8" />}
              title="Find the Nearest Hospital"
              description="Locate emergency medical facilities near you"
              image="https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&q=80&w=800"
            />
          </div>
        </div>
      </div>

      {/* Dangerous Animals Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Dangerous Marine Animals</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {dangerousAnimals.map((animal, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition duration-300">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={animal.image} 
                    alt={animal.name}
                    className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{animal.name}</h3>
                  <p className="text-gray-600 mb-4">{animal.description}</p>
                  <button className="text-blue-600 font-semibold flex items-center space-x-1 hover:text-blue-700">
                    <span>Learn more</span>
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Safety Information</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="relative rounded-lg overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?auto=format&fit=crop&q=80&w=1000" 
                alt="Marine Safety" 
                className="w-full h-[400px] object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Marine Life Safety Guide</h3>
                  <p className="mb-4">Essential tips for safe interaction with marine life</p>
                  <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-blue-100 transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1533713692156-f70938dc0d54?auto=format&fit=crop&q=80&w=1000" 
                alt="Emergency Response" 
                className="w-full h-[400px] object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Emergency Response Protocol</h3>
                  <p className="mb-4">What to do in case of marine animal injuries</p>
                  <button className="bg-white text-black px-6 py-2 rounded-full hover:bg-blue-100 transition duration-300">
                    View Guide
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Emergency Contact Banner */}
      <div className="bg-red-600 text-white py-4">
        <div className="container mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Phone className="h-5 w-5" />
            <span className="font-semibold">Emergency: 1990 (Ambulance)</span>
          </div>
          <button className="flex items-center space-x-1 hover:text-red-200">
            <span>View all emergency contacts</span>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About</h3>
              <p className="text-gray-400">Helping you stay safe on Sri Lanka's beautiful coastlines through education and emergency guidance.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Venomous Animals</a></li>
                <li><a href="#" className="hover:text-white">First Aid Guide</a></li>
                <li><a href="#" className="hover:text-white">Emergency Contacts</a></li>
                <li><a href="#" className="hover:text-white">Hospital Locations</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Emergency</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Ambulance: 1990</li>
                <li>Coast Guard: 011 267 8594</li>
                <li>Tourism Police: 011 242 1052</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-gray-400">Have questions or suggestions? Reach out to us.</p>
              <button className="mt-4 bg-white text-gray-900 px-4 py-2 rounded hover:bg-gray-100">
                Contact
              </button>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 OceanMedic. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function QuickLinkCard({ icon, title, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <div className="text-blue-600 mb-4">{icon}</div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <button className="text-blue-600 font-semibold flex items-center space-x-1 hover:text-blue-700">
          <span>Learn more</span>
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}

export default App;