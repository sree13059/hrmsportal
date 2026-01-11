import React, { useState } from 'react';

const SubjectForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    subjectCode: '',
    subjectName: '',
    subjectType: ''
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
      const response = await fetch('https://hrms-backend-1we9.onrender.com/api/admin/subject', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Subject submitted successfully!');
        setFormData({
          subjectCode: '',
          subjectName: '',
          subjectType: ''
        });
      } else {
        const errorData = await response.json();
        alert('Error: ' + errorData.message);
      }
    } catch (error) {
      console.error('Error submitting subject:', error);
      alert('Error submitting subject');
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Subject Form</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="subjectCode" className="form-label">Subject Code</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subjectCode"
                    name="subjectCode"
                    value={formData.subjectCode}
                    onChange={handleChange}
                    placeholder="Enter subject code"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="subjectName" className="form-label">Subject Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subjectName"
                    name="subjectName"
                    value={formData.subjectName}
                    onChange={handleChange}
                    placeholder="Enter subject name"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="subjectType" className="form-label">Subject Type</label>
                  <select
                    className="form-control"
                    id="subjectType"
                    name="subjectType"
                    value={formData.subjectType}
                    onChange={handleChange}
                  >
                    <option value="">Select Subject Type</option>
                    <option value="subjective">Subjective</option>
                    <option value="selective">Selective</option>
                    <option value="optional">Optional</option>
                  </select>
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
                      subjectCode: '',
                      subjectName: '',
                      subjectType: ''
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

export default SubjectForm;
