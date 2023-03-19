import React, { useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import {UserContext} from '../../../App'
import firebaseConfig from './../FirebaseConfig';
import { useContext} from "react";
import {
    Col,
    Container,
    Image,
    Row,
    Button,
    Spinner,
    Alert,
  } from "react-bootstrap";
import { useForm } from 'react-hook-form';
import { Link, useHistory, useLocation } from 'react-router-dom';
import Navbar from '../../Home/Navbar/Navbar';
import regImg from '../../../images/register.png';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);;
 }else {
    firebase.app();
 }
const SignUp = () => {
    const [loggedInUser,setLoggedInUser]=useContext(UserContext);
    // const [user,setUser] = useState({});
    const [success,setSuccess]= useState(false);
    const [error,setError]= useState('');
    const history=useHistory();
   const location=useLocation();
   let { from } = location.state || { from: { pathname: "/" } };
    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
    //   const history = useHistory();
      const onSubmit = (data) => {
        reset();
        // console.log(data);
        const name = data.name;
        // console.log(name)
        const email = data.email;
        const password = data.password;
        firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    // setSuccess(false)
    const newUser = { email,password, displayName: name };
    var user = userCredential.user;
    console.log(newUser);
    setLoggedInUser(newUser);
    setSuccess("User Created Succesfully.");
    alert("User Created Succesfully.")
    // history.replace(from);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    setError(error.message) ;
    // ..
  });
        
      };
    return (
        <div>
            <Navbar></Navbar>
             <Container>
      <Row className="d-flex justify-content-center align-items-center ">
        <Col sm={12} md={6} lg={6}>
          <h1 className='mt-5 text-center'>Please Register</h1>
          <div className="login-box  m-auto mt-3">
            <div className=" d-flex justify-content-center align-items-center">
              <div className="login-form mx-auto text-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    {...register("name")}
                    placeholder="Your Name"
                    className="p-2 m-2 w-100"
                  />
                     <br />
                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Your Email"
                    className="p-2 m-2 w-100"
                  />
                      <br />
                  <input
                    {...register("password")}
                    type="password"
                    placeholder="Your Password"
                    className="p-2 m-2 w-100"
                  />

                  <br />
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}

                  <input
                    type="submit"
                    value="Register"
                    className="btn-primary p-2 m-2 w-100"
                  />
                </form>
                {/* {isLoading && (
                  <div className="mx-auto text-center">
                    <Spinner animation="border" variant="primary " />
                  </div>
                )} */}
                 {success && (
                  <Alert variant="success">
                  {success}
                  </Alert>
                )} 
                {error && <Alert variant="warning">{error}</Alert>} 
                <Link style={{ textDecoration: "none" }} to="/Login">
                  <Button variant="text">
                    Already Registered? Please Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          {" "}
          <div className="p-5">
            <Image style={{ width: "100%" }} src={regImg} />
          </div>
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default SignUp;