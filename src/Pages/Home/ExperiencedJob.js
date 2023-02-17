import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { Wave } from 'react-animated-text';
const { Meta } = Card;
const ExperiencedJob = () => {
    const [experiencedJobs, setExperiencedJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/ExperiencedJobs')
            .then(res => res.json())
            .then(data => setExperiencedJobs(data))
    }, []);

    let count = 0;
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl lg:text-6xl font-bold text-orange-600 lg:my-12"><Wave text="Experienced Jobs" />
                </p>
            </div>
            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    experiencedJobs?.map((ExperiencedJob) => {
                        count = count + 1;
                        if (count <= 6) {
                            return (<div>
                                <Card
                                    hoverable
                                    style={{
                                        width: 320,
                                    }}
                                    cover={<img alt="example" src={ExperiencedJob.image_url} />}
                                >
                                    <h4 className='text-lg font-bold'><span className='text-blue-600'>Position Name :</span> {ExperiencedJob.PositionName}</h4>
                                    <h4><span className='text-blue-600'>Company Name :</span> {ExperiencedJob.CompanyName}</h4>
                                    <h4><span className='text-blue-600'>Job Location :</span> {ExperiencedJob.JobLocation}</h4>
                                    <button className='bg-info p-2 rounded-md ml-20 mt-8 hover:bg-primary'>Apply Now</button>
                                </Card>
                            </div>)
                        }
                    })
                }
            </div>
            <div className='card-actions justify-center mt-6'>
                <Link to='/product'><button className="bg-secondary p-2 rounded-md hover:bg-green-400 px-12">Show More</button></Link>
            </div>
        </div >
    );
};

export default ExperiencedJob;



// import { Card } from 'antd';
// const { Meta } = Card;
// const ExperiencedJob = () => (
//     <Card
//         hoverable
//         style={{
//             width: 240,
//         }}
//         cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//     >
//         <Meta title="Europe Street beat" description="www.instagram.com" />
//     </Card>
// );
// export default ExperiencedJob;