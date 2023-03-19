import React, { useEffect, useState } from 'react';
import CourseDetails from '../CourseDetails/CourseDetails';
import './Course.css'

const Course = () => {

    const [course,setCourse]=useState([]);
    
console.log(course);

    useEffect(() =>{
            fetch('http://localhost:5000/courses')
            .then(res=>res.json())
            .then(data=>setCourse(data))
            
       },[])


    return (
        <section className="services-container">
        <div className="text-center mt-3"> 
        <h4 className="text-primary responsive">Popular Course</h4>
        <h1 className="mt-3 responsive">Course We Provide</h1>
        </div>

        <div className=" d-flex justify-content-center">
          <div className="w-75 row">
          {
          course.map(course=><CourseDetails course={course} key={course._id}></CourseDetails>)  
          }
          </div>
   </div>


   </section>
    );
};

export default Course;