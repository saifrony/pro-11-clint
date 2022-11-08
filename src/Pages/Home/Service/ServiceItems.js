import React from 'react';

const ServiceItems = ({user}) => {
  const {id,name,img,rating,details,price}=user;
    return (
      <div className="">
        <div className="card w-96 bg-base-100 shadow-xl ">
        <figure><img src={img} alt={name} /></figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
          </h2>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">{price}</div> 
            <div className="badge badge-outline">{rating}</div>
          </div>
        </div>
      </div>
      </div>
    );
};

export default ServiceItems;