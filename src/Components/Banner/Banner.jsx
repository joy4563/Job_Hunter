import React from 'react';
import person from "../../assets/All Images/person.png";
const Banner = () => {
    return (
        <div>
            {/* banner */}
            <div className="grid md:grid-cols-2 items-center  bg-[#5dd14d0c]">
                {/* // bg-[#9873ff0c] */}
                <div className="">
                    <h1 className="font-extrabold text-7xl text-[#1A1919] mb-6">
                        One Step Closer To Your{" "}
                        <span className="text-[#9873FF]">Dream Job</span>{" "}
                    </h1>
                    <p className="font-medium text-lg test-[#757575] mb-8">
                        Explore thousands of job opportunities with all the
                        information you need. Its your future. Come find it.
                        Manage all your job application from start to finish.
                    </p>
                    <button className="font-extrabold text-xl text-white rounded-lg py-5 px-7 bg-[#9873FF]">
                        Get Started
                    </button>
                </div>
                <div>
                    <img src={person} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;