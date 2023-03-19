import React from 'react';
import { Link } from 'react-router-dom';
import "./FooterCol.css";
import { Col, Container, Row } from "react-bootstrap";

const FooterCol = () => {
    return (
        <div className="footer-container  bg-dark text-white mt-5">
      <Container>
        <Row>
          <Col xs={12} md={6} lg={4}>
            <div className="mt-5">
              <p>
              Educational training institute is one of the training center. It is a long established fact that a reader will be distracted by the readable
              </p>
              <div className="all-icon">
                <Link to="https://www.facebook.com/">
                  <i className="fab fa-facebook"></i>
                </Link>
                <Link to="https://www.instagram.com/">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link to="https://twitter.com/home">
                  {" "}
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="https://www.youtube.com/">
                  <i className="fab fa-youtube"></i>
                </Link>
              </div>
            </div>
          </Col>

          <Col xs={12} md={6} lg={4}>
            <div className="mt-5 footer-text ">
              <h4 className="fw-bolder mb-4">Contact</h4>
              <h6>Info Desk</h6>
              <p>
                <span>
                  <i className="fas fa-envelope"></i>
                </span>{" "}
                info@bicyclebarn.com
              </p>
              <p>
                <span>
                  <i className="fas fa-phone"></i>
                </span>{" "}
                0170000000
              </p>
              <h5>Call Center</h5>
              <p>
                <span>
                  <i className="fas fa-phone"></i>
                </span>{" "}
                0170000000
              </p>
            </div>
          </Col>
          <Col xs={12} md={6} lg={4}>
            <div className="mt-5 footer-text ">
              <h4 className="fw-bolder mb-4">Address</h4>
              <h6>Bicycle Barn Location</h6>
              <p>
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                Alsiphar , Dhaka , BanglaDesh
              </p>
              <h6>Corporate Location</h6>
              <p>
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                House:412(4th floor) Road:09 Dhaka Bangladesh
              </p>
            </div>
          </Col>
        </Row>
        <p className="text-center pb-3 footer">
          <small>© 2021. Bicycle Barn</small>
        </p>
      </Container>
    </div>
    );
};

export default FooterCol;