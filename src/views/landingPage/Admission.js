import React from "react";
import mars from "../../assets/img/mars.png"
import urenus from "../../assets/img/urenus.png"
import gravity from "../../assets/img/gravity.png"
import pluto from "../../assets/img/pluto.png"
import smartPhone from "../../assets/svg/smartPhone.svg"
import scollage from "../../assets/video/scollage.webm"

function Admission() {
    return (
        <div className="bg-gradient-to-b from-[#ddb7ff] to-[#eeead5]">
            <div className="admission-container flex flex-col items-center px-5 md:px-6 lg:px-0 bg-gradient-to-r from-[#F3D5D4] to-[#FFD700] h-[95rem] md:h-[78rem] lg:h-[66rem] lg:h-[78rem]">
                <div className="flex flex-col md:flex-row items-center justify-evenly w-full">
                    <div className="flex flex-col space-y-6 lg:w-1/2">
                        <div className="flex justify-center md:justify-start space-x-2 text-2xl">
                            <img src={mars} alt="mars" className="w-[50px] h-[50px]" />
                            <img src={urenus} alt="urenus" className="w-[50px] h-[50px]" />
                            <img src={gravity} alt="gravity" className="w-[50px] h-[50px]" />
                            <img src={pluto} alt="pluto" className="w-[50px] h-[50px]" />
                        </div>

                        <h1 className="text-3xl md:text-3xl lg:text-5xl xl:text-8xl text-center md:text-start font-bold text-[#60269e]">
                            Online Admissions in 3 Easy Steps
                        </h1>
                    </div>

                    <div className="">
                        <video
                            src={scollage}
                            className="w-[32rem] lg:w-[27rem] xl:w-[32rem] h-96 md:h-[32rem]"
                            controls
                            autoPlay
                            loop
                        />
                    </div>
                </div>

                {/* {/ Steps Section /} */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-5 md:gap-y-0 gap-x-5 md:gap-x-10 pt-10 md:pt-12 lg:pt-20">
                    {[
                        { title: "Choose", step: "1", desc: "Browse through all the junior colleges in Hyderabad" },
                        { title: "Compare", step: "2", desc: "Look at the options and compare as per your preference" },
                        { title: "Apply", step: "3", desc: "Directly apply to any college of your choice" },
                        { title: "Whoa!", step: "4", desc: "Your admission is done!" },
                    ].map((item, index) => (
                        <div key={index} className="relative flex flex-col items-center text-center pr-4">
                            <p className={`text-4xl md:text-4xl lg:text-4xl xl:text-6xl ${index === 2 && 'md:pt-10 lg:pt-0'} ${index === 3 && 'md:pt-10 lg:pt-0'} ${item.title && 'font-normal'} text-[#60269e] flex items-center`}>
                                {item.title} <span className="text-9xl md:text-9xl lg:text-8xl xl:text-[12rem] font-mono">{item.step}</span>
                            </p>
                            <p className="mt-2 text-gray-600 w-60 lg:w-44">{item.desc}</p>

                            {/* {/ Vertical line (except last item) /} */}
                            {index !== 1 && index !== 3 && <div className="absolute top-0 right-0 h-full w-[2px] bg-[#60269e] hidden md:block lg:block"></div>}
                            {index !== 3 && (
                                <div className="absolute top-0 right-0 h-full w-[2px] bg-[#60269e] hidden md:hidden lg:block"></div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* {/ Bottom Smartphone Image /} */}
            <div className="flex flex-col md:flex-row justify-center items-center space-x-0 lg:space-x-14 xl:space-x-0 relative w-full -mt-20 md:-mt-48 lg:-mt-80 xl:-mt-60 pb-10 md:pb-0">
                <img src={smartPhone} alt="smartPhone" className="w-72 md:w-96 lg:w-[230px] xl:w-[500px] h-[500px] md:h-[390px] lg:h-[520px] xl:h-[760px] object-cover" />
                <div className="text-center md:text-start">
                    <p className="font-bold text-[#8251b1] text-[1.9rem] md:text-3xl lg:text-4xl xl:text-7xl leading-7 md:leading-6 lg:leading-9 xl:leading-20">Start your free </p>
                    <p className="text-[#8251b1] text-[1.9rem] md:text-3xl lg:text-4xl xl:text-7xl leading-7 md:leading-6 lg:leading-9 xl:leading-20 py-4">Jr. college virtual tour</p>
                    <p className="text-[#8251b1] text-[1.9rem] md:text-3xl lg:text-4xl xl:text-7xl leading-7 md:leading-6 lg:leading-9 xl:leading-20">& apply for admission</p>
                    <p className="font-bold text-[#8251b1] text-[1.9rem] md:text-3xl lg:text-4xl xl:text-7xl leading-7 md:leading-7 lg:leading-9 xl:leading-20 py-4">to any college within minutes.</p>
                </div>
            </div>
        </div>
    );
}

export default Admission;
