import React from 'react';
import Toggle from './Toggle'
const Banner = () => {
    return (
        <div className="hero bg-[url('/src/Assets/background.jpg')] bg-no-repeat pb-40 lg:min-h-screen w-full mb-8">
            <div className='lg:-mr-96 lg:ml-56 bg-pink-100 p-2 rounded-md mt-4 lg:text-4xl ml-32'>
                <Toggle></Toggle>
            </div>
        </div>
    );
};

export default Banner;