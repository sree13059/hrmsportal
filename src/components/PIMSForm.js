import React, { useState } from 'react';

const PIMSForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    dob: '',
    gender: '',
    nationality: '',
    photo: null
  });

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Personal information submitted: ' + JSON.stringify(formData));
    // Handle submission
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow">
            <div className="card-header text-white text-center" style={{ background: 'linear-gradient(to right, #f093fb 0%, #f5576c 100%)' }}>
              <img src="/images/logo.jpg.jpeg" alt="Logo" style={{ width: '50px', height: '50px' }} className="me-2" />
              <h3 className="d-inline">Personal Information Form</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="name" className="form-label">Name</label>
                        <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} required />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="dob" className="form-label">Date of Birth</label>
                        <input type="date" className="form-control" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input type="tel" className="form-control" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-3">
                        <label htmlFor="gender" className="form-label">Gender</label>
                        <select className="form-control" id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                          <option value="">Select Gender</option>
                          <option value="male">Male</option>
                          <option value="female">Female</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="col-md-6 mb-3">
                        <label htmlFor="nationality" className="form-label">Nationality</label>
                        <input type="text" className="form-control" id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} required />
                      </div>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">Address</label>
                      <textarea className="form-control" id="address" name="address" value={formData.address} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="col-md-4 text-center mb-3">
                    <label htmlFor="photo" className="form-label">Photo</label>
                    <input type="file" className="form-control" id="photo" name="photo" accept="image/*" onChange={handleChange} />
                    {formData.photo && <img src={URL.createObjectURL(formData.photo)} alt="Preview" style={{ width: '100px', height: '100px', marginTop: '10px' }} />}
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-success">Submit</button>
                  <button type="button" className="btn btn-secondary" onClick={onBack}>Back</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PIMSForm;