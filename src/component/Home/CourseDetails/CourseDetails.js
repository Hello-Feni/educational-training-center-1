import React from 'react';
import { Button } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import './CourseDetails.css'


const CourseDetails = ({course}) => {
    console.log(course)
    return (
        <div className="col-md-4 text-center pt-5 animation">
            <img className="img" style={{height:'50px'}} src={course.imageURL} alt=""/>
            <h4 className="pt-3">{course.name}</h4>
                <p className="text-secondary">{course.description}</p>
         <Link to={`/CourseInfo/${course._id}`}><Button type="submit" class="btn btn-primary me-3">Learn More</Button></Link>
         <Link to={'/dashboard'}><Button type="submit" class="btn btn-primary ">Registration Now</Button></Link>
            
            
        </div>
    );
};

export default CourseDetails;