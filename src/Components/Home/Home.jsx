import React, { useState } from 'react';
import './Home.css';
import manImg from '../../assets/All Images/P3OLGJ1 copy 1.png';
import account from '../../assets/Icons/accounts 1.png';
import creative from '../../assets/Icons/business 1.png';
import market from '../../assets/Icons/social-media 1.png';
import engineer from '../../assets/Icons/chip 1.png';
import { useLoaderData } from 'react-router-dom';
import JobDisplay from '../JobDisplay/JobDisplay';
import JobDetails from '../JobDetails/JobDetails';

const Home = () => {

    const getJobs = useLoaderData();
    const fourJobs = getJobs[1];
    const allJobs = getJobs[0];
    const [jobs, setJobs] = useState(fourJobs);

    const allJobShow = () => {
        setJobs(allJobs);
    }

    return (
        <div>
            <section className='md:ml-40'>
                <div className='md:grid grid-cols-2'>
                    <div className='first-part'>
                        <p className='md:w-80 text-5xl first-part-title'>
                            One Step Closer To Your <span className='text-blue-500'>Dream Job</span>
                        </p>
                        <p className='md:w-72 mt-10 first-part-des'>
                            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.
                        </p>
                        <button className='first-part-btn mt-10'>Get Started</button>
                    </div>
                    <div className="second-part">
                        <img src={manImg} alt="" />
                    </div>
                </div>
            </section>
            <section className='md:mt-40 mt-10 md:ml-40 md:mr-40 md:p-0 p-3'>
                <div>
                    <p className='font-bold text-5xl text-center'>Job Category List</p>
                    <p className='text-center mt-5'>
                        Explore thousands of job opportunities with all the information you need. Its your future
                    </p>
                    <div className='grid md:grid-cols-4 grid-cols-2 gap-5 mt-10'>
                        <div className='job-available md:p-10'>
                            <img src={account} alt="" />
                            <p className='text-2xl mt-3 mb-2'>Account and Finance</p>
                            <p>300 Jobs Available</p>
                        </div>
                        <div className='job-available md:p-10'>
                            <img src={creative} alt="" />
                            <p className='text-2xl mt-3 mb-2'>Creative Design</p>
                            <p>200 Jobs Available</p>
                        </div>
                        <div className='job-available md:p-10'>
                            <img src={market} alt="" />
                            <p className='text-2xl mt-3 mb-2'>Market and Sales</p>
                            <p>250 Jobs Available</p>
                        </div>
                        <div className='job-available md:p-10'>
                            <img src={engineer} alt="" />
                            <p className='text-2xl mt-3 mb-2'>Engineering Job</p>
                            <p>224 Jobs Available</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='md:mt-40 mt-10 md:ml-40 md:mr-40 md:p-0 p-3'>
                <p className='font-bold text-5xl text-center mb-3'>Featured Jobs</p>
                <p className='text-center mb-10'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='grid md:grid-cols-2 grid-cols-1 md:gap-5'>
                    {
                        jobs.map(fourJob => <JobDisplay
                            key={fourJob.id}
                            fourJob={fourJob}
                        ></JobDisplay>)
                    }
                </div>
                <p className='text-center mb-10'><button onClick={allJobShow} className={`see-all-btn text-2xl ${jobs.length!=4 ? 'hidden':''}`}>See All</button></p>
            </section>
        </div>
    );
};

export default Home;