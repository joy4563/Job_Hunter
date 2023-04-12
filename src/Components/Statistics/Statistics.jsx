import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Statistics = () => {

    const marks = [
        {
            id: 1,
            assignment: "assignment 1",
            mark: 60
        },
        {
            id: 2,
            assignment: "assignment 2",
            mark: 60
        },
        {
            id: 3,
            assignment: "assignment 3",
            mark: 60
        },
        {
            id: 4,
            assignment: "assignment 4",
            mark: 60
        },
        {
            id: 5,
            assignment: "assignment 5",
            mark: 60
        },
        {
            id: 6,
            assignment: "assignment 6",
            mark: 60
        },
        {
            id: 7,
            assignment: "assignment 7",
            mark: 60
        },
        {
            id: 8,
            assignment: "assignment 8",
            mark: 60
        }
    ];

    return (
        <div className='md:mt-20'>
            <h2 className='mb-20 font-bold text-center text-5xl'>Area Chart</h2>
            <AreaChart
                width={1200}
                height={500}
                data={marks}>
                
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="assignment"></XAxis>
                <YAxis dataKey="mark"></YAxis>
                <Tooltip></Tooltip>
                <Area type="monotone" dataKey="mark" stroke="#8884d8" fill="#8884d8" />

            </AreaChart>
        </div>
    );
};

export default Statistics;