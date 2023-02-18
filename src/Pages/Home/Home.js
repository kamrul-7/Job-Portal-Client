import React from 'react';
import Banner from './Banner';
import ExperiencedJob from './ExperiencedJob';
import FresherJob from './FresherJob';
import TopItCompany from './TopItCompany';
const Home = () => {
    return (
        <div className='ml-8 mr-8'>
            <div className='flex justify-center'>

                <Banner></Banner>

            </div>
            <FresherJob></FresherJob>
            <ExperiencedJob></ExperiencedJob>
            <TopItCompany></TopItCompany>


        </div>
    );
};

export default Home;