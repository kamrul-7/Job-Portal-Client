import React from 'react';
import Banner from './Banner';
import ExperiencedJob from './ExperiencedJob';
import FresherJob from './FresherJob';
const Home = () => {
    return (
        <div className='ml-8 mr-8'>
            <div className='flex justify-center'>

                <Banner></Banner>

            </div>
            <FresherJob></FresherJob>
            <ExperiencedJob></ExperiencedJob>
            <h2>This is Home</h2>

        </div>
    );
};

export default Home;