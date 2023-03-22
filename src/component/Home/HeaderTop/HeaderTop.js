import React from 'react';
import image from '../../../images/banner.jpg'
import image1 from '../../../images/Computer.jpg'
import './HeaderTop.css'
import 'bootstrap/dist/js/bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

const HeaderTop = () => {
    return (
     


        <div style={{height:'450px', width:'100%'}} className="bg-light  bg">
            
            <section className="container-fluid justify-content-center row mt-2 ">
            <div className=" col-md-5 mt-5">

                 <img style={{height:'350px', width:'100%'}} src={image} alt=""/>



                 
            </div>
            


            <div className="col-md-4 mt-5">
                <h1 className="fs-1 fw-bold text-primary mt-5">Best Quality Trining Center</h1>
                <div style={{textAlign:'center' ,textColor:'blue'}}>


</div>


                <p className="text-secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                 molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum</p>
                <button className="btn btn-primary">Learn More</button>
            </div>
        </section>

        </div>
    );
};

export default HeaderTop;