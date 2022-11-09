import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetail = () => {
    const { description, duration, price, service_img, service_name } = useLoaderData();
    return (
    <div className="p-5 mx-auto sm:p-10 md:p-16  dark:text-gray-800">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
            <img src={service_img} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
            <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-gray-900">
                <div className="space-y-2">
                    <p className="inline-block text-2xl text-gray-300 font-semibold sm:text-3xl">{service_name}</p>
                    <p className="text-md dark:text-gray-300 text-justify">{description}</p>
                </div>
                <div className="dark:text-gray-100 flex justify-between">
                    <p>Duration: {duration}</p>
                    <p>Price: {price}</p>
                </div>
            </div>
        </div>
    </div>
    );
};

export default ServiceDetail;