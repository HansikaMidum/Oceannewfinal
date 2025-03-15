import React from "react";
import QuickLinkCard from "./components/QuickLinkCard";
import { Search, MapPin, AlertCircle } from "lucide-react"; // Example icons from lucide-react

function Home() {
  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-6">Quick Links</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* First Quick Link Card */}
        <QuickLinkCard
          icon={<Search className="h-8 w-8 text-blue-500" />}
          title="Identify Dangerous Species"
          description="Learn to identify and avoid dangerous marine animals."
          image="https://example.com/species.jpg"
        />

        {/* Second Quick Link Card */}
        <QuickLinkCard
          icon={<MapPin className="h-8 w-8 text-green-500" />}
          title="Find Nearby Hospitals"
          description="Locate the nearest medical facilities for emergencies."
          image="https://example.com/hospital.jpg"
        />

        {/* Third Quick Link Card */}
        <QuickLinkCard
          icon={<AlertCircle className="h-8 w-8 text-red-500" />}
          title="Emergency Contacts"
          description="Get quick access to emergency helplines."
          image="https://example.com/emergency.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
