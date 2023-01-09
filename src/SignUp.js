import React from 'react';
import { useContext } from 'react';

import { Link } from 'react-router-dom';
import { AuthContext } from './contexts/AuthProvider/AuthProvider';




const SignUp = () => {
  
  const {createUser,signInWithGoogle}=useContext(AuthContext);

  const handleGoogle = () =>{
    signInWithGoogle()
    .then(result=>{
      const user = result.user;
      console.log(user);
  
    })
    .catch(error=>{
      console.error(error);
    })
  }

    const handleSignup = event=>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name,email,password)

        createUser(email,password)
        .then(result=>{
        const user = result.user;
       console.log('register user',user)
         form.reset();
  })
  .catch(error=>{
    console.error(error);
})

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse gap-14">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">SignUp now!</h1>
      <p className="py-6">Welcome lets you share a place to stay, connect with travellers, meet up and find accommodation on your journey. It is and will always be a free, open source, not-for-profit, democratic community.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleSignup} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" name='name' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" />
          
        </div>
        <div className="form-control mt-6">
        <input className="btn btn-primary" type='submit' value='SignUp'/>
        </div>
        <p>Already have an Account please<Link to='/login' className='m-3 text-yellow-500'>Login</Link></p>
      </form>
      <div className='text-center'>
    <p>Signup with social accounts</p>
    <button onClick={ handleGoogle} className='btn btn-outline text-primary '>Google</button>
    <button  className='btn btn-outline text-primary  m-2'>Githab</button>
    <button  className='btn btn-outline text-primary  '>Twitter</button>
    </div>
    
    </div>
  </div>
</div>
        </div>
    );
};

export default SignUp;