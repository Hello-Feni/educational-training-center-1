import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './CourseDetails.css'


const CourseDetails = ({course}) => {
    
    return (
        <div className="col-md-4 text-center pt-5 animation">
            <img className="img" style={{height:'50px'}} src={course.imageURL} alt=""/>
            <h4 className="pt-3">{course.name}</h4>
                <p className="text-secondary">{course.description}</p>
            <Link to={'/dashboard'}><button type="submit" class="btn btn-primary">Registration Now</button></Link>
            
        </div>
    );
};

export default CourseDetails;