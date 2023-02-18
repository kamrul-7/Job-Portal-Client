import React, { useEffect, useState } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import { Wave } from 'react-animated-text';
const { Meta } = Card;
const TopItCompany = () => {
    const [TopItCompanys, setTopItCompanys] = useState([]);
    useEffect(() => {
        fetch('https://job-portal-server-seven.vercel.app/TopItCompany')
            .then(res => res.json())
            .then(data => setTopItCompanys(data))
    }, []);

    let count = 0;
    return (
        <div>
            <div className='text-center mb-4'>
                <p className="text-2xl lg:text-6xl font-bold text-green-600 lg:my-20"><Wave text="Top It Company" />
                </p>
            </div>
            <div className='grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    TopItCompanys?.map((TopItCompany) => {
                        count = count + 1;
                        if (count <= 6) {
                            return (<div className='mb-12'>
                                <Card
                                    hoverable
                                    style={{
                                        width: 320,
                                    }}
                                    cover={<img alt="example" src={TopItCompany.image_url} />}
                                >
                                    <h4 className='text-lg font-bold'><span className='text-blue-600'>Company Name :</span> {TopItCompany.CompanyName}</h4>
                                    <h4><span className='text-blue-600'>Job Location :</span> {TopItCompany.JobLocation}</h4>
                                    <button className='bg-info p-2 rounded-md ml-20 mt-8 hover:bg-primary'><Link to='/CompanyDetails'>view details</Link> </button>
                                </Card>
                            </div>)
                        }
                    })
                }
            </div>
        </div >
    );
};

export default TopItCompany;



