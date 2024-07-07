import React from "react";
import Image from "next/image";

const logos = [
  "/images/ANIMAS.png",
  "/images/ASWANA.png",
  "/images/Dyson.png",
  "/images/Mara.png",
  "/images/MJIT.png",
  "/images/Perkeso.png",
  "/images/UiTM.png",
  "/images/UM.png",
  "/images/UMP.png",
  "/images/UniKL.png",
  "/images/UNIMAP.png",
  "/images/UTHM.png",
  "/images/UTM.png",
];

function LogoCarousel() {
  return (
    <section className="logo-carousel-section py-8 bg-gray-100">
      <div className="logo-carousel-wrapper overflow-hidden">
        <div className="logo-carousel flex animate-marquee">
          {logos.concat(logos).map((logo, index) => (
            <div key={index} className="logo-item flex-shrink-0 mx-4">
              <Image
                src={logo}
                alt={`Logo ${index + 1}`}
                width={90}
                height={90}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LogoCarousel;
