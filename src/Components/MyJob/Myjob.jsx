import React from 'react';
import './Myjob.css';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const Myjob = ({ applyJob }) => {
    // console.log(applyJob);
    const { id, companyName, designations, jobType, address, salary, img } = applyJob;
    return (
        <div>
            <div className='flex items-center job-des1 justify-between pr-10 pl-10 mb-10'>
                <div>
                    <div className='flex gap-3 items-center'>
                        <div>
                            <img src={img} alt="" className='company-img1'/>
                        </div>
                        <div>
                            <p className='font-bold text-3xl mt-2'>{designations}</p>
                            <p className='text-2xl mt-2'>{companyName}</p>
                            <p className='jobType w-40 text-center p-2 font-bold mt-3'>{jobType}</p>
                            <div className='flex mt-3 gap-5'>
                                <div className='flex gap-3'>
                                    <MapPinIcon className="h-6 w-6 text-black" />
                                    <p>{address}</p>
                                </div>
                                <div className='flex gap-3'>
                                    <CurrencyDollarIcon className="h-6 w-6 text-black" />
                                    <p>{salary}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <Link to={`/jobDetails/${id}`}><button className='view-details-btn font-bold p-3 mt-3'>View Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Myjob;