import React from 'react';
import { useForm } from 'react-hook-form';
import AddMinSidebar from '../AddMinSidebar/AddMinSidebar';

const MakeAdmin = () => {
    const { register, handleSubmit} = useForm();
    
  
    const onSubmit = data => {
      const eventData={
          email: data.email
          
      }
      const url =`http://localhost:5000/isAdmin`;
      
      fetch(url, {
       method:'POST',
       headers: {
           'Content-Type': 'application/json'
       },
       body: JSON.stringify(eventData)
      })
      .then(res=> console.log('server side response', res));
  
  };


    return (
        <div className="bg-light mt-5 row registerList">
           
            <div className="col-md-2">
            <AddMinSidebar></AddMinSidebar>
            </div>
    <div className="col-md-7 ">
    <h1>Make Admin</h1>
    <form className="col-md-7" onSubmit={handleSubmit(onSubmit)}>
  <div className="form-group">
       <label for="exampleInputPassword1">Email</label>
    <input type="email" className="form-control" name="email" ref={register}  placeholder="sumon@gmail.com"/>
    <button type="submit" className="btn btn-primary">Submit</button>
    </div>
    
</form>
      
    </div>
    </div>
    );
};

export default MakeAdmin;