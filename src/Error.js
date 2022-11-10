import React from 'react';
import { Link } from 'react-router-dom';

const error = () => {
    return (
        <div>
            <h2 className='mt-20 text-red-600 text-center text-4xl'>Error this page</h2>
            <p className='text-red-900 text-6xl text-center'>404</p>
            <p className='text-green-900  text-center'><Link to='/'>click here</Link></p>
        </div>
    );
};

export default error;