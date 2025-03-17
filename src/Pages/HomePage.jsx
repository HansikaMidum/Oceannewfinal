import React, { useEffect, useState } from "react";
import Template from "../components/Template"; // Import Template component
import { getHomeData } from "../common/services/home_services/home_service"; // Import service

const HomePage = () => {
  const [homeData, setHomeData] = useState({ title: "", description: "" });

  useEffect(() => {
    const data = getHomeData();
    setHomeData(data);
  }, []);

  return (
    <div>
      <h1>{homeData.title}</h1>
      <p>{homeData.description}</p>
      <Template /> {/* Call the Template component */}
    </div>
  );
};

export default HomePage;
