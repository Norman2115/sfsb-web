import React from "react";
import Image from "next/image";
import Link from "next/link";

function IntroSection() {
  return (
    <section className="relative bg-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <div className="w-full md:w-1/2 h-64 md:h-auto md:pr-4 flex-shrink-0">
          <div className="relative w-full h-full">
            <Image
              src="/images/mocap_1.png"
              alt="Motion Capture"
              layout="responsive"
              width={640}
              height={480}
              objectFit="cover"
              className="h-full"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left md:ml-10 flex-shrink-0">
          <h2 className="text-gray-600 text-3xl font-bold mb-4">
            What is Motion Capture?
          </h2>
          <p className="text-gray-600 mb-6">
            It is a technology used to record the movement of objects or people
            to create lifelike animations.
          </p>
          <Link href="/mocap" passHref legacyBehavior>
            <a className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">
              Let's Simulate
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default IntroSection;
