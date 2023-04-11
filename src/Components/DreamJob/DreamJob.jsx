import React from "react";

import Banner from "../Banner/Banner";
import JobCatagory from "../jobCatagory/JobCatagory";
import FeaturedJob from "../FeaturedJob/FeaturedJob";

const DreamJob = () => {
    return (
        <div>
            <Banner></Banner>
            <JobCatagory></JobCatagory>
            <FeaturedJob></FeaturedJob>
        </div>
    );
};

export default DreamJob;
