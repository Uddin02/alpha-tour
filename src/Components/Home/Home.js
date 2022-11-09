import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/banner.png';
import useTitle from '../../hooks/useTitle';
import FAQ from './FAQ';
import HomeServices from './HomeServices';

const Home = () => {
    useTitle('Home')
    return (
        <div className='mt-4'>
            <div className="lg:flex flex-row-reverse justify-center items-center">
                <img className="lg:w-4/12" src={image} alt="" />
                <div className="lg:w-6/12 mx-2">
                    <p className="font-bold md:text-2xl lg:text-7xl text-gray-800">Life is short<br/> and the world<br/> is wide!!</p>
                    <p className="mt-4 lg:w-7/12 lg:text-2xl text-gray-800 text-justify">
                        To get of your best adventure you just need to leave and go where you like.
                    </p>
                </div>
            </div>
            <div className="my-4 mx-1 grid">
                <p className="lg:text-5xl text-gray-800 mb-14 lg:ml-32">
                    <span className="border-b-4 border-gray-600">Discover</span> my services
                </p>
                <HomeServices/>
                <button className="px-3 py-2 mx-auto font-semibold rounded dark:bg-gray-800 text-white"><Link to='/services'>View All Services</Link></button>
            </div>
            <div className="my-4 mx-2">
                <FAQ/>
            </div>

        </div>
    );
};

export default Home;