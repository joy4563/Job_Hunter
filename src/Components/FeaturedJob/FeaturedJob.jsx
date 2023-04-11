import React, { useEffect, useState } from "react";
import FeaturedSingleJob from "../FeaturedSingleJob/FeaturedSingleJob";

const FeaturedJob = () => {
    const [featuredJob, setFeaturedJob] = useState([]);
    const [showedJob, setShowedJob] = useState([]);

    useEffect(() => {
        fetch("job.json")
            .then((res) => res.json())
            .then((data) => beforeShowAllJobs(data));
    }, []);

    const beforeShowAllJobs = (data) => {
        setFeaturedJob(data);
        const temp = data.slice(0, 4);
        setShowedJob(temp);
    };

    const handleShowAllData = () => {
        setShowedJob(featuredJob);
    };


    // handle View Details

    const handleViewDetails = (details) => {

        console.log(details);
    }
    return (
        <div className="flex flex-col items-center mb-32">
            <h1 className="font-extrabold text-5xl text-[#1A1919] mb-4">
                Featured Jobs
            </h1>
            <p className="font-medium text-base text-[#757575] mb-8">
                Explore thousands of job opportunities with all the information
                you need. Its your future
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                {showedJob.map((job) => (
                    <FeaturedSingleJob
                        key={job.id}
                        job={job}
                        handleViewDetails={handleViewDetails}
                    ></FeaturedSingleJob>
                ))}
            </div>
            <button
                onClick={() => handleShowAllData()}
                className={`text-white py-3 px-4 bg-[#9873FF] rounded mt-6 font-extrabold text-xl ${
                    showedJob.length == 6 ? `hidden` : ``
                }`}
            >
                Show All Jobs
            </button>
        </div>
    );
};

export default FeaturedJob;
