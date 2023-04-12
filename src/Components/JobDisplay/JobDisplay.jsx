import React from 'react';
import './JobDisplay.css';
import { MapPinIcon, CurrencyDollarIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';

const JobDisplay = ({ fourJob }) => {

    const { id, companyName, designations, jobType, address, salary, img } = fourJob;

    return (
        <div className='job-des rounded-lg p-5'>
            <img src={img} alt="" className='company-img' />
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
            <Link to={`/jobDetails/${id}`}><button className='view-details-btn font-bold p-3 mt-3'>View Details</button></Link>
        </div>
    );
};

export default JobDisplay;