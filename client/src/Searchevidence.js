import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const Searchevidence = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedEvidence, setSelectedEvidence] = useState(null);
    const navigate = useNavigate();
    const [investigationOfficer, setInvestigationOfficer] = useState('');

    
        const handleSearch = async () => {
            // Here you would typically perform your search logic,
            // but for the sake of this example, let's assume a successful search
            const evidence = {
                evidenceId: 3,
                caseNumber: 200,
                createdDate: '4/5/2024',
                evidenceType: 'Image',
                description: 'Robbery happened in Sai Nagar at Mehta House',
                evidenceFile: 'image1.jpg' // Assuming this is the file name or URL
            };
    
            setSelectedEvidence(evidence);
        };
    
        const handleEdit = () => {
            // You can implement edit functionality here if needed
            // For this example, let's just log a message
            console.log('Edit button clicked');
        };

        const handleAddInvestigationOfficer = () => {
            // Here you can add the functionality to save the investigation officer
            // For this example, let's just set the state with the entered value
            console.log('Investigation officer added:', investigationOfficer);
            // You can further send this data to your backend or perform any other action
        };
        return (
            <div>
                <h2>Search Evidence</h2>
                <input
                    type="text"
                    placeholder="Enter Evidence ID"
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                />
                <button onClick={handleSearch}>Search</button>
                {selectedEvidence && (
                    <div>
                        <h3>Evidence Details</h3>
                        <table>
                            <tbody>
                                <tr>
                                    <td>Evidence ID:</td>
                                    <td>{selectedEvidence.evidenceId}</td>
                                </tr>
                                <tr>
                                    <td>Case Number:</td>
                                    <td>{selectedEvidence.caseNumber}</td>
                                </tr>
                                <tr>
                                    <td>Created Date:</td>
                                    <td>{selectedEvidence.createdDate}</td>
                                </tr>
                                <tr>
                                    <td>Evidence Type:</td>
                                    <td>{selectedEvidence.evidenceType}</td>
                                </tr>
                                <tr>
                                    <td>Description:</td>
                                    <td>{selectedEvidence.description}</td>
                                </tr>
                                <tr>
                                    <td>Evidence File:</td>
                                    <td>{selectedEvidence.evidenceFile}</td>
                                </tr>
                            </tbody>
                        </table>
                        <h3>Add Investigation Officer</h3>
                    <input
                        type="text"
                        placeholder="Enter Officer Name"
                        value={investigationOfficer}
                        onChange={e => setInvestigationOfficer(e.target.value)}
                    />
                    <button onClick={handleAddInvestigationOfficer}>Add Officer</button>
                    </div>
                )}
            </div>
        );
    };

export default Searchevidence;
