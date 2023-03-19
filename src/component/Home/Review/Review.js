import React, { useEffect, useState } from 'react';
import image1 from '../../../images/5.png'
import image2 from '../../../images/6.png'
import image3 from '../../../images/3.png'
import ReviewCard from '../ReviewCard/ReviewCard';


const TestimonialData=[
    {
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
        name:'Olivia',
        image:image1,
        student:'GUB'
    },
    {
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
        name:'Charlotte',
        image:image2,
        student:'IUBT'
    },
    {
        description:'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution',
        name:'Elizabeth',
        image:image3,
        student:'EUB'
    }
]


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