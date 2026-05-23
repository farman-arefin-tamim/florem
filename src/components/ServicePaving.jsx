import React from 'react';
import Marquee from "react-fast-marquee";
import { FaStar } from 'react-icons/fa';


const welcomeMessages=[
    "INTERIOR PAVING",
    "EXTERIOR PAVING",
    "BATHROOM PAVING",
    "SPORTS FIELD PAVING"
];


const ServicePaving = () => {
    return (
        <div>
            <Marquee className='overflow-hidden'>
            {welcomeMessages.map((text, index) => (
                 <div key={index} className="mx-8">
                 <div className='flex justify-center items-center gap-8'>
                    <FaStar className="text-gray-400 text-7xl" />
                    <p className="text-gray-400 text-9xl">{text}</p>
                 </div>
                 </div>
            ))}
         </Marquee>
        </div>
    );
};

export default ServicePaving;