import Solution from "@/components/Solution";
import TopBar from "@/components/TopBar";
import React from "react";

function page() {
  return (
    <div>
      <TopBar></TopBar>
      <Solution
        background="/images/engineering_background.jpg"
        background2="/images/engineering_background.jpg"
        pretitle="Summit Features"
        title="Engineering"
        subtitle="Precision in motion for innovation."
      ></Solution>
    </div>
  );
}

export default page;
