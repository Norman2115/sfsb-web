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
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
      <main className="flex flex-col items-center justify-center w-full flex-1 px-4 sm:px-20 text-center">
        <h1 className="text-4xl sm:text-6xl font-bold text-black">
          Summit Features
        </h1>
        <p className="mt-3 text-lg sm:text-2xl text-black">
          MoCap for the rest of us.
        </p>
        <p className="mt-3 text-base sm:text-lg text-gray-600">
          Innovating for the future of virtual production, life science,
          entertainment, and engineering.
        </p>
        <div className="flex flex-col mt-6 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Link href="https://summitfeatures.com/" passHref legacyBehavior>
            <a className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700">
              Learn more
            </a>
          </Link>
          <button
            onClick={scrollToSolutions}
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded hover:bg-blue-100"
          >
            Explore Solutions
          </button>
        </div>
        <div className="flex mt-10 space-x-4"></div>
      </main>
    </div>
  );
}

export default Hero;
