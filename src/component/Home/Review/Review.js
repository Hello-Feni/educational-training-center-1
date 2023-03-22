import React, { useEffect, useState } from 'react';
import ReviewCard from '../ReviewCard/ReviewCard';



const Review = () => {

    const [review,setReviews]=useState([]);
    
    console.log(review);
    
        useEffect(() =>{
                fetch('http://localhost:5000/reviews')
                .then(res=>res.json())
                .then(data=>setReviews(data))
                
           },[])

    return (
        <section className="bg-light">
        <div className="container">
            <div className="section-header mt-3 my-5">
                <h3 className="text-primary text-uppercase text-center m-3 fw-bold">Student Review</h3>
                
            </div>
            <div className="row d-flex justify-content-center">
                 {
                    review.map(testimonial => <ReviewCard testimonial={testimonial} key={testimonial._id}/>)
                 }
             </div>
        </div>
    </section>
    );
};

export default Review;