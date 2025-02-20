import React from "react";
import Banner from "./Banner";
import FindPlace from "./FindPlace";
import FindCollage from "./FindCollage";
import Slider from "./Slider"
import Admission from "./Admission";

function LandingPage() {
  return (
    <div>
      <Banner />
      <FindPlace />
      <FindCollage />
      <Admission />
      <Slider />
    </div>
  );
}

export default LandingPage;
