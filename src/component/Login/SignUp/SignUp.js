import React from 'react';
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
import { Link } from 'react-router-dom';
import Navbar from '../../Home/Navbar/Navbar';
import regImg from '../../../images/register.png'
const SignUp = () => {

    const {
        register,
        reset,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
    //   const history = useHistory();
      const onSubmit = (data) => {
        console.log(data);
        
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
                {/* {user?.email && (
                  <Alert variant="success">
                    <Alert.Link href="#">an example link</Alert.Link>. User
                    created successfully
                  </Alert>
                )} */}
                {/* {error && <Alert variant="warning">{error}</Alert>} */}
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