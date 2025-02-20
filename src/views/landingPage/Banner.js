import React from "react";
import scollageLogo from "../../assets/svg/scollageLogo.svg";
import homeBackground from "../../assets/img/homeBack.png";
import Gpay from "../../assets/img/Gpay.png";
import { LuMenu } from "react-icons/lu";
import scollage from "../../assets/video/scollage.webm"

function Banner() {
  return (
    <div className="relative">
      {/* Header Section */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <button className="text-[#707070] flex items-center md:space-x-3 bg-white px-6 py-3 rounded-full">
            <LuMenu />
            <p className="hidden md:block">Menu</p>
          </button>
          <img src={scollageLogo} alt="Scolage Logo" className="mx-auto" />
        </div>
      </div>

      {/* Banner Section */}
      <div
        className="flex flex-col items-center justify-center h-full bg-cover bg-center text-center pt-48"
        style={{ backgroundImage: `url(${homeBackground})` }}
      >
        <div className="container mx-auto flex justify-between items-center my-20">
          {/* Text Section */}
          <div className="text-start">
            <div className="text-4xl md:text-[6.3rem] text-[#60269e] font-bold mb-4 flex flex-col">
              <span>Welcome</span> <span>to Scolage Your</span> <span>Junior College Guide</span>
            </div>
            <i className="text-lg md:text-[2rem] mb-6 text-[#60269e] font-normal">
              Digitize your admission process & navigate through relevant college info <i className="font-semibold">24/7</i>
            </i>
            <div className="flex items-center">
              <img src={Gpay} alt="Scolage Logo" className="w-72 h-28" />
              <div className="text-[1.8rem] flex flex-col leading-8"><span>Download</span><span>Scolage app for free</span></div>
            </div>
          </div>

          <div>
            <video
              src={scollage}
              className="w-full h-[22rem] max-w-sm rounded-full"
              controls
              autoPlay
              loop
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;