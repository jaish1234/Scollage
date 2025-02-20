import React from "react";
import scollage from "../../assets/video/scollage.webm"

function FindCollage() {
    return (
        <div className="flex justify-center space-x-10 pt-[7.3rem] bg-gradient-to-b from-[#e7ade9] to-[#f3d5d4] h-[63rem] text-[#707070]">
            <div>
                <div className="text-[5rem] leading-tight font-bold flex flex-col mb-9">
                    <span>Find The Right</span> <span>Junior College</span>
                </div>
                <div className="text-4xl w-[38rem] mb-8 text-start">
                    <i>We make it simpler for you to locate </i>
                    <i>the top junior colleges</i>
                </div>
                <video
                    src={scollage}
                    className="w-[35rem] h-[28rem]"
                    controls
                    autoPlay
                    loop
                />
            </div>
            <div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
                    <h2 className="text-xl font-semibold text-purple-800">Search 10x Faster</h2>
                    <p className="text-gray-600">Quick searching and applying for junior colleges</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
                    <h2 className="text-xl font-semibold text-purple-800">Experience 12x Cheaper</h2>
                    <p className="text-gray-600">More affordable than going to colleges in person.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-lg text-center transition-transform transform hover:scale-105">
                    <h2 className="text-xl font-semibold text-purple-800">Know your campus</h2>
                    <p className="text-gray-600">Browse through important infrastructure and safety protocol details.</p>
                </div>
            </div>
        </div>
    );
}

export default FindCollage;
