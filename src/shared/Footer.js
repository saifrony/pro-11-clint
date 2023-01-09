import React from 'react';
import { Link } from 'react-router-dom';
import img2 from '../assat/2.jpg'

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-red-200 text-base-content">
  <div>
   
    <img className='m-2' src={img2} alt=''/>
    <p>Visa Center<br/>Providing reliable tech since 1991</p>
  </div> 
  <div>
    <span className="footer-title">Services</span> 
    <Link to='/' className="link link-hover">Branding</Link> 
    <Link className="link link-hover">Design</Link> 
    <Link className="link link-hover">Marketing</Link> 
    <Link className="link link-hover">Advertisement</Link>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <Link className="link link-hover">About us</Link> 
    <Link className="link link-hover">Contact</Link> 
    <Link className="link link-hover">Jobs</Link> 
    <Link className="link link-hover">Press kit</Link>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <Link className="link link-hover">Terms of use</Link> 
    <Link className="link link-hover">Privacy policy</Link> 
    <Link className="link link-hover">Cookie policy</Link>
  </div>
</footer>
        </div>
    );
};

export default Footer;