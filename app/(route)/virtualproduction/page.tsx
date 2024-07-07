import Solution from "@/components/Solution";
import TopBar from "@/components/TopBar";
import React from "react";

function page() {
  return (
    <div>
      <TopBar></TopBar>
      <Solution
        background="/images/virtual_production_background.jpg"
        background2="/images/virtual_production_background-modified.jpg"
        pretitle="Summit Features"
        title="Virtual Production"
        subtitle="Bringing real-world movement into digital realms for lifelike and immersive storytelling"
      ></Solution>
    </div>
  );
}

export default page;
