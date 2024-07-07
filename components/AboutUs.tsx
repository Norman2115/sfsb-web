// components/AboutUs.tsx
import React from 'react';

const AboutUs = () => {
return (
    <div className="flex flex-col items-center justify-center bg-gray-50 py-10">
        <div className="text-center mb-4">
            <p className="font-bold text-blue-500 text">About Us</p> 
            <h1 className="text-3xl sm:text-5xl font-extrabold text-gray-900 mt-3 mb-3">
                Bringing Your Vision to Life with Expertise and Dedication
            </h1>
        </div>
        <div className="w-full max-w-4xl">
            <img
                src="/images/about_us.jpg"
                alt="Team of professionals"
                className="w-full rounded-3xl shadow-lg"
            />
        </div>
    </div>
);
};

export default AboutUs;
