import React, { useEffect, useState } from 'react';

const ServiceItem = () => {

    const[item,setItem]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then((res)=>res.json())
        .then((data)=>setItem(data))
    }
    ,[])
    return (
        <div>
            <h2>{item.length}</h2>
            
          
            {
                users.map(user=><ServiceCard key={user._id} user={user}></ServiceCard>)
            }


            
        </div>
    );
};

export default ServiceItem;