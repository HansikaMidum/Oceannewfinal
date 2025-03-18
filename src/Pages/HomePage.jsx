import React, { useEffect, useState } from "react";
import Template from "../components/Template"; // Import Template component
import { getHomeData } from "../common/services/home_services/home_service"; // Import service

const HomePage = () => {
  const [homeData, setHomeData] = useState({ title: "", description: "" });

  useEffect(() => {
    // Fetch home data and update the state
    const data = getHomeData();
    setHomeData(data);
  }, []);

  return ( 
    <div>
      <p>Welcome to the Ocean Medic Website.</p>

      <div className="bg-gray-100 min-h-screen py-8">
        <div className="relative h-[600px] bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url("https://images.unsplash.com/photo-1505118380757-91f5f5632de0?auto=format&fit=crop&q=80&w=2000")` }}>
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

        <div className="container mx-auto px-4">
          <Template title={homeData.title} description={homeData.description} /> {/* Pass the dynamic data */}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
