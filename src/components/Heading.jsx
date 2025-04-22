import React from 'react';

const Heading = ({title, subtitle}) => {
    return (
        <div>
             <div className='flex flex-col my-12 justify-center items-center'>
            <h2 className='text-xl md:text-2xl lg:text-4xl font-thin mb-4'>{title}</h2>
            <p className='text-xs md:text-base text-gray-600 font-thin'>{subtitle}</p>
        </div>
        </div>
    );
};

export default Heading;