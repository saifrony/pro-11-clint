import React from 'react';

const Blog = () => {
    return (
        <div className='my-5'>
            <div className="flex flex-col w-full border-opacity-50 p-3">
            <div className="grid card bg-base-300 rounded-box place-items-center mb-3 ">
                <h3>Difference between SQL and NOSQL</h3>
                <p className='text-center'>The main difference between SQL and NoSQL is that they are known as relational and non-relational database structures, respectively, that are used in different modes for implementing and manipulating data.</p>
            </div>
           
            <div className="grid  card bg-base-300 rounded-box place-items-center mb-3">
                <h3>What is JWT, and how does it work?</h3>
                <p className='text-center'>JSON Web Token is a proposed Internet standard for creating data with optional signature and/or optional encryption whose payload holds JSON that asserts some number of claims. The tokens are signed either using a private secret or a public/private key.</p>
                <p className='text-center'>Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User's Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.</p>
            </div>
            <div className="grid  card bg-base-300 rounded-box place-items-center mb-3 ">
                <h3>What is the difference between javascript and node js?</h3>
                <p className='text-center'>JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.</p>
            </div>
           
            <div className="grid card bg-base-300 rounded-box place-items-center mb-3">
                <h3>How does Node js handle multiple requests at the same time?</h3>
                <p className='text-center p-2'>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue. 

                If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
            </div>
            </div>

        </div>
    );
};

export default Blog;