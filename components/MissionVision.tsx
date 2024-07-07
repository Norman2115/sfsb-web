// components/MissionVision.tsx
import React from 'react';

const sectionsData = [
  {
    title: 'Mission:',
    text: "We aim to develop and empower local expertise in collaboration with higher education institutions, serving as a catalyst to enhance Malaysia's global achievements in sports, medicine, industry, education, and more.",
    image: '/images/malaysia.jpg',
  },
  {
    title: 'Vision:',
    text: "To be a sustainable leader in scientific fields related to human movement and performance studies to contribute to nation’s growth and building towards year 2030",
    image: '/images/vision.jpg',
  },
  // Add more sections as needed
];

const MissionVision = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-4xl bg-blue-100 rounded-3xl p-6 shadow-lg">
      {sectionsData.map((section, index) => (
        <div key={index} className={`flex flex-col md:flex-row items-center mb-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
          <div className="w-full md:w-1/2 p-4">
            <img src={section.image} alt={section.title} className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-xl font-bold text-gray-900 mb-2">{section.title}</h3>
            <p className="text-gray-700">{section.text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MissionVision;
