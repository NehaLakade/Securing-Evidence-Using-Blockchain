// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract Evidence {
    struct EvidenceData {
        uint256 evidenceId;
        string evidenceName;
        string description;
        string fileHash;
        address uploader;
        uint256 timestamp;
        uint256 caseNumber; // Add case number
        string createdDate; // Add created date
        string evidenceType; // Add evidence type
    }

    mapping(uint256 => EvidenceData) public evidenceList;
    uint256 public evidenceCount;

    event EvidenceUploaded(
        uint256 indexed evidenceId,
        string evidenceName,
        string description,
        string fileHash,
        address uploader,
        uint256 timestamp,
        uint256 caseNumber, // Add case number
        string createdDate, // Add created date
        string evidenceType // Add evidence type
    );

    constructor() public {
        evidenceCount = 0;
    }

    function uploadEvidence(
        string memory _evidenceName,
        string memory _description,
        string memory _fileHash,
        uint256 _caseNumber, // Add case number
        string memory _createdDate, // Add created date
        string memory _evidenceType // Add evidence type
    ) public {
        evidenceCount++;
        evidenceList[evidenceCount] = EvidenceData(
            evidenceCount,
            _evidenceName,
            _description,
            _fileHash,
            msg.sender,
            block.timestamp,
            _caseNumber, // Add case number
            _createdDate, // Add created date
            _evidenceType // Add evidence type
        );
        emit EvidenceUploaded(
            evidenceCount,
            _evidenceName,
            _description,
            _fileHash,
            msg.sender,
            block.timestamp,
            _caseNumber, // Add case number
            _createdDate, // Add created date
            _evidenceType // Add evidence type
        );
    }

    function getEvidence(uint256 _evidenceId) public view returns (
        uint256,
        string memory,
        string memory,
        string memory,
        address,
        uint256,
        uint256, // Add case number
        string memory, // Add created date
        string memory // Add evidence type
    ) {
        EvidenceData memory evidence = evidenceList[_evidenceId];
        return (
            evidence.evidenceId,
            evidence.evidenceName,
            evidence.description,
            evidence.fileHash,
            evidence.uploader,
            evidence.timestamp,
            evidence.caseNumber, // Add case number
            evidence.createdDate, // Add created date
            evidence.evidenceType // Add evidence type
        );
    }
}

