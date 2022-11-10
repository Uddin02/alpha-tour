import React, { useContext, useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../context/AuthProvider/AuthProvider';
import MyReviewCards from './MyReviewCards';


const MyReviews = () => {

    const {user} = useContext(AuthContext);

    const [myReviews, setMyReviews] = useState([])
    // console.log(myReviews);
    
    useEffect(()=>{
        fetch(`http://localhost:5000/review?email=${user?.email}`)
        .then(res => res.json())
        .then(data => setMyReviews(data))
    },[user?.email])

    const handleDelete = id =>{
        const proceed = window.confirm('Are you sure you want to remove this review!!');
        
        if(proceed){
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                if (data.deletedCount > 0){
                    Swal.fire('Successfully deleted one review','','success');
                    const remaining = myReviews.filter(myReview => myReview._id !== id);
                    setMyReviews(remaining);
                }
            })
        }
    }

    return (
        <div>
            <div className='mt-5'>
                {
                    myReviews?.length ? <h2 className="text-xl text-center">You have {myReviews?.length} reviews</h2> : <h2 className='text-xl text-center'>You have no reviews yet</h2> 
                }
            </div>
            
            <div>
                {
                   <div className="overflow-x-auto w-full my-10"> 
                        <table className="table w-full">
                            <tbody>
                                {
                                    myReviews.map(myReview => <MyReviewCards
                                        key={myReview._id}
                                        myReview={myReview}
                                        handleDelete={handleDelete}
                                        // handleStatusUpdate={handleStatusUpdate}
                                    ></MyReviewCards>)
                                }
                            </tbody>
                        </table>
                    </div>
                }
            </div>
            
        </div>
    );
};

export default MyReviews;