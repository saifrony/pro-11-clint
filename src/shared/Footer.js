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
    <a className="link link-hover">Marketing</a> 
    <a className="link link-hover">Advertisement</a>
  </div> 
  <div>
    <span className="footer-title">Company</span> 
    <a className="link link-hover">About us</a> 
    <a className="link link-hover">Contact</a> 
    <a className="link link-hover">Jobs</a> 
    <a className="link link-hover">Press kit</a>
  </div> 
  <div>
    <span className="footer-title">Legal</span> 
    <a className="link link-hover">Terms of use</a> 
    <a className="link link-hover">Privacy policy</a> 
    <a className="link link-hover">Cookie policy</a>
  </div>
</footer>
        </div>
    );
};

export default Footer;