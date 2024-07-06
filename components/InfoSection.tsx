import React from "react";
import Image from "next/image";

function InfoSection() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-8">
          <h2 className="text-gray-600 text-3xl font-bold mb-4">
            How does Motion Capture Work?
          </h2>
          <p className="text-gray-600 mb-6">
            Motion capture involves attaching small sensors or markers to key
            points on a subject, which are then tracked by multiple cameras. The
            movement data collected by these cameras is processed by specialized
            software to create realistic animations or simulations.
          </p>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <div className="relative w-full h-full">
            <Image
              src="/images/mocap_2.png"
              alt="Motion Capture Process"
              layout="responsive"
              width={640}
              height={480}
              objectFit="cover"
              className="h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;