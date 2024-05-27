import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Policesignup.css';

const Policesignup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
      });
      const [isSignIn, setIsSignIn] = useState(false);
      const navigate = useNavigate();
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, like sending data to a server
        console.log(formData);
        // Assuming sign-up is successful, redirect to the dashboard
        navigate('/policedashboard');
      };
    
      const handleSignInClick = () => {
        setIsSignIn(true);
      };
      
      return (
        <div className="form-container">
          <h2>{isSignIn ? 'Sign In' : 'Sign Up'}</h2>
          <form onSubmit={handleSubmit}>
            {!isSignIn && (
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Username"
              />
            )}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
            />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
            />
            <button type="submit">{isSignIn ? 'Sign In' : 'Sign Up'}</button>
          </form>
          <p>
            {isSignIn ? 'Don\'t have an account? ' : 'Already have an account? '}
            <a href="#!" onClick={() => setIsSignIn(!isSignIn)}>
              {isSignIn ? 'Sign Up' : 'Sign In'}
            </a>
          </p>
        </div>
      );
    };

export default Policesignup