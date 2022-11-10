import React from 'react';

const ServiceCard = ({user}) => {
    const{name,img,rating,details,price} =user

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">
      {name}
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>{details}</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Price: {price}</div> 
      <div className="badge badge-outline">Rating: {rating}</div>
    </div>
  </div>
</div>
        </div>
    );
};

export default ServiceCard;