import React from 'react';
import image from '../../assets/banner.png';

const Home = () => {
    return (
        <div className='mt-4'>
            <div className="lg:flex flex-row-reverse justify-center items-center">
                <img className="lg:w-4/12" src={image} alt="" />
                <div className="lg:w-6/12 mx-2">
                    <p className="font-bold md:text-2xl lg:text-7xl">Life is short<br/> and the world<br/> is wide!!</p>
                    <p className="mt-4 lg:w-7/12 lg:text-2xl text-justify">
                        To get of your best adventure you just need to leave and go where you like.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Home;