import React from "react";
import homeBackground from "../../assets/img/homeBack.png";

function FindPlace() {
    return (
        <div className="bg-gradient-to-b from-yellow-200 to-pink-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center p-4 mt-40">
                <div className="text-4xl md:text-[5rem] text-[#60269e] font-bold mb-5 flex flex-col">
                    <span>Find all</span> <span>junior college insights</span> <span>at one place.</span>
                </div>
                <p className="text-4xl text-[#707070] mb-28">
                    Your No.1 Junior College Guide in Hyderabad
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-[#707070]">
                    <div className="bg-white w-80 h-44 py-10 px-4 rounded-xl shadow-lg text-center space-y-6">
                        <h2 className="text-3xl font-semibold">College Listing</h2>
                        <p className="text-xl">Find all junior colleges at one place</p>
                    </div>
                    <div className="bg-white w-80 h-44 py-10 px-4 rounded-xl shadow-lg text-center space-y-6">
                        <h2 className="text-3xl font-semibold text-[#707070]">Explore All Data</h2>
                        <p className="text-xl">Search for a college and compare</p>
                    </div>
                    <div className="bg-white w-80 h-44 py-10 px-4 rounded-xl shadow-lg text-center space-y-6">
                        <h2 className="text-3xl font-semibold text-[#707070]">Online Admissions</h2>
                        <p className="text-xl">Access admissions faster in a better way</p>
                    </div>
                    <img
                        src={homeBackground}
                        alt="Scolage Background"
                        className="w-96 h-80 object-cover"
                    />
                </div>
            </div>
        </div>
    );
}

export default FindPlace;
