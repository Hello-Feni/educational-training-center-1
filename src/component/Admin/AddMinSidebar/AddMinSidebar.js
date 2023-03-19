import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faBorderAll,faTasks,faPlusCircle,faUserPlus, faGripHorizontal, faUsers } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './AddMinSidebar.css'

const AddMinSidebar = () => {
    return (
        <div className="sidebar  justify-content-between col-md-2 py-5 px-4 p-5 " style={{height:"100vh"}}>
        <ul className="list-unstyled">
        
               <li>
               <Link to="/Home" className="text-decoration-none">
                    <FontAwesomeIcon icon={faHome} /> <span>Home</span>
                    
                </Link>
               </li>
          
                <li>
                <Link to="/Register-List" className="text-decoration-none">
                    <FontAwesomeIcon icon={faBorderAll} /> <span>Register-List</span>
                    
                </Link>
                </li>
            
               <li>
               <Link to="/Add-Course" className="text-decoration-none">
                    <FontAwesomeIcon icon={faPlusCircle} /> <span>Add-Course</span> 
                    
                    
                </Link>
               </li>
            
                <li>
                <Link to="/Make-Admin" className="text-decoration-none">
                    <FontAwesomeIcon icon={faUserPlus} /> <span>Make-Admin</span>
                 </Link>
                </li>

                <li>
                <Link to="/Manage-Course" className="text-decoration-none">
                    <FontAwesomeIcon icon={faTasks} /> <span>Manage-Course</span>
                    
                 </Link>
                </li>
            
            
            
        </ul>
       
    </div>
    );
};

export default AddMinSidebar;