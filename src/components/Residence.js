import React, { useState } from 'react';

const Residence = () => {
  const [residences, setResidences] = useState([
    { roomNumber: '101', type: 'Single', occupant: 'John Doe', class: '10', section: 'A', contact: '123-456-7890' },
    { roomNumber: '102', type: 'Double', occupant: 'Jane Smith', class: '10', section: 'B', contact: '987-654-3210' },
    { roomNumber: '201', type: 'Single', occupant: 'Emily Johnson', class: '9', section: 'A', contact: '555-123-4567' }
  ]);

  const [newResidence, setNewResidence] = useState({
    roomNumber: '',
    type: '',
    occupant: '',
    class: '',
    section: '',
    contact: ''
  });

  const handleChange = (e) => {
    setNewResidence({ ...newResidence, [e.target.name]: e.target.value });
  };

  const handleAddResidence = () => {
    setResidences([...residences, newResidence]);
    setNewResidence({ roomNumber: '', type: '', occupant: '', class: '', section: '', contact: '' });
  };

  const types = ['Single', 'Double', 'Triple', 'Dormitory'];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h3>Residence Management</h3>
            </div>
            <div className="card-body">
              <h4>Add New Residence</h4>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Room Number</label>
                  <input type="text" className="form-control" name="roomNumber" value={newResidence.roomNumber} onChange={handleChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Type</label>
                  <select className="form-control" name="type" value={newResidence.type} onChange={handleChange}>
                    <option value="">Select Type</option>
                    {types.map(type => <option key={type} value={type}>{type}</option>)}
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Occupant</label>
                  <input type="text" className="form-control" name="occupant" value={newResidence.occupant} onChange={handleChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Contact</label>
                  <input type="text" className="form-control" name="contact" value={newResidence.contact} onChange={handleChange} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Class</label>
                  <input type="text" className="form-control" name="class" value={newResidence.class} onChange={handleChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Section</label>
                  <input type="text" className="form-control" name="section" value={newResidence.section} onChange={handleChange} />
                </div>
              </div>
              <button className="btn btn-success" onClick={handleAddResidence}>Add Residence</button>

              <h4 className="mt-5">Residence List</h4>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Room Number</th>
                    <th>Type</th>
                    <th>Occupant</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Contact</th>
                  </tr>
                </thead>
                <tbody>
                  {residences.map((residence, index) => (
                    <tr key={index}>
                      <td>{residence.roomNumber}</td>
                      <td>{residence.type}</td>
                      <td>{residence.occupant}</td>
                      <td>{residence.class}</td>
                      <td>{residence.section}</td>
                      <td>{residence.contact}</td>
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

export default Residence;
