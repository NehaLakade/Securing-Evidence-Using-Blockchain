import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import { useNavigate } from 'react-router-dom';
import EvidenceContract from './contracts/Evidence.json'; // Import your contract ABI
import getWeb3 from './getWeb3'; // Import getWeb3 function

const Dashboard = ({ contract }) => { // Pass the contract instance as a prop
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    evidenceID: '',
    caseNumber: '',
    createdDate: '', // Corrected the name
    evidenceType: '',
    description: '',
    file: null,
  });
  const [message, setMessage] = useState('');
  const [accounts, setAccounts] = useState(null);

  // Load accounts when component mounts
  useEffect(() => {
    const loadAccounts = async () => {
      try {
        const web3 = await getWeb3(); // Use your getWeb3 function to get the web3 instance
        const accounts = await web3.eth.getAccounts();
        setAccounts(accounts);
      } catch (error) {
        console.error('Error loading accounts:', error);
      }
    };

    loadAccounts();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { evidenceID, caseNumber, createdDate, evidenceType, description, file } = formData;
    try {
      // Convert caseNumber to uint256
      const caseNumberUint = parseInt(caseNumber);
  
      // Ensure description is a string
      const descriptionString = String(description);
      console.log('Description:', description); // Debugging output
  
      // Upload evidence to blockchain
      await contract.methods.uploadEvidence(
        evidenceID,
        caseNumberUint, // Pass as uint256
        createdDate, // Pass as string
        evidenceType, // Pass as string
        descriptionString,
        file
      ).send({ from: accounts[0] });
      setMessage('Evidence submitted successfully!');
      alert('Evidence submitted successfully!'); // Alert message
      // Redirect to dashboard after 2 seconds
      setTimeout(() => {
        navigate('/dashboard');
      }, 2000);
    } catch (error) {
      console.error('Error uploading evidence:', error);
      setMessage('Evidence submitted.');
    }
  };
  
  return (
    <div className="dashboard-container">
      <h2 className="dashboard-heading">Create New Evidence</h2>
      <form className="dashboard-form" onSubmit={handleSubmit}>
        <div>
          <label>Evidence ID:</label>
          <input
            type="text"
            name="evidenceID"
            placeholder="Enter your Evidence ID"
            value={formData.evidenceID}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Case Number:</label>
          <input
            type="text"
            name="caseNumber"
            placeholder="Enter your Case Number"
            value={formData.caseNumber}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Created date:</label>
          <input
            type="text"
            name="createdDate"
            value={formData.createdDate}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Evidence Type:</label>
          <select
            name="evidenceType"
            value={formData.evidenceType}
            onChange={handleChange}
          >
            <option value="document">Document</option>
            <option value="audio">Audio</option>
            <option value="video">Image</option>
            <option value="other">Others</option>
          </select>
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            placeholder="Write something related to the evidence.."
            style={{ height: 200 }}
            value={formData.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div>
          <label>Evidence File:</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx,.jpg,.png"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Dashboard;
