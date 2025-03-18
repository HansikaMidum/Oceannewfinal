import React from 'react';

const Template = ({ title, description }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6 mt-8">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">{title}</h2>
      <p className="text-lg text-gray-700">{description}</p>
    </div>
  );
};

export default Template;
