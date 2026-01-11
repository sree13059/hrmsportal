import React, { useState } from 'react';

const Certificate = () => {
  const [certificates, setCertificates] = useState([
    { studentName: 'John Doe', class: '10', type: 'Completion', issueDate: '2025-12-01', certificateNumber: 'CERT001' },
    { studentName: 'Jane Smith', class: '10', type: 'Excellence', issueDate: '2025-12-02', certificateNumber: 'CERT002' },
    { studentName: 'Emily Johnson', class: '9', type: 'Participation', issueDate: '2025-12-03', certificateNumber: 'CERT003' }
  ]);

  const [newCertificate, setNewCertificate] = useState({
    studentName: '',
    class: '',
    type: '',
    issueDate: '',
    certificateNumber: ''
  });

  const handleChange = (e) => {
    setNewCertificate({ ...newCertificate, [e.target.name]: e.target.value });
  };

  const handleAddCertificate = () => {
    setCertificates([...certificates, newCertificate]);
    setNewCertificate({ studentName: '', class: '', type: '', issueDate: '', certificateNumber: '' });
  };

  const types = ['Completion', 'Excellence', 'Participation', 'Achievement', 'Merit'];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow">
            <div className="card-header bg-info text-white text-center">
              <h3>🏆 Certificate Management</h3>
            </div>
            <div className="card-body">
              <h4>Issue New Certificate</h4>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Student Name</label>
                  <input type="text" className="form-control" name="studentName" value={newCertificate.studentName} onChange={handleChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Class</label>
                  <input type="text" className="form-control" name="class" value={newCertificate.class} onChange={handleChange} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Certificate Type</label>
                  <select className="form-control" name="type" value={newCertificate.type} onChange={handleChange}>
                    <option value="">Select Type</option>
                    {types.map(type => <option key={type} value={type}>{type}</option>)}
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Issue Date</label>
                  <input type="date" className="form-control" name="issueDate" value={newCertificate.issueDate} onChange={handleChange} />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Certificate Number</label>
                <input type="text" className="form-control" name="certificateNumber" value={newCertificate.certificateNumber} onChange={handleChange} />
              </div>
              <button className="btn btn-info" onClick={handleAddCertificate}>Issue Certificate</button>

              <h4 className="mt-5">📜 Issued Certificates</h4>
              <table className="table table-striped table-hover">
                <thead className="table-info">
                  <tr>
                    <th>Student Name</th>
                    <th>Class</th>
                    <th>Type</th>
                    <th>Issue Date</th>
                    <th>Certificate Number</th>
                  </tr>
                </thead>
                <tbody>
                  {certificates.map((cert, index) => (
                    <tr key={index}>
                      <td>{cert.studentName}</td>
                      <td>{cert.class}</td>
                      <td><span className="badge bg-info">{cert.type}</span></td>
                      <td>{cert.issueDate}</td>
                      <td>{cert.certificateNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
