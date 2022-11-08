import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleLogin = event=>{
        event.preventDefault();
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row gap-14">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">Welcome lets you share a place to stay, connect with travellers, meet up and find accommodation on your journey. It is and will always be a free, open source, not-for-profit, democratic community.</p>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onClick={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" placeholder="email" name='email' className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" />
          <label className="label">
            <Link className="label-text-alt link link-hover" >Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
            <input className="btn btn-primary" type='submit' value='login'/>
          
        </div>
        <p>If don't have an Account please<Link to='/signup' className='m-3 text-yellow-500'>SignUp</Link></p>
      </form>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;