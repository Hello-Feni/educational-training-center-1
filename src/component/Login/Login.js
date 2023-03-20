
import firebase from "firebase/app";
import "firebase/auth";
import {UserContext} from '../../App'
import { useHistory, useLocation } from 'react-router';
import './Login.css'
import firebaseConfig from './FirebaseConfig';
import { useContext, useEffect} from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {faGooglePlusG} from '@fortawesome/free-brands-svg-icons';
import Navbar from "../Home/Navbar/Navbar";
import loginImg from './../../images/login.jpg';
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";




if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);;
 }else {
    firebase.app();
 }


const Login = () => {

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
    var provider = new firebase.auth.GoogleAuthProvider();
   const [loggedInUser,setLoggedInUser]=useContext(UserContext);
   const history=useHistory();
   const location=useLocation();
   let { from } = location.state || { from: { pathname: "/" } };

   const handleGoogleSingIn =()=>{
    firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    // console.log(result);
      const {displayName,email}=result.user;
      const singedInUser={name:displayName,email}
    setLoggedInUser(singedInUser)
    history.replace(from)
    
  }).catch((error) => {
    console.log(error);
    
  });

}

useEffect(()=>{
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
    
      var uid = user.uid;
      // ...
      setLoggedInUser(user)
    } else {
      // User is signed out
      // ...
    }
  });
},[])
const onSubmit = (data) => {
  const email = data.email;
  const password = data.password;
  // console.log(data);
  firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    history.replace(from);
    alert("login ");
    // console.log(user);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
  });
};
    return (
        <div>
       
          <Navbar></Navbar>
    <Container>
      <Row className="d-flex justify-content-center align-items-center ">
        <Col sm={12} md={6} lg={6}>
          <h1 className="text-center">Please Login</h1>
          <div className="login-box  m-auto mt-3">
            <div className=" d-flex justify-content-center align-items-center">
              <div className="login-form mx-auto text-center">
                <form onSubmit={handleSubmit(onSubmit)}>
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
                    value="Login"
                    className="w-100 p-2 m-2"
                  />
                </form>
                <Link style={{ textDecoration: "none" }} to="/SignUp">
                  <Button variant="text">New user? Please Register</Button>
                </Link>
                <p>------------------------------------</p>
                <Button
                  onClick={handleGoogleSingIn}
                  className="btn-primary"
                  variant="primary"
                >
                  <span>
                    <i class="fab fa-google"></i>
                  </span>{" "}
                  Google sign in
                </Button>
                {/* {isLoading && (
                  <div className="mx-auto text-center">
                    <Spinner animation="border" variant="primary" />
                  </div>
                )} */}
                {/* {user?.email && (
                  <Alert variant="success">
                    <Alert.Link href="#">an example link</Alert.Link>. User
                    created successfully
                  </Alert>
                )}
                {error && <Alert variant="warning">{error}</Alert>} */}
              </div>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          {" "}
          <div className="mt-2">
            <Image style={{ width: "100%" }} src={loginImg} />
           
          </div>
        </Col>
      </Row>
    </Container>
        </div>
    );
};

export default Login;

