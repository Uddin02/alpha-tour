import React, { useEffect, useState } from 'react';
import HomeServiceCard from './HomeServiceCard';

const HomeServices = () => {

    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('https://alpha-tour-server.vercel.app/services')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className='my-4 lg:ml-32 lg:mr-32'>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-8'>
                {
                    services.map(service => <HomeServiceCard
                        key={service._id}
                        service={service}
                    ></HomeServiceCard>)
                }
            </div>
        </div>
    );
};

export default HomeServices;