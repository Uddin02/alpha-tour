import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import ServiceCard from './ServiceCard';

const Services = () => {

    useTitle('Services')

    const [services, setServices] = useState([]);
    
    useEffect(()=>{
        window.scrollTo(0,0)
    },[])

    useEffect( () =>{
        fetch('http://localhost:5000/allServices')
        .then(res =>res.json())
        .then(data => setServices(data))
    }, [])

    return (
        <div className='my-4 mx-2 lg:ml-32 lg:mr-32'>
            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-16'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;