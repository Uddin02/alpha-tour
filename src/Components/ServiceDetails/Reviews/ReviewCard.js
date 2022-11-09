import React from 'react';

const ReviewCard = ({userReview}) => {
    const { name, image, review } = userReview;
    // console.log(userReview);
    return (     
        <div className="flex flex-col justify-center w-full px-8 mx-6 my-12 text-center rounded-md md:w-96 lg:w-80 xl:w-64 dark:bg-gray-800 dark:text-gray-100">
            <img alt="" className="self-center flex-shrink-0 w-32 h-32 -mt-12 bg-center bg-cover rounded-full dark:bg-gray-500" src={image} />
            <div className="flex-1 my-4">
                <p className="text-xl font-semibold leading-snug">{name}</p>
                <p>{review}</p>
            </div>
        </div>
    );
};

export default ReviewCard;