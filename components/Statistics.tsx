// components/Statistics.tsx
import React from 'react';

const statisticsData = [
  { value: '20+', label: 'Laboratories' },
  { value: '30+', label: 'Instuitions' },
  { value: '750+', label: 'Customers' },
  { value: '5500+', label: 'Users' },
];

const Statistics = () => {
    return (
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold text-black mb-4">Worked with:</h2>
        <div className="flex justify-around items-center bg-blue-100 rounded-3xl p-6 shadow-lg w-full max-w-4xl">
          {statisticsData.map((stat, index) => (
            <div key={index} className="text-center mx-4">
              <div className="text-4xl font-bold text-black">{stat.value}</div>
              <div className="text-md text-black">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
export default Statistics;
