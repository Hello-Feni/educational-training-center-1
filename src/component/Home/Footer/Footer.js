import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';
import FooterCol from '../FooterCol/FooterCol';


const Footer = () => {
    const noNamed = [
        {name: "Our All Student" , link: "/student"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Our All Course" , link: "/allCourse"},
        
    ]
    const ourAddress = [
        {name: "Mirpur-11 - 1250 Dhaka" , link: "//google.com/map"},
        {name: "Bangladesh" , link: "//google.com/map"},
       
    ]
    
    const Course = [
        {name: "Javascript" , link: "/js"},
        {name: "React" , link: "/React"},
        {name: "Python" , link: "/Python"},
        {name: "MS Word" , link: "/Ms-Word"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"},
        {name: "Check Up" , link: "/checkup"}
    ]
    return (
        <footer className="footer-area clear-both foot ">
            <div className="container pt-5 ">
                <div className="row py-5 justify-content-center text-white ">
                    <FooterCol key={1} menuTitle={" "} menuItems={noNamed}/>
                    <FooterCol key={2} menuTitle="Course" menuItems={Course}/>
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6 className="text-primary">Call now</h6>
                            <button className="btn btn-primary">+5654657945</button>
                        </div>
                    </FooterCol>
                </div>
                <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
            </div>
        </footer>
        
    );
};

export default Footer;