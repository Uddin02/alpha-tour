import React from 'react';
import Swal from 'sweetalert2';
import image from '../../assets/Add-notes.png';

const AddServices = () => {
     
        const handleAddService = event =>{
            event.preventDefault();
            const form = event.target;
            const serviceID = form.service_id.value;
            const serviceName = form.service_name.value;
            const duration = form.duration.value;
            const serviceImg = form.service_img.value;
            const price = form.price.value;
            const description = form.description.value;
            console.log(serviceID );
            
            const service = {
                id: serviceID,
                service_name: serviceName,
                service_img: serviceImg,
                duration,
                price,
                description
            }
       
            fetch('http://localhost:5000/services/', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(service)
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
            <form onSubmit={handleAddService} noValidate="" className="space-y-6 ng-untouched ng-pristine ng-valid">
                <div>
                    <label htmlFor="service_id" className="text-sm">Service ID</label>
                    <input id="service_id" type="number" placeholder="" className="w-full p-3 rounded dark:bg-gray-600"  />
                </div>
                <div>
                    <label htmlFor="service_name" className="text-sm">Service name</label>
                    <input id="service_name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-600"  />
                </div>
                <div>
                    <label htmlFor="duration" className="text-sm">Duration</label>
                    <input id="duration" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-600"  />
                </div>
                <div>
                    <label htmlFor="service_img" className="text-sm">Service img URL</label>
                    <input id="service_img" type="text" className="w-full p-3 rounded dark:bg-gray-600"  />
                </div>
                <div>
                    <label htmlFor="price" className="text-sm">Price</label>
                    <input id="price" type="text" className="w-full p-3 rounded dark:bg-gray-600"  />
                </div>
                <div>
                    <label htmlFor="description" className="text-sm">Description</label>
                    <textarea id="description" rows="3" className="w-full p-3 rounded dark:bg-gray-600"></textarea>
                </div>

               <button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-gray-700 dark:text-gray-200">Add a service</button>
                    
            </form>
        </div>
    );
};

export default AddServices;