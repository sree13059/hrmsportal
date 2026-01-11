import React, { useState } from 'react';

const ClassForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    className: '',
    shortForm: '',
    entryBy: '',
    entryDate: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://hrms-backend-1we9.onrender.com/api/admin/class', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Class submitted successfully!');
        setFormData({
          className: '',
          shortForm: '',
          entryBy: '',
          entryDate: ''
        });
      } else {
        const errorData = await response.json();
        alert('Error: ' + errorData.message);
      }
    } catch (error) {
      console.error('Error submitting class:', error);
      alert('Error submitting class');
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Class Form</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="className" className="form-label">Class Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="className"
                    name="className"
                    value={formData.className}
                    onChange={handleChange}
                    placeholder="Enter class name"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="shortForm" className="form-label">Short Form</label>
                  <input
                    type="text"
                    className="form-control"
                    id="shortForm"
                    name="shortForm"
                    value={formData.shortForm}
                    onChange={handleChange}
                    placeholder="Enter short form"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="entryBy" className="form-label">Entry By</label>
                  <select
                    className="form-control"
                    id="entryBy"
                    name="entryBy"
                    value={formData.entryBy}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Entry By</option>
                    <option value="admin">Admin</option>
                    <option value="superadmin">Superadmin</option>
                  </select>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="entryDate" className="form-label">Entry Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="entryDate"
                    name="entryDate"
                    value={formData.entryDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex gap-3">
                    <button type="submit" className="btn btn-success">
                      Save
                    </button>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                    <button type="button" className="btn btn-warning" onClick={() => setFormData({
                      className: '',
                      shortForm: '',
                      entryBy: '',
                      entryDate: ''
                    })}>
                      Reset
                    </button>
                  </div>
                  <button type="button" className="btn btn-secondary" onClick={onBack}>
                    Back
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassForm;
