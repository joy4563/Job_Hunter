import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div className="flex content-between justify-between items-center my-12 ">
            <div>
                <p className="font-extrabold text-3xl text-[#1A1919]">
                    JobHunter
                </p>
            </div>
            <div className="flex gap-5">
                <Link to="/">Home</Link>
                <Link to="/statistics">Statistics</Link>
                <Link to="/appliedJobs">Applied Jobs</Link>
                <Link to="/blog">Blog</Link>
            </div>
            <div>
                <Link to="/startaApplying">
                    {" "}
                    <button className="rounded-lg bg-[#9873FF] px-7 py-5 text-white font-extrabold text-xl">
                        Start Applying
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
