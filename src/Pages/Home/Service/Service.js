import React, { useEffect, useState } from 'react';
import ServiceItems from './ServiceItems';

const Service = () => {
    const [users, setUser] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res=>res.json())
        .then(data=>setUser(data))
    },[])
    return (
        <div className='grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            
            {
                users.map(user=><ServiceItems key={user._id} user={user}></ServiceItems>)
            }
        </div>
    );
};

export default Service;