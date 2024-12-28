import React from 'react'
import '../css/Footer.css';
const Footer = () => {
    return (
        <>
            <footer className="footer-distributed">

                <div className="footer-left">

                    <h3>Blog<span className='span'>E</span><span>Dastan</span></h3>

                    <p className="footer-links">
                        <a href="#" className="link-1">Home</a>

                        <a href="#">Blog</a>

                        <a href="#">Pricing</a>

                        <a href="#">About</a>

                        <a href="#">Faq</a>

                        <a href="#">Contact</a>
                    </p>

                    <p className="footer-company-name">Made with 💓 by Shray ©️ 2024</p>
                </div>

                <div className="footer-center">

                    <div>
                        <i className="fa fa-map-marker"></i>
                        <p><span>444 S. Cedros Ave</span> Unknown Beach, Uttar Pradesh</p>
                    </div>

                    <div>
                        <i className="fa fa-phone"></i>
                        <p>+91 9789348923</p>
                    </div>

                    <div>
                        <i className="fa fa-envelope"></i>
                        <p><a href="mailto:shray@gupta.com">shray@gupta.com</a></p>
                    </div>

                </div>

                <div className="footer-right">

                    <p className="footer-company-about">
                        <span>About me </span>
                        I'm a group of single person making life simple , straight forward and flexible for others.
                    </p>

                    <div className="footer-icons">

                        <a href="#"><i className="fab fa-facebook"></i></a>
                        <a href="#"><i className="fab fa-twitter"></i></a>
                        <a href="#"><i className="fab fa-linkedin"></i></a>
                        <a href="#"><i className="fab fa-github"></i></a>

                    </div>

                </div>

            </footer>
        </>
    )
}

export default Footer