import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const CourseInfo = () => {
    const { _id } = useParams();

  const [course, setCourse] = useState({});
  useEffect(() => {
    fetch(`http://localhost:5000/CourseInfo/${_id}`)
      .then((res) => res.json())
      .then((data) => setCourse(data));
     
  }, []);
    return (
        <div>
            <h1>{course?.name}</h1>
            <Link to="/">Home</Link>
        </div>
    );
};

export default CourseInfo;