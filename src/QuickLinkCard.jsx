import React from "react";

function QuickLinkCard({ icon, title, description, image }) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-xl transition duration-300">
      <div className="h-48 bg-gray-200 flex justify-center items-center">
        {/* Display the icon passed as prop */}
        {icon && <div className="h-12 w-12">{icon}</div>}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        {/* Optional image display, if an image is passed */}
        {image && <img src={image} alt={title} className="w-full h-32 object-cover rounded-lg" />}
      </div>
    </div>
  );
}

export default QuickLinkCard;
