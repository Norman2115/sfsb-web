import React from "react";

interface Params {
  background: string;
  background2: string;
  pretitle: string;
  title: string;
  subtitle: string;
}

const Solution = ({
  background,
  background2,
  pretitle,
  title,
  subtitle,
}: Params) => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl sm:text-4xl font-bold">{pretitle}</h1>
        <h2
          className="text-5xl sm:text-8xl font-extrabold mt-2"
          style={{
            backgroundImage: `url(${background2})`,
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            color: "transparent",
            lineHeight: "1.1",
            paddingBottom: "0.08em",
          }}
        >
          {title}
        </h2>
        <p className="text-lg sm:text-2xl mt-4 mx-4 max-w-2xl">{subtitle}</p>
      </div>
    </div>
  );
};

export default Solution;
