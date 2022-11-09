import React, { useEffect, useState } from 'react';
import ServiceCard from './Home/Home/ServiceCard';

const Service = () => {
    const[users,setUser]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then((res)=>res.json())
        .then((data)=>setUser(data))
    }
    ,[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 p-5'>
          
            {
                users.map(user=><ServiceCard key={user._id} user={user}></ServiceCard>)
            }
        </div>
    );
};

export default Service;