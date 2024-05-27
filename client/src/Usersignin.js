import React from 'react';
import { useState } from 'react';

const Usersignin = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here, like sending data to a server
        console.log(formData);
      };
    
      return (
        <div className="signin-container">
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit}>
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
            <button type="submit">Sign In</button>
          </form>
        </div>
      );
    };

export default Usersignin