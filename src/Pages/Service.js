import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './Home/Home/ServiceCard';

const Service = () => {
    const[users,setUser]=useState([]);
    useEffect(()=>{
        fetch('https://visa-server-2.vercel.app/service')
        .then((res)=>res.json())
        .then((data)=>setUser(data))
    }
    ,[])
    return (
        <div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 p-5'>
    
          
            {
                users.map(user=><ServiceCard key={user._id} user={user}></ServiceCard>)
            }
        </div>

            <p className='text-center m-5'><Link to='/service' ><button type='button' className=' px-5 py-3 font-semibold text-center bg-green-400 m-auto rounded '>See All</button></Link></p>
        </div>
    );
};

export default Service;