"use client";
import React, { useRef } from "react";
import Link from "next/link";

interface CardProps {
  title: string;
  description: string;
  videoSrc: string;
  goto: string; // URL to navigate to
}

const Card: React.FC<CardProps> = ({ title, description, videoSrc, goto }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <Link href={goto} passHref legacyBehavior>
      <a className="block border border-gray-200 rounded-lg overflow-hidden text-center shadow-lg hover:shadow-xl">
        <div
          className="relative w-full h-52 bg-black"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <video
            className="w-full h-full object-cover"
            src={videoSrc}
            title={title}
            ref={videoRef}
            loop
            muted
          ></video>
        </div>
        <div className="p-4">
          <h3 className="text-black text-lg font-semibold">{title}</h3>
          <p className="text-gray-700 mt-2">{description}</p>
        </div>
      </a>
    </Link>
  );
};

export default Card;
