import React from "react";
import { Link } from "react-router-dom";

const FeaturedSingleJob = ({ job, handleViewDetails,details }) => {
    const {
        id,
        img,
        designations,
        companyName,
        jobType,
        duration,
        address,
        salary,
    } = job;
    // console.log(details);
    return (
        <div className="border border-[#E8E8E8] rounded-lg p-10">
            <img className="h-10 mb-8" src={img} alt="" />
            <h3 className="font-extrabold text-2xl text-[#474747] mb-2">
                {designations}
            </h3>
            <p className="font-semibold text-xl text-[#757575] mb-4">
                {companyName}
            </p>
            <p className="mb-4">
                <span className="border border-blue-900 py-2 px-5 text-[#9873FF] mr-4 rounded">
                    {jobType}
                </span>
                <span className="border border-blue-900 py-2 px-5 text-[#9873FF] mr-4 rounded">
                    {duration}
                </span>
            </p>
            <p>
                <span className="font-semibold text-xl text-[#757575]">
                    {address}
                </span>
                <span className="font-semibold text-xl text-[#757575]">
                    {salary}
                </span>
            </p>
            <Link to={`/viewDetails/${id}`}>
                {" "}
                <button
                    // onClick={() => handleViewDetails(job)}
                    className="text-white py-3 px-4 bg-[#9873FF] rounded mt-6 font-extrabold text-xl"
                >
                    View Details
                </button>
            </Link>
        </div>
    );
};

export default FeaturedSingleJob;
