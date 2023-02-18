import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { Wave } from 'react-animated-text';
const { Meta } = Card;
const CompanyDetails = () => {
    const [fresherJobs, setFresherJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/TopItCompany')
            .then(res => res.json())
            .then(data => setFresherJobs(data))
    }, []);

    return (
        <div className='mb-20 lg:mx-96'>
            <div className='text-center mb-4'>
                <p className="text-2xl lg:text-6xl font-bold text-orange-600 lg:my-12"><Wave text="Experienced All Jobs" />
                </p>
            </div>
            <div className='grid gap-12'>
                {
                    fresherJobs?.map((fresherJob) => {


                        return (<div>
                            <Card
                                hoverable
                                style={{
                                    width: 320,
                                }}
                                cover={<img alt="example" src={fresherJob.image_url} />}
                            >
                                <h4 className='text-lg font-bold'><span className='text-blue-600'>Company Name :</span> {fresherJob.CompanyName}</h4>
                                <h4><span className='text-blue-600'>Company Location :</span> {fresherJob.JobLocation}</h4>
                                <h4><span className='text-blue-600'>Company Details :</span> {fresherJob.CompanyDetails}</h4>
                            </Card>
                        </div>)
                    })
                }
            </div>
            <div className='card-actions justify-center mt-6'>
                <Link to='/'><button className="bg-secondary p-2 rounded-md hover:bg-green-400 px-12">Go To Home</button></Link>
            </div>
        </div >
    );
};

export default CompanyDetails;


