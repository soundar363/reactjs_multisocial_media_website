// src/components/Home.js
import React from 'react';
import './Home.css';
import bg from './images/bg.avif';
const Home = () => {
  return (
    <div>
       <div className='header'>
      <h1>@Multi Social Media.com</h1>
         </div>
      
         {/* <img src={bg} className='body'/> */}
         <div className="form-container">
        
            <form className="form-content">
                <h2>Create New Account</h2>
                <div className="input-group">
                    <label>Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="input-group">
                    <label>Full Name</label>
                    <input type="text" name="fullname" required />
                </div>
                <div className="input-group">
                    <label>Username</label>
                    <input type="text" name="username" required />
                </div>
                <div className="input-group">
                    <label>Password</label>
                    <input type="password" name="password" required />
                </div>
                <button type="submit" className="btn">Sign Up</button>
            </form>
        </div> 
       </div>

    
  );
};

export default Home;