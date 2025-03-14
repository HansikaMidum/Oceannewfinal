import React, { useState, useEffect } from 'react';

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
              <span className="text-white">☰</span>
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
              icon="🔍"
              title="Identify Dangerous Species"
              description="Learn to identify and avoid dangerous marine animals"
              image="https://images.unsplash.com/photo-1544552866-d3ed42536cfd?auto=format&fit=crop&q=80&w=800"
            />
            <QuickLinkCard
              icon="❤️"
              title="Emergency First Aid"
              description="Quick first aid guides for marine animal injuries"
              image="https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?auto=format&fit=crop&q=80&w=800"
            />
            <QuickLinkCard
              icon="📍"
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
                  <p className="mb-4">Learn how to stay safe when exploring marine environments in Sri Lanka.</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-lg font-semibold">
                    Read More
                  </button>
                </div>
              </div>
            </div>
            <div className="relative rounded-lg overflow-hidden group">
              <img 
                src="https://images.unsplash.com/photo-1573897572872-4e39b76edfd0?auto=format&fit=crop&q=80&w=1000"
                alt="Emergency Help"
                className="w-full h-[400px] object-cover transition duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent flex items-end p-6">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">Emergency Help Nearby</h3>
                  <p className="mb-4">Find immediate assistance and emergency services in Sri Lanka.</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg text-lg font-semibold">
                    Get Help
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex justify-between">
            <div>
              <p>&copy; 2025 OceanMedic. All rights reserved.</p>
            </div>
            <div>
              <p className="space-x-4">
                <a href="#" className="hover:text-blue-200">Privacy Policy</a>
                <a href="#" className="hover:text-blue-200">Terms of Service</a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function QuickLinkCard({ icon, title, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition duration-300 hover:shadow-xl">
      <div className="relative">
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute top-0 left-0 p-6 text-white bg-black bg-opacity-50 w-full h-full flex flex-col justify-end">
          <h3 className="text-xl font-bold">{icon} {title}</h3>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
