import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    
    // const { reviews } = useLoaderData();

    const {_id} = useLoaderData()
    // console.log(_id);

    const [reviews, setReviews] = useState([]);

    useEffect( () =>{
        fetch(`http://localhost:5000/reviews/${_id}`)
        .then(res =>res.json())
        .then(data => setReviews(data))
    }, [_id])
    
    // console.log(reviews);
    return (
        <section className="py-6 dark:text-gray-800">
            <div className="container flex flex-col items-center justify-center p-4 mx-auto sm:p-10">
                <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">What my happy clients thought about my services</h1>
                <div className="flex flex-row flex-wrap-reverse justify-center mt-8">
                    {
                        reviews.map( userReview => <ReviewCard
                            key={userReview._id}
                            userReview={userReview}
                        ></ReviewCard>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Reviews;