import React from 'react';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from 'react-router-dom';

const HomeServiceCard = ({service}) => {
    const { _id, description, duration, price, service_img, service_name } = service;
    // console.log(service);
    return (
        <div className="card card-compact rounded-md w-96 bg-base-100 shadow-xl">    
            <PhotoProvider>
                <PhotoView src={service_img}>                    
                    <img className='rounded-t-md cursor-pointer' src={service_img} alt="service_img" />   
                </PhotoView>
            </PhotoProvider>
              
            <div className="card-body p-2">
                <h2 className="card-title font-bold text-2xl  text-gray-800">{service_name}</h2>
                <h2 className="card-title text-sm text-justify text-gray-600 mt-2">{description.slice(0,100)+'... Read more'}</h2>
                <p className='text-lg text-sky-500 font-semibold mt-2'>Price: {price}</p>
                <div className='flex items-center justify-between'>
                    <p className='text-lg text-sky-500 font-semibold'>Duration: {duration}</p>
                    {/* <Link to={`/checkout/${_id}`} className="text-red-600 text-lg"><FaAngleDoubleRight/></Link> */}
                    <button className="px-2 py-2 font-semibold rounded dark:bg-sky-400 text-white"><Link to={`/services/${_id}`}>View Details</Link></button> 
                </div>
            </div>
        </div>
    );
};

export default HomeServiceCard;