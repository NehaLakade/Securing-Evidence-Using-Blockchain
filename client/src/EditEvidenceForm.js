import React, { useState } from 'react';
import Searchevidence from './Searchevidence';

const EditEvidenceForm = ({ evidenceData, onSave }) => {
  const [formData, setFormData] = useState(evidenceData);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = e => {
    const file = e.target.files[0];
    setFormData({ ...formData, file });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div>
      <h2>Edit Evidence</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Evidence ID:</label>
          <input type="text" name="evidenceID" value={formData.evidenceID} onChange={handleChange} />
        </div>
        <div>
          <label>Case Number:</label>
          <input type="text" name="caseNumber" value={formData.caseNumber} onChange={handleChange} />
        </div>
        {/* Add more fields as needed */}
        <div>
          <label>Police Investigation Officer:</label>
          <input type="text" name="policeOfficer" value={formData.policeOfficer} onChange={handleChange} />
        </div>
        <div>
          <label>Additional Evidence File:</label>
          <input type="file" accept=".pdf,.doc,.docx,.jpg,.png" onChange={handleFileChange} />
        </div>
        <button type="submit">Save Changes</button>
      </form>
    </div>
  );
};

export default EditEvidenceForm;
