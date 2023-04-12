import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { MapPinIcon, CurrencyDollarIcon,CalendarIcon,PhoneIcon,EnvelopeIcon } from '@heroicons/react/24/solid';
import './jobDetails.css';
import { addToDb } from '../../fakedb';

const JobDetails = () => {
    const data = useLoaderData();
    const {id, salary, designations,phone,email,address, jobDescription, jobResponsibility, educationalRequirement, experience } = data[0];
    // console.log(jobDescription);
    const addToLocalStorage = (id, email) => {
        console.log(id, email);
        addToDb(id, email);
    }
    return (
        <div>
            <section className='jobDescription flex align-center justify-center'>
                <p className='text-3xl font-bold m-auto'>Job Description</p>
            </section>
            <section className='job-Des md:ml-40 md:mr-40'>
                <div>
                    <p className='mb-10 text-justify'><span className='font-bold'>Job Description:</span> {jobDescription}</p>
                    <p className='mb-10 text-justify'><span className='font-bold'>Job Responsibility:</span> {jobResponsibility}</p>
                    <p className='mb-10 text-justify'><span className='font-bold'>Educational Requirement:</span> <br />{educationalRequirement}</p>
                    <p className='text-justify'><span className='font-bold'>Experience:</span> <br />{experience}</p>
                </div>
                <div>
                    <div className='job-information p-8'>
                        <p className='font-bold text-2xl mb-5'>Job Details</p>
                        <hr className='mb-5'/>
                        <div className='flex gap-5 mb-5'>
                            <CurrencyDollarIcon className="h-6 w-6 text-black" />
                            <p><span className='font-bold'>Salary:</span> {salary}</p>
                        </div>
                        <div className='flex gap-5 mb-5'>
                            <CalendarIcon className="h-6 w-6 text-black" />
                            <p><span className='font-bold'>Job Title:</span> {designations}</p>
                        </div>
                        <p className='font-bold text-2xl mb-5'>Contact Information</p>
                        <hr className='mb-5'/>
                        <div className='flex gap-5 mb-5'>
                            <PhoneIcon className="h-6 w-6 text-black" />
                            <p><span className='font-bold'>Phone:</span> {phone}</p>
                        </div>
                        <div className='flex gap-5 mb-5'>
                            <EnvelopeIcon className="h-6 w-6 text-black" />
                            <p><span className='font-bold'>Email:</span> {email}</p>
                        </div>
                        <div className='flex gap-5'>
                            <MapPinIcon className="h-6 w-6 text-black" />
                            <p><span className='font-bold'>Address:</span> {address}</p>
                        </div>
                    </div>
                    <button onClick={()=>addToLocalStorage(id,email)} className='job-Apply-btn'>Apply Now</button>
                </div>
            </section>
        </div>
    );
};

export default JobDetails;