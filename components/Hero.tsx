"use client";
import Link from "next/link";
import React from "react";

function Hero() {
  const scrollToSolutions = () => {
    const solutionsSection = document.getElementById("mocap-solutions");
    if (solutionsSection) {
      solutionsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative min-h-screen flex" style={{ backgroundImage: `url(/images/mo_cap.jpg)`, backgroundSize: 'cover' }}>
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-70">
        <div className="flex flex-col items-center justify-center space-y-5">
          <h1 className="text-6xl text-center font-black bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] text-transparent bg-clip-text">Summit Features</h1>
          <h2 className="text-3xl text-center text-[#E5E5E5] font-medium">Motion Capture Made Simple</h2>
          <h3 className="text-xl text-[#A3A3A3]">Innovating for the future of virtual production, life science, entertainment, and engineering.</h3>
          <div className="flex flex-row items-center justify-center space-x-5 pt-3">
            <button className="px-10 py-[14px] text-white bg-[#FF6600] rounded-lg hover:bg-[#CC5200]">Learn More</button>
            <button onClick={scrollToSolutions} className="px-5 py-3 text-[#FF6600] border-2 border-[#FF6600] rounded-lg hover:bg-[#FF6600] hover:text-white">Explore Solutions</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
