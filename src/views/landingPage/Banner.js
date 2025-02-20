// import React from "react";
// import scollageLogo from "../../assets/svg/scollageLogo.svg";
// import homeBackground from "../../assets/img/homeBack.png";
// import Gpay from "../../assets/img/Gpay.png";
// import { LuMenu } from "react-icons/lu";
// import scollage from "../../assets/video/scollage.webm"

// function Banner() {
//   return (

//     <header class="fixed top-0 left-0 right-0 z-50">

//       <div class="container relative ">
//         <div class="h-16 sm:h-[70px] md:h-[74px] mx-  relative flex items-center justify-between">
//           <div
//             class="w-full max-w-[250px] max-sm:max-w-[340px] md:max-w-[400px] 2xl:max-w-[400px] absolute top-0 inset-x-0 mx-auto ">
//             <a class="" href="/">
//               <img alt="Scolage" loading="lazy" width="666" height="123" decoding="async" data-nimg="1"
//                 src={scollageLogo} />
//             </a>
//           </div>
//           <button class="flex justyfy-between item-center gap-4 py-2 px-4 2xl:py-3 2xl:px-6 bg-white rounded-full">
//             <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 32 32"
//               color="#707070" height="1em" width="1em" xmlns="http:www.w3.org/2000/svg">
//               <path
//                 d="M 4 7 L 4 9 L 28 9 L 28 7 Z M 4 15 L 4 17 L 28 17 L 28 15 Z M 4 23 L 4 25 L 28 25 L 28 23 Z">
//               </path>
//             </svg>
//             <span class="text-secondary hidden sm:block ">Menu</span>
//           </button>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Banner;

import React, { useState } from "react";
import scollageLogo from "../../assets/svg/scollageLogo.svg";
import homeBackground from "../../assets/img/homeBack.png";
import { LuMenu } from "react-icons/lu";
import Gpay from "../../assets/img/Gpay.png"
import scollage from "../../assets/video/scollage.webm"
import { IoMdClose } from "react-icons/io";
// import menuScollage from "../../assets/img/menuScollage.png"

function Banner() {
  const [menu, setMenu] = useState(false)

  return (
    <header
      className="relative w-full"
      style={{ backgroundImage: `url(${homeBackground})` }}
    >
      <div className="md:p-20 p-16">

        <div className=" fixed top-0 left-0 right-0 z-50 bg-cover bg-center w-full">
          <div className="h-16 sm:h-[70px] md:h-[74px] xl:ml-10.5 mx-auto ml-10 relative flex items-center justify-between">
            {/* Logo */}
            <div className="w-full max-w-[250px] max-sm:max-w-[340px] md:max-w-[400px] 2xl:max-w-[400px] absolute top-0 inset-x-0 mx-auto">
              <a href="/">
                <img
                  alt="Scollage"
                  loading="lazy"
                  width="666"
                  height="123"
                  decoding="async"
                  src={scollageLogo}
                />
              </a>
            </div>

            {/* Menu Button */}
            <button className="flex items-center gap-4 py-2 px-4 bg-[#FFFFFF] rounded-full hover:cursor-pointer" onClick={() => setMenu((prev) => !prev)}>
              <LuMenu size={16} color="#707070" className="opacity-65" />
              <span className="text-[#707070]  hidden sm:block">Menu</span>
            </button>
          </div>
        </div>
      </div>
      {menu && (
        <div class="fixed h-screen w-screen top-0 left-0 right-0 z-50 bg-[#E1CCAB] py-4 2xl:py-10 menu menu--close text-[#707070]">
          <div class="w-screen">
            <div class="container relative ">
              <button class="flex items-center gap-4 md:ml-6 lg:ml-14 xl:ml-20 py-2 px-4 2xl:py-3 2xl:px-6 bg-white rounded-full hover:cursor-pointer" onClick={() => setMenu(false)}>
                <IoMdClose />
                <span class="text-secondary hidden sm:block">Close</span>
              </button>
              <div className="">
                <div class="flex flex-wrap pt-8 2xl:pt-[72px] pb-9">
                  <div
                    class="w-full lg:w-5/12 2xl:w-1/2 space-y-3 lg:space-y-5 2xl:space-y-6 pl-6 lg:pl-12 2xl:pl-20">
                    <div class="">
                      <a class="text-[45px] lg:text-6xl 2xl:text-[80px] font-bold text-secondary leading-normal"
                        href="/">Home</a>
                    </div>
                    <div class="">
                      <a class="text-[45px] lg:text-6xl 2xl:text-[80px] font-bold text-secondary leading-normal"
                        href="/blog/">Blog</a>
                    </div>
                    <div class="">
                      <a class="text-[45px] lg:text-6xl 2xl:text-[80px] font-bold text-secondary leading-normal"
                        href="/about-us/">About Us</a>
                    </div>
                  </div>
                  <div class="w-full lg:w-7/12 2xl:w-1/2">
                    {/* <img alt="" loading="lazy" decoding="async" data-nimg="1"
                      class="w-full h-full object-cover object-center"
                      src={menuScollage} /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div
        class="flex flex-col items-center justify-center h-full bg-cover bg-center text-center pb-14">
        <div class=" xl:mx-8 px-4">
          <div class="flex flex-wrap items-center">
            <div class="w-full md:w-1/2 lg:w-7/12 2xl:w-8/12">
              <div class="pb-7 2xl:p-0">
                <h1
                  class="text-[#60269e] text-3xl sm:text-4xl lg:text-5xl xl:text-7xl text-center  md:text-left font-bold leading-tight pb-6">
                  Welcome <br />
                  to Scolage Your<br />Junior College Guide
                </h1>
                <p
                  class="text-[#60269e] text-base sm:text-lg lg:text-2xl xl:text-3xl text-center md:text-left  text-ita italic">
                  Digitize your admission process &amp;navigate through relevant college info <span
                    class="font-bold">24/7</span>
                </p>
              </div>
            </div>
            <div
              class="w-full max-w-[400px] aspect-square 2xl:max-w-auto mx-auto md:w-1/2 lg:w-5/12 rounded-full overflow-hidden  flex items-end">
              <video src={scollage}
                controls
                autoPlay
                loop></video>
            </div>
            <div class="w-full pt-6 2xl:pt-0">
              <div
                class="max-w-[245px] mx-auto md:mx-0 md:max-w-full flex md:flex-row flex-col justify-center md:justify-start items-center">
                <a href="/">
                  <img alt="download app" loading="lazy" width="356" height="138" decoding="async"
                    data-nimg="1" class="max-w-[245px] lg:max-w-[300px] "
                    src={Gpay} />
                </a>
                <p class="text-[#000000] text-sm md:text-xl 2xl:text-[28px] text-start font-normal leading-normal">
                  Download <br class="hidden md:block" />Scolage app for free
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Banner;
