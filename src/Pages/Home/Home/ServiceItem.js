import React, { useEffect, useState } from 'react';
import ServiceItems from './ServiceItems';

const ServiceItem = () => {

    const[items,setItem]=useState([]);
    useEffect(()=>{
        fetch('https://visa-server-2.vercel.app/services')
        .then((res)=>res.json())
        .then((data)=>setItem(data))
    }
    ,[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-20 p-5'>
            
          
            {
                items.map(item=> <ServiceItems key={item._id} item={item}></ServiceItems>)
            }


            
        </div>
    );
};

export default ServiceItem;