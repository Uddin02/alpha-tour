import React from 'react';
import FaqImage from '../../assets/FAQs.png';

const FAQ = () => {
    return (
        <div className='mt-14 mb-8'>
            <h2 className="mb-12 text-4xl font-bold leading-none lg:ml-32 lg:mr-32 sm:text-5xl">Frequently Asked Questions</h2>
            <div className='lg:flex flex-row-reverse justify-around items-center'>
                <img className='lg:w-3/12 lg:mr-32' src={FaqImage} alt="" />
                <div className="lg:w-8/12">
                    <section className=" dark:text-gray-800">
                        <div className="flex flex-col  sm:px-8  xl:px-32 ">
                            <details>
                                <summary className="py-2 outline-none cursor-pointer text-xl font-medium">Why Choose Alpha Tours?</summary>
                                <div className="px-4 pb-4 text-justify">
                                    <p>We’ve been trusted by customers around the world since 2005 to provide service they can rely on; that makes travel dreams come true in the most value-added way possible.</p>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer text-xl font-medium">What if I need to change my booking?</summary>
                                <div className="px-4 pb-4 text-justify">
                                    <p>If you wish to make any changes to your booking, particularly if you need to alter any flights booked through us, please let us know as soon as possible. There is a booking or flight amendment fee of $70 per change and flight amendments often incur extra airline costs depending on the changes to be made and if the ticket has been issued or not. All requests for changes should be referred to Customer Operations.</p>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer text-xl font-medium">What if I need to cancel or transfer my booking?</summary>
                                <div className="px-4 pb-4 space-y-2 text-justify">
                                    <p>If you need to cancel your booking, please let me know as soon as possible. This is required in writing and you should refer to the booking conditions with regards to any cancellation charges that may apply. Normally, if you cancel before the final balance is due, the deposit and insurance premium are non -refundable but we can usually hold your balance for you to use on a future trip.</p>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer text-xl font-medium">How can I pay my balance?</summary>
                                <div className="px-4 pb-4 space-y-2 text-justify">
                                    <p>You can pay the balance of your trip online here. To do this you will need your reservation number, surname of the lead passenger of the booking and date of birth. Please note that we do not accept payment by Amex. There will be no fee applied to payments made on any other card types.</p>
                                    <p>Pay us by Bank Transfer – Payments in £ Sterling should be made to Exodus Travels Ltd. Please refer to your invoice for banking details, should you wish to pay in a different currency, please contact us directly.</p>
                                </div>
                            </details>
                            <details>
                                <summary className="py-2 outline-none cursor-pointer text-xl font-medium">Documents by post or email?</summary>
                                <div className="px-4 pb-4 space-y-2 text-justify">
                                    <p>I can send your documents either by post or email. I will normally ask at the time of booking how you would like to receive them, and you can also request posted documents on the web booking form. If you have received your documents by email but would prefer post (or vice versa), please contact me by email or on 0845 863 9643 and they will be happy to resend it.</p>  
                                </div>
                            </details>
                        </div>

                    </section>
                </div>
            </div>
        </div>
        
      );
};

export default FAQ;