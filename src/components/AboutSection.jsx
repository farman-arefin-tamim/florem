import Image from 'next/image';
import React from 'react';

const AboutSection = () => {
    return (
        <div  className='bg-[#fff6ef] h-[70vh] w-full'>
            <div className='container mx-auto flex items-center justify-center'>
                <div className='w-[50%]'>
                    
                </div>
                <div className='w-[50%] space-y-3'>
                    <h3 className='text-amber-800 text-2xl font-semibold'>About Us</h3>
                    <h1 className='text-4xl'>Why Choose Us</h1>
                    <p className='text-gray-500'>We are a professional outdoor paving company dedicated to transforming driveways, patios, and outdoor spaces with high-quality long-lasting results, functional, and visually appealing paving solutions tailored to each client’s needs.</p>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;