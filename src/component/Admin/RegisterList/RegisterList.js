import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import AddMinSidebar from '../AddMinSidebar/AddMinSidebar';
import './RegisterList.css'

const RegisterList = () => {

    const [registration,setRegistration]=useState([]);
    const [loggedInUser,setLoggedInUser]= useContext(UserContext);
    useEffect(() => {
        fetch('http://localhost:5000/Registrations')
        .then(res=>res.json())
        .then(data=>setRegistration(data))
    },[])



    return (
        <div className="bg-light mt-5 row registerList">
           
            <div className="col-md-2">
            <AddMinSidebar></AddMinSidebar>
            </div>
    <div className="col-md-7">
    <h1>Register List</h1>
    <h5 className="text-primary">Total Registration : {registration.length}</h5>
    {
      registration.map(data => 
<table style={{width:"800px"}} class="table">
  <thead class="thead-dark">
    <tr style={{width:"800px"}}>
      <th scope="col">Name</th>
      <th scope="col">Course</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  
  <tbody>
    <tr>
      <th scope="row">{data.name}</th>
      <td>{data.course}</td>
      <td>{data.email}</td>
      <td>{data.phone}</td>
    </tr>
    
  </tbody>
</table>
)  
    }
    </div>
    </div>
    );
};

export default RegisterList;