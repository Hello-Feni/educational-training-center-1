import React from 'react';
import Blog from '../Blog/Blog';
import Course from '../Course/Course';
import Footer from '../Footer/Footer';
import HeaderTop from '../HeaderTop/HeaderTop';
import Navbar from '../Navbar/Navbar';
import Review from '../Review/Review';
import Trainer from '../Trainer/Trainer';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <HeaderTop></HeaderTop>
            <Course></Course>
            <Blog></Blog>
            <Trainer></Trainer>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;