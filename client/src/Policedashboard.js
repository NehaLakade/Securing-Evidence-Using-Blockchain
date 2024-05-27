import React from 'react';
import { useNavigate } from 'react-router-dom';
import Searchevidence from './Searchevidence';
import EditEvidenceForm from './EditEvidenceForm';

import './Policedashboard.css';

const Policedashboard = () => {
    const navigate = useNavigate();
    
      const handleSearchClick = () => {
        navigate('/searchevi');
      };
    
      const handleManageClick = () => {
        navigate('/addevi');
      };
    
      const handleLogout = () => {
        // Perform logout logic here (e.g., clear user session)
        // Redirect to signin page after logout
        navigate('/');
      };
    
      return (
        <div className='policedashboard-container'>
      <h1 className='policedashboard-heading'>Welcome to the Police Dashboard</h1>
      <p>Explore the features below:</p>
      <button className='policedashboard-button' onClick={handleSearchClick}>Search Evidence</button>
      <button className='policedashboard-button' onClick={handleLogout}>Logout</button>
    </div>
      );
    };
    
    

export default Policedashboard