import Image from "next/image";
import Hero from "../../components/Hero";
import TopBar from "@/components/TopBar";
import LogoCarousel from "@/components/LogoCarousel";
import "../globals.css";
import InfoSection from "@/components/InfoSection";
import Card from "@/components/Card";
import IntroSection from "@/components/IntroSection";
import Link from "next/link";

export default function Home() {
  const cardsData = [
    {
      title: "Virtual Production",
      description: "VR Scouting, Full Body Capture & In Camera VFX.",
      videoSrc: "/videos/virtual_production.mp4",
      goto: "/virtualproduction",
    },
    {
      title: "Life Science",
      description: "Gait Analysis, Neuroscience & Motor Control.",
      videoSrc: "/videos/life_science.mp4",
      goto: "/lifescience",
    },
    {
      title: "Entertainment",
      description: "Film, Television & Games.",
      videoSrc: "/videos/entertainment.mp4",
      goto: "/entertainment",
    },
    {
      title: "Engineering",
      description: "Robotics & UAVS, Aerospace.",
      videoSrc: "/videos/engineering.mp4",
      goto: "/engineering",
    },
  ];
  return (
    <div>
      <TopBar></TopBar>
      <Hero></Hero>
      <IntroSection></IntroSection>
      <InfoSection></InfoSection>
      <section
        id="mocap-solutions"
        className="bg-white items-center justify-center pt-10"
      >
        <h2 className="text-gray-600 text-3xl font-bold mb-4 text-center">
          Solutions
        </h2>
        <div className="pb-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6 bg-white">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              description={card.description}
              videoSrc={card.videoSrc}
              goto={card.goto}
            ></Card>
          ))}
        </div>
      </section>
      <LogoCarousel></LogoCarousel>
    </div>
  );
}
