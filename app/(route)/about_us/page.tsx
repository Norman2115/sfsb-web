// pages/index.tsx or pages/page.tsx
import AboutUs from '@/components/AboutUs';
import Statistics from '@/components/Statistics';
import JourneyStory from '@/components/JourneyStory';
import MissionVision from '@/components/MissionVision';
import Footer from '@/components/Footer';
import React from 'react';

function page() {
  return (
    <div className="bg-white min-h-screen">
    <AboutUs />
    <div className="mt-8 flex justify-center">
        <Statistics />
      </div>
      <div className="mt-8">
        <JourneyStory />
      </div>
      <div className="mt-8 flex justify-center">
        <MissionVision />
      </div>
      <div className="mt-10 flex justify-center">
        <Footer />
      </div>
    </div>
  );
}

export default page;
