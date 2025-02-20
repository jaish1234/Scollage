import React from "react";
import Banner from "./Banner";
import FindPlace from "./FindPlace";
import FindCollage from "./FindCollage";
import Slider from "./Slider"

function LandingPage() {
  return (
    <div>
      <Banner />
      <FindPlace />
      <FindCollage />
      <Slider />
    </div>
  );
}

export default LandingPage;
