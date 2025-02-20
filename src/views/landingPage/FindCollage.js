import React from "react";
import scollage from "../../assets/video/scollage.webm"
import Rocket from "../../assets/svg/rocket.svg"

function FindCollage() {
    return (
        // <div className="flex justify-center space-x-10 pt-[7.3rem] bg-gradient-to-b from-[#e7ade9] to-[#f3d5d4] h-[63rem] text-[#707070]">
        //     <div>
        //         <div className="text-[5rem] leading-tight font-bold flex flex-col mb-9">
        //             <span>Find The Right</span> <span>Junior College</span>
        //         </div>
        //         <div className="text-4xl w-[38rem] mb-8 text-start">
        //             <i>We make it simpler for you to locate </i>
        //             <i>the top junior colleges</i>
        //         </div>
        //         <video
        //             src={scollage}
        //             className="w-[35rem] h-[28rem]"
        //             controls
        //             autoPlay
        //             loop
        //         />
        //     </div>
        //     <div>
        //         <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
        //             <h2 className="text-xl font-semibold text-purple-800">Search 10x Faster</h2>
        //             <p className="text-gray-600">Quick searching and applying for junior colleges</p>
        //         </div>
        //         <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
        //             <h2 className="text-xl font-semibold text-purple-800">Experience 12x Cheaper</h2>
        //             <p className="text-gray-600">More affordable than going to colleges in person.</p>
        //         </div>
        //         <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
        //             <h2 className="text-xl font-semibold text-purple-800">Know your campus</h2>
        //             <p className="text-gray-600">Browse through important infrastructure and safety protocol details.</p>
        //         </div>
        //     </div>
        // </div>
        <div class="bg-gradient-to-br from-[#E7ADE9] to-[#F3D5D4] pt-20 overflow-hidden">
            <div class="px-4">
                <div class="flex flex-wrap items-center">
                    <div class="w-full lg:w-1/2">
                        <div class="2xl:pl-24 2xl:pb-8 2xl:pr-11 relative z-10">
                            <h2
                                class="text-3xl lg:text-4xl lg:leading-tight text-center lg:text-left font-bold text-[#707070] pb-9 lg:pb-4 2xl:pb-9 leading-normal">
                                Find The Right Junior College</h2>
                            <p
                                class="text-xl lg:text-2xl lg:leading-tight 2xl:text-[22.5px] text-center lg:text-left font-normal  text-[#707070] italic leading-tight">
                                We make it simpler for you to locate the top junior colleges</p>
                            <div
                                class="absolute top-1/2 -right-1/2 lg:-top-7 2xl:top-0 lg:left-0 lg:right-auto w-[260px]  aspect-square bg-[#F6A86E] -z-10 rounded-full blur-[30px]">
                            </div>
                            <div
                                class="absolute -top-10 -left-1/2 lg:bottom-0 lg:right-0 lg:top-1/2 lg:left-auto w-[250px] aspect-square bg-[#FFD600] -z-10 rounded-full blur-[30px]">
                            </div>
                        </div>
                        <div class="relative z-20">
                            <div class="w-full max-w-[400px] lg:max-w-full mx-auto 2xl:w-3/4">
                                <video src={scollage} controls autoPlay loop></video>
                            </div>
                            <div
                                class="absolute top-0 right-0 z-10  w-[100px] lg:w-[150px] 2xl:top-1/2 2xl:-translate-y-1/2 2xl:right-10 2xl:w-[200px]">
                                <img alt="" loading="lazy" width="250" height="250" decoding="async" data-nimg="1"
                                    src={Rocket} />
                            </div>
                        </div>
                    </div>
                    <div class="w-full lg:w-1/2 z-20">
                        <div class="space-y-5 py-9 lg:py-1">
                            <div
                                class="flex items-center flex-wrap sm:flex-nowrap sm:py-4 sm:px-8 sm:bg-[#F1FFFF] rounded-[40px] border-none gap-5 sm:gap-0 sm:space-x-9">
                                <div
                                    class="w-full sm:w-1/2 bg-[#F1FFFF] sm:bg-none backdrop-blur-[36px] py-1 px-8 odd:rounded-s-[40px] even:rounded-e-[40px] flex justify-start even:justify-end translate-x-4 even:-translate-x-4 sm:border-0 sm:rounded-none sm:p-0">
                                    <div
                                        class="flex items-center flex-col max-w-[230px] w-full sm:max-w-full text-center">
                                        <div class="stars pb-2">
                                            <div class="flex gap-1 items-center">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <h5
                                            class="text-lg  lg:text-2xl 2xl:text-[25px] leading-tight font-normal text-[#707070] star-text pb-2">
                                            Search <span
                                                class="text-lg lg:text-2xl 2xl:text-[25px] font-bold">10x</span>{" "}
                                            Faster
                                        </h5>
                                        <p
                                            class="text-[13px] lg:text-base 2xl:text-[20px] leading-tight text-[#707070] italic">
                                            Quick searching and applying for junior colleges</p>
                                    </div>
                                </div>
                                <div
                                    class="w-full sm:w-1/2 bg-[#F1FFFF] sm:bg-none backdrop-blur-[36px]  py-4 px-8 odd:rounded-s-[40px] even:rounded-e-[40px] border border-solid border-white flex justify-start even:justify-end translate-x-4 even:-translate-x-4 sm:border-0 sm:rounded-none sm:p-0">
                                    <div
                                        class="flex items-center flex-col max-w-[230px] w-full sm:max-w-full text-center">
                                        <div class="stars pb-2">
                                            <div class="flex gap-1 items-center">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <h5
                                            class="text-lg lg:text-2xl 2xl:text-[25px] leading-tight font-normal text-[#707070] star-text pb-2">
                                            Experience <span
                                                class="text-lg lg:text-2xl 2xl:text-[25px] font-bold">12x</span> {" "}
                                            Cheaper
                                        </h5>
                                        <p
                                            class="text-[13px] lg:text-base 2xl:text-[20px] leading-tight text-[#707070] italic">
                                            More affordable than going to colleges in person.</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="flex items-center flex-wrap sm:flex-nowrap sm:py-4 sm:px-8 2xl:px-10 sm:bg-[#F1FFFF] 2xl:border rounded-[40px] border-white border-solid gap-5 sm:gap-0 sm:space-x-9">
                                <div
                                    class="w-full sm:w-1/2 bg-[#F1FFFF] sm:bg-none backdrop-blur-[36px] py-4 px-8 odd:rounded-s-[40px] even:rounded-e-[40px] border border-solid border-white flex justify-start even:justify-end translate-x-4 even:-translate-x-4 sm:border-0 sm:rounded-none sm:p-0">
                                    <div
                                        class="flex items-center flex-col max-w-[230px] w-full sm:max-w-full text-center">
                                        <div class="stars pb-2">
                                            <div class="flex gap-1 items-center">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <h5
                                            class="text-lg lg:text-2xl 2xl:text-[30px] leading-tight font-normal text-[#707070] star-text pb-2">
                                            Know your campus</h5>
                                        <p
                                            class="text-[13px] lg:text-base 2xl:text-[19px] leading-tight text-[#707070] italic">
                                            Browse through important infrastructure and safety protocol details</p>
                                    </div>
                                </div>
                                <div
                                    class="w-full sm:w-1/2 bg-[#F1FFFF] sm:bg-none backdrop-blur-[36px]  py-4 px-8 odd:rounded-s-[40px] even:rounded-e-[40px] border border-solid border-white flex justify-start even:justify-end translate-x-4 even:-translate-x-4 sm:border-0 sm:rounded-none sm:p-0">
                                    <div
                                        class="flex items-center flex-col max-w-[230px] w-full sm:max-w-full text-center">
                                        <div class="stars pb-2">
                                            <div class="flex gap-1 items-center">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <h5
                                            class="text-lg lg:text-2xl 2xl:text-[30px] leading-tight font-normal text-[#707070] star-text pb-2">
                                            Know your curriculum</h5>
                                        <p
                                            class="text-[13px] lg:text-base 2xl:text-[19px] leading-tight text-[#707070] italic">
                                            Complete info on Academics, extracurricular and Alumni performance.</p>
                                    </div>
                                </div>
                            </div>
                            <div
                                class="flex items-center flex-wrap sm:flex-nowrap sm:py-4 sm:px-8 2xl:px-10 sm:bg-[#F1FFFF] 2xl:border rounded-[40px] border-white border-solid gap-5 sm:gap-0 sm:space-x-9">
                                <div
                                    class="w-full sm:w-1/2 bg-[#F1FFFF] sm:bg-none backdrop-blur-[36px] py-4 px-8 odd:rounded-s-[40px] even:rounded-e-[40px] border border-solid border-white flex justify-start even:justify-end translate-x-4 even:-translate-x-4 sm:border-0 sm:rounded-none sm:p-0">
                                    <div
                                        class="flex items-center flex-col max-w-[230px] w-full sm:max-w-full text-center">
                                        <div class="stars pb-2">
                                            <div class="flex gap-1 items-center">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <h5
                                            class="text-lg lg:text-2xl 2xl:text-[30px] leading-tight font-normal text-[#707070] star-text pb-2">
                                            Genuine Reviews</h5>
                                        <p
                                            class="text-[13px] lg:text-base 2xl:text-[20px] leading-tight text-[#707070] italic">
                                            Get 100% verified reviews.</p>
                                    </div>
                                </div>
                                <div
                                    class="w-full sm:w-1/2 bg-[#F1FFFF] sm:bg-none backdrop-blur-[36px] py-4 px-8 odd:rounded-s-[40px] even:rounded-e-[40px] border border-solid border-white flex justify-start even:justify-end translate-x-4 even:-translate-x-4 sm:border-0 sm:rounded-none sm:p-0">
                                    <div
                                        class="flex items-center flex-col max-w-[230px] w-full sm:max-w-full text-center">
                                        <div class="stars pb-2">
                                            <div class="flex gap-1 items-center">
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0"
                                                    viewBox="0 0 24 24"
                                                    class="text-xl lg:text-3xl 2xl:text-[36px] text-[#707070]"
                                                    height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                                    <path
                                                        d="M12.0008 17L6.12295 20.5902L7.72105 13.8906L2.49023 9.40983L9.35577 8.85942L12.0008 2.5L14.6458 8.85942L21.5114 9.40983L16.2806 13.8906L17.8787 20.5902L12.0008 17Z">
                                                    </path>
                                                </svg>
                                            </div>
                                        </div>
                                        <h5
                                            class="text-lg lg:text-2xl 2xl:text-[30px] leading-tight font-normal text-[#707070] star-text pb-2">
                                            Online Campus Tour</h5>
                                        <p
                                            class="text-[13px] lg:text-base 2xl:text-[19px] leading-tight text-[#707070] italic">
                                            Images &amp;videos that help you understand better.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FindCollage;
