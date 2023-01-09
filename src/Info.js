import React from 'react';

const Info = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://mir-s3-cdn-cf.behance.net/projects/404/a0fba3136490727.Y3JvcCw1MDAwLDM5MTAsMCw0OQ.jpg")` }}>
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Beautiful Bangladesh</h1>
            <p className="mb-5">Bangladesh, country of south-central Asia, located in the delta of the Padma (Ganges [Ganga]) and Jamuna (Brahmaputra) rivers in the northeastern part of the Indian subcontinent. The riverine country of Bangladesh (“Land of the Bengals”) is one of the most densely populated countries in the world, and its people are predominantly Muslim.</p>
            <button className="btn btn-primary">EXPLORE BANGLADESH</button>
          </div>
        </div>
      </div>
    );
};

export default Info;