import React, { useEffect, useState } from "react";
import { getShoppingCart } from "../../fakedb";
import "./AppliedJobs.css";
import FeaturedSingleJob from "../FeaturedSingleJob/FeaturedSingleJob";

const AppliedJobs = () => {
    const getDataToLocalStorage = getShoppingCart();

    const [allJobs, setAllJobs] = useState([]);
    const [applyJobs, setApplyJobs] = useState([]);
    const [saveJobs, setSaveJobs] = useState([]);

    useEffect(() => {
        fetch("/job.json")
            .then((res) => res.json())
            .then((data) => setAllJobs(data));
    }, []);

    useEffect(() => {
        const getApplyJobs = [];
        for (const id in getDataToLocalStorage) {
            const addApplyJob = allJobs.find((allJob) => allJob.id === id);
            if (addApplyJob) {
                getApplyJobs.push(addApplyJob);
            }
        }
        setApplyJobs(getApplyJobs);
        setSaveJobs(getApplyJobs);
    }, [allJobs]);

    const remoteJobHandler = () => {
        const addRemoteJobs = saveJobs.filter(
            (saveJob) => saveJob.jobType == "Remote"
        );
        setApplyJobs(addRemoteJobs);
    };

    const onsiteJobHandler = () => {
        const addOnsiteJobs = saveJobs.filter(
            (saveJob) => saveJob.jobType == "Onsite"
        );
        setApplyJobs(addOnsiteJobs);
    };

    return (
        <div>
            <section className="jobDescription flex align-center justify-center">
                <p className="text-3xl font-bold m-auto">Applied Job</p>
            </section>
            <section className="job-des2 flex gap-10 justify-end">
                <p className="font-bold text-2xl text-white">
                    <button
                        onClick={remoteJobHandler}
                        className="see-all-btn1 p-3"
                    >
                        Remote
                    </button>
                </p>
                <p className="font-bold text-2xl text-white">
                    <button
                        onClick={onsiteJobHandler}
                        className="see-all-btn1 p-3"
                    >
                        Onsite
                    </button>
                </p>
            </section>
            <section className="mt-10 flex flex-col justify-center items-center">
                <div>
                    {applyJobs.map((applyJob) => (
                        <FeaturedSingleJob key={applyJob.id} applyJob={applyJob}></FeaturedSingleJob>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default AppliedJobs;
