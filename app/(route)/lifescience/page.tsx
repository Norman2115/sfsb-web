import Solution from "@/components/Solution";
import TopBar from "@/components/TopBar";
import React from "react";

function page() {
  return (
    <div>
      <TopBar></TopBar>
      <Solution
        background="/images/sport_science_background.png"
        background2="/images/sport_science_background-modified.png"
        pretitle="Summit Features"
        title="Life Science"
        subtitle="Advancing research by precisely analyzing movement in organisms and humans."
      ></Solution>
    </div>
  );
}

export default page;
