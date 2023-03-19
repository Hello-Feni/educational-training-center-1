import React, { useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../../App";
import firebaseConfig from './../../Login/FirebaseConfig';
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);;
}else {
  firebase.app();
}

const Navbar = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    fetch('http://localhost:5000/admin', {
      method: 'POSt',
      headers: {'content-type': 'application/json'},
      body: JSON.stringify({email: loggedInUser.email})
    })
    .then(res =>res.json())
    .then(data =>setIsAdmin(data))

  }, []);

  const signOutUser=()=>{
    firebase.auth().signOut().then(() => {
      // Sign-out successful.
      alert('Sign-out successful.');
    }).catch((error) => {
      // An error happened.
    });
  }
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-secondary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <h3>
              <Link className="nav-link ml-5 text-white" to="/Home">
                Computer-Bangladesh
              </Link>
            </h3>
            <div class=" navbar-nav ms-auto mb-2 mb-lg-0">
             
                { <div className="d-flex">
                    <Link
                class="nav-link ms-5 text-white active"
                aria-current="page"
                href="#"
                to="/Home"
              >
                Home
              </Link>
              <Link
                class="nav-link ms-5 text-white active"
                aria-current="page"
                href="#"
                to="/dashboard"
              >
                Registration
              </Link>
              
              <Link
                class="nav-link ms-5 text-white active"
                aria-current="page"
                href="#"
                to="/Contact Us"
              >
                Contact Us
              </Link>
              <Link
                class="nav-link ms-5 text-white active"
                aria-current="page"
                href="#"
                to="/Login"
              >
                Login
              </Link>
                  </div>
                }
               
              {loggedInUser.email &&  <Link
                class="nav-link ms-5 text-white active"
                aria-current="page"
                onClick={signOutUser}
                to="/Login"
              >
                Logout
              </Link>}

                {isAdmin && 
                  <div>
                    <Link
                class="nav-link ms-5 text-white active"
                aria-current="page"
                href="#"
                to="/Admin"
              >
                Admin
              </Link>
                  </div>
                }
               

            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
