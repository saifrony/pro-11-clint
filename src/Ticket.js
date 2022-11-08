import React from 'react';
import img1 from './assat/1.jpg'

const Ticket = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row">
    <img src={img1} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">AIR Ticket Offer!</h1>
      <p className="py-6">Prices shown on this page are estimated lowest prices only. Found in the last 45 days..</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Ticket;