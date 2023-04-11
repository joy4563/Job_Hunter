import React, { useEffect, useState } from "react";

const JobCatagory = () => {
    const [catagory, setCatagory] = useState([]);
    useEffect(() => {
        fetch("catagory.json")
            .then((res) => res.json())
            .then((data) => setCatagory(data));
    }, []);
    return (
        <div className="flex flex-col justify-center items-center  mb-28">
            <h1 className="text-5xl font-extrabold text-[#1A1919] mb-4 ">
                Job Catagory List
            </h1>
            <p className="font-medium text-base text-[#757575] mb-8 ">
                Explore thousands of job opportunities with all the information
                you need. Its your future
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mx-auto">
                {catagory.map((job) => (
                    <div key={job.id} className="rounded-lg bg-[#7e90fe] p-10 flex flex-col items-start">
                        <img
                            className="h-10 w-10  mb-8 "
                            src={job.image}
                            alt=""
                        />
                        <p className="font-extrabold text-xl text-[#474747]">
                            {job.title}
                        </p>
                        <p className="font-medium text-base text-[#A3A3A3]">
                            {job.available} jobs Available
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default JobCatagory;
