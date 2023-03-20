import React from 'react';
import Blog from '../Blog/Blog';
import Course from '../Course/Course';
<<<<<<< HEAD
=======
import Footer from '../Footer/Footer';
>>>>>>> main

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
            
            
        </div>
    );
};

export default Home;