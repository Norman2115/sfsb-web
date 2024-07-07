import Solution from "@/components/Solution";
import TopBar from "@/components/TopBar";
import React from "react";

function page() {
  return (
    <div>
      <TopBar></TopBar>
      <Solution
        background="/images/entertainment_background.jpg"
        background2="/images/entertainment_background-modified.png"
        pretitle="Summit Features"
        title="Entertainment"
        subtitle="Bringing Games to Life."
      ></Solution>
    </div>
  );
}

export default page;
