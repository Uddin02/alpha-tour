import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import image from '../../../assets/Feedback.png';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';

const AddReview = () => {
    const { user } = useContext(AuthContext);

        // const { user } = useContext(AuthContext);
    
        const {_id} = useLoaderData()
        // console.log(_id);
    
        const handlePlaceOrder = event =>{
            event.preventDefault();
            const form = event.target;
            const name = user?.displayName ;
            const image = user?.photoURL;
            // const email = user?.email || 'uregistered';
            const message = form.message.value;
            
            const review = {
                id: _id,
                name,
                review: message,
                image
            }
       
            fetch('http://localhost:5000/reviews/', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(review)
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.acknowledged){
                        Swal.fire('Review added succesfully','','success')
                        form.reset();
                    }
                })
                .catch(err => console.log(err))
        }
    
    return (
        <div className="grid max-w-screen-xl items-center grid-cols-1 mb-5 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
            <div className="flex flex-col justify-between">
                <div className="space-y-2">
                    <h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's add a review!</h2>
                </div>
                <img src={image} alt="" className="p-6 h-auto " />
            </div>
            <form onSubmit={handlePlaceOrder} noValidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div>
                    <label htmlFor="name" className="text-sm">Full name</label>
                    <input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-600" defaultValue={user?.displayName} readOnly />
                </div>
                <div>
                    <label htmlFor="text" className="text-sm">Image Url</label>
                    <input id="text" type="text" className="w-full p-3 rounded dark:bg-gray-600" defaultValue={user?.photoURL} readOnly />
                </div>
                <div>
                    <label htmlFor="message" className="text-sm">Feedback</label>
                    <textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-600"></textarea>
                </div>
                <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-gray-700 dark:text-gray-200">Send Feedback</button>
            </form>
        </div>
    );
};

export default AddReview;