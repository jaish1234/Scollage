import React from "react";
import scollage from "../../assets/video/scollage.webm"
import Dots from "../../assets/svg/dots.e99c2c8a.svg"

function FindPlace() {
    return (
        // <div className="bg-gradient-to-b from-yellow-200 to-pink-300 h-screen flex justify-center">
        //     <div className="flex flex-col justify-center p-4 mt-40">
        //         <div className="text-4xl md:text-[5rem] text-[#60269e] font-bold mb-5 flex flex-col">
        //             <span>Find all</span> <span>junior college insights</span> <span>at one place.</span>
        //         </div>
        //         <p className="text-4xl text-[#707070] mb-28">
        //             Your No.1 Junior College Guide in Hyderabad
        //         </p>
        //         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-[#707070]">
        //             <div className="bg-white w-80 h-44 py-10 px-4 rounded-xl shadow-lg text-center space-y-6">
        //                 <h2 className="text-3xl font-semibold">College Listing</h2>
        //                 <p className="text-xl">Find all junior colleges at one place</p>
        //             </div>
        //             <div className="bg-white w-80 h-44 py-10 px-4 rounded-xl shadow-lg text-center space-y-6">
        //                 <h2 className="text-3xl font-semibold text-[#707070]">Explore All Data</h2>
        //                 <p className="text-xl">Search for a college and compare</p>
        //             </div>
        //             <div className="bg-white w-80 h-44 py-10 px-4 rounded-xl shadow-lg text-center space-y-6">
        //                 <h2 className="text-3xl font-semibold text-[#707070]">Online Admissions</h2>
        //                 <p className="text-xl">Access admissions faster in a better way</p>
        //             </div>
        //             <video
        //                 src={scollage}
        //                 className="w-full h-80"
        //                 controls
        //                 autoPlay
        //                 loop
        //             />
        //         </div>
        //     </div>
        // </div>
        <div class="bg-gradient-to-b from-yellow-200 to-pink-300 h-full flex justify-center">
            <div class="xl:mx-8 px-4">
                <div class="pt-8 max-sm:pt-14 flex flex-wrap items-end">
                    <div class="w-full lg:w-7/12 2xl:w-8/12">
                        <div>
                            <h2
                                class="text-3xl sm:text-5xl 2xl:text-[80px] text-[#60269e] text-center lg:text-left font-bold leading-normal pb-1 sm:pb-5">
                                Find all <br />
                                junior college insights<br />at one place.
                            </h2>
                            <p
                                class="text-[#707070] text-[22px] sm:text-3xl 2xl:text-[40px] text-center lg:text-left leading-normal">
                                Your No.1 Junior College Guide in Hyderabad</p>
                        </div>
                        <div class="block lg:hidden pt-11 max-w-[400px] mx-auto">
                            <video src={scollage} controls autoPlay loop></video>
                        </div>
                        <div
                            class="pt-0 lg:pt-11 2xl:pt-[135px] pb-8 2xl:pb-[216px] flex flex-col flex-wrap 2xl:flex-nowrap lg:flex-row items-center lg:items-start 2xl:items-stretch justify-center lg:justify-start gap-[14px]  2xl:gap-[55px]">
                            <div
                                class="relative bg-white px-10 py-6 2xl:py-10 2xl:px-5 rounded-3xl w-full max-w-[275px] sm:max-w-[335px]">
                                <h4
                                    class="text-[#707070] text-xl sm:text-[29px] leading-normal text-center pb-2 2xl:pb-4 font-bold">
                                    College Listing</h4>
                                <p class="text-[#707070] text-[15px] sm:text-[19px] leading-normal text-center">Find all
                                    junior colleges at one place</p>
                                <div class="absolute bottom-3 left-3 w-4 h-[18px] 2xl:w-6 2xl:h-7">
                                    <img alt="" loading="lazy" width="24" height="27" decoding="async" data-nimg="1"
                                        src={Dots} />
                                </div>
                            </div>
                            <div
                                class="relative bg-white px-10 py-6 2xl:py-10 2xl:px-5 rounded-3xl w-full max-w-[275px] sm:max-w-[335px]">
                                <h4
                                    class="text-[#707070] text-xl sm:text-[29px] leading-normal text-center pb-2 2xl:pb-4 font-bold">
                                    Explore All Data</h4>
                                <p class="text-[#707070] text-[15px] sm:text-[19px] leading-normal text-center">Search
                                    for a college and compare</p>
                                <div class="absolute bottom-3 left-3 w-4 h-[18px] 2xl:w-6 2xl:h-7">
                                    <img alt="" loading="lazy" width="24" height="27" decoding="async" data-nimg="1"
                                        src={Dots} />
                                </div>
                            </div>
                            <div
                                class="relative bg-white px-10 py-6 2xl:py-10 2xl:px-5 rounded-3xl w-full max-w-[275px] sm:max-w-[335px]">
                                <h4
                                    class="text-[#707070] text-xl sm:text-[29px] leading-normal text-center pb-2 2xl:pb-4 font-bold">
                                    Online Admissions</h4>
                                <p class="text-[#707070] text-[15px] sm:text-[19px] leading-normal text-center">Access
                                    admissions Faster in a better way</p>
                                <div class="absolute bottom-3 left-3 w-4 h-[18px] 2xl:w-6 2xl:h-7">
                                    <img alt="" loading="lazy" width="24" height="27" decoding="async" data-nimg="1"
                                        src={Dots} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-5/12 2xl:w-4/12">
                        <div class="hidden lg:block">
                            <video src={scollage} controls autoPlay loop></video>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FindPlace;
