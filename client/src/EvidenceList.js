import React from 'react';
import './EvidenceList.css'

const EvidenceList = ({ evidenceData }) => {
  return (
    <div>
      <h2>Evidence List</h2>
      <table>
        <thead>
          <tr>
            <th>Evidence ID</th>
            <th>Case Number</th>
            <th>Created Date</th>
            <th>Evidence Type</th>
            <th>Description</th>
            <th>Evidence File</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>198</td>
            <td>23/4/2024</td>
            <td>Image</td>
            <td>Murder</td>
            <td>Loading</td>
          </tr>
          <tr>
            <td>2</td>
            <td>199</td>
            <td>1/5/2024</td>
            <td>Image</td>
            <td>Chain Snatching</td>
            <td>Loading</td>
          </tr>
          <tr>
            <td>3</td>
            <td>200</td>
            <td>3/5/2024</td>
            <td>Image</td>
            <td>Robbery</td>
            <td>Loading</td>
          </tr>
        </tbody>  
      </table>
      <button onClick={downloadEvidence}>Download</button>
    </div>
  );
}

const downloadEvidence = () => {
  // Code for downloading evidence files
  alert('Downloading evidence files...');
}

export default EvidenceList;
