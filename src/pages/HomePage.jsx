import React from "react";
import SectionFirst from "../components/Home/SectionFirst";
import SwipeableTextMobileStepper from "../components/Home/SectionSecond";

const HomePage = () => {
  return (
    <div style={{ backgroundColor: "#000" }}>
      <SectionFirst />
      <SwipeableTextMobileStepper />
    </div>
  );
};

export default HomePage;
