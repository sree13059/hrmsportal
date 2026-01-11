import React, { useState } from 'react';

const EmployeeDetailsForm = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('professional');
  const [professionalData, setProfessionalData] = useState({
    employeeId: '',
    department: '',
    designation: '',
    joiningDate: '',
    salary: '',
    experience: '',
    photo: null
  });
  const [personalData, setPersonalData] = useState({
    name: '',
    fatherName: '',
    dob: '',
    gender: '',
    email: '',
    phone: '',
    presentAddress: '',
    permanentAddress: '',
    photo: null
  });

  const handleProfessionalChange = (e) => {
    if (e.target.type === 'file') {
      setProfessionalData({ ...professionalData, [e.target.name]: e.target.files[0] });
    } else {
      setProfessionalData({ ...professionalData, [e.target.name]: e.target.value });
    }
  };

  const handlePersonalChange = (e) => {
    if (e.target.type === 'file') {
      setPersonalData({ ...personalData, [e.target.name]: e.target.files[0] });
    } else {
      setPersonalData({ ...personalData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    // Add professional data
    Object.keys(professionalData).forEach(key => {
      if (key === 'photo' && professionalData[key]) {
        formData.append('professionalPhoto', professionalData[key]);
      } else {
        formData.append(key, professionalData[key]);
      }
    });

    // Add personal data
    Object.keys(personalData).forEach(key => {
      if (key === 'photo' && personalData[key]) {
        formData.append('personalPhoto', personalData[key]);
      } else {
        formData.append(key, personalData[key]);
      }
    });

    try {
      const response = await fetch('https://hrms-backend-1we9.onrender.com/api/employees/create', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const result = await response.json();
        alert('Employee Details submitted successfully: ' + result.message);
        // Reset form or navigate
      } else {
        alert('Error submitting employee details');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting employee details');
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="row justify-content-center w-100">
        <div className="col-lg-10 col-md-12">
          <div className="card shadow-lg border-0 rounded-lg" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <div className="card-header bg-gradient-primary text-white text-center py-4" style={{ background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)' }}>
              <h3 className="mb-0">
                <i className="fas fa-user-tie me-2"></i>Employee Details
              </h3>
              <p className="mb-0">Enter employee professional and personal information</p>
            </div>
            <div className="card-body p-5">
              <ul className="nav nav-tabs mb-4" style={{ borderBottom: '2px solid #dee2e6' }}>
                <li className="nav-item">
                  <button className={`nav-link ${activeTab === 'professional' ? 'active' : ''}`} onClick={() => setActiveTab('professional')} style={{ borderRadius: '10px 10px 0 0', boxShadow: activeTab === 'professional' ? '0 4px 8px rgba(0,0,0,0.1)' : 'none' }}>
                    <i className="fas fa-briefcase me-1"></i>Professional Information
                  </button>
                </li>
                <li className="nav-item">
                  <button className={`nav-link ${activeTab === 'personal' ? 'active' : ''}`} onClick={() => setActiveTab('personal')} style={{ borderRadius: '10px 10px 0 0', boxShadow: activeTab === 'personal' ? '0 4px 8px rgba(0,0,0,0.1)' : 'none' }}>
                    <i className="fas fa-user me-1"></i>Personal Information
                  </button>
                </li>
              </ul>
              <form onSubmit={handleSubmit}>
                {activeTab === 'professional' && (
                  <div className="p-4" style={{ backgroundColor: '#fff3cd', borderRadius: '10px', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)' }}>
                    <div className="row">
                      <div className="col-md-4 text-center mb-3">
                        <label htmlFor="professionalPhoto" className="form-label fw-bold">
                          <i className="fas fa-camera me-1"></i>Photo
                        </label>
                        <input type="file" className="form-control form-control-lg" id="professionalPhoto" name="photo" accept="image/*" onChange={handleProfessionalChange} />
                        {professionalData.photo && <img src={URL.createObjectURL(professionalData.photo)} alt="Preview" style={{ width: '100px', height: '100px', marginTop: '10px' }} />}
                      </div>
                      <div className="col-md-8">
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <label htmlFor="employeeId" className="form-label fw-bold">
                              <i className="fas fa-id-badge me-1"></i>Employee ID
                            </label>
                            <input type="text" className="form-control form-control-lg" id="employeeId" name="employeeId" value={professionalData.employeeId} onChange={handleProfessionalChange} placeholder="Enter employee ID" required />
                          </div>
                          <div className="col-md-6 mb-4">
                            <label htmlFor="department" className="form-label fw-bold">
                              <i className="fas fa-building me-1"></i>Department
                            </label>
                            <input type="text" className="form-control form-control-lg" id="department" name="department" value={professionalData.department} onChange={handleProfessionalChange} placeholder="e.g., HR, IT" required />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <label htmlFor="designation" className="form-label fw-bold">
                              <i className="fas fa-user-tie me-1"></i>Designation
                            </label>
                            <input type="text" className="form-control form-control-lg" id="designation" name="designation" value={professionalData.designation} onChange={handleProfessionalChange} placeholder="e.g., Manager, Developer" required />
                          </div>
                          <div className="col-md-6 mb-4">
                            <label htmlFor="joiningDate" className="form-label fw-bold">
                              <i className="fas fa-calendar me-1"></i>Joining Date
                            </label>
                            <input type="date" className="form-control form-control-lg" id="joiningDate" name="joiningDate" value={professionalData.joiningDate} onChange={handleProfessionalChange} required />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <label htmlFor="salary" className="form-label fw-bold">
                              <i className="fas fa-dollar-sign me-1"></i>Salary
                            </label>
                            <input type="number" className="form-control form-control-lg" id="salary" name="salary" value={professionalData.salary} onChange={handleProfessionalChange} placeholder="Enter salary" required />
                          </div>
                          <div className="col-md-6 mb-4">
                            <label htmlFor="experience" className="form-label fw-bold">
                              <i className="fas fa-clock me-1"></i>Experience (Years)
                            </label>
                            <input type="number" className="form-control form-control-lg" id="experience" name="experience" value={professionalData.experience} onChange={handleProfessionalChange} placeholder="Enter experience" required />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'personal' && (
                  <div className="p-4" style={{ backgroundColor: '#d1ecf1', borderRadius: '10px', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)' }}>
                    <div className="row">
                      <div className="col-md-4 text-center mb-3">
                        <label htmlFor="personalPhoto" className="form-label fw-bold">
                          <i className="fas fa-camera me-1"></i>Photo
                        </label>
                        <input type="file" className="form-control form-control-lg" id="personalPhoto" name="photo" accept="image/*" onChange={handlePersonalChange} />
                        {personalData.photo && <img src={URL.createObjectURL(personalData.photo)} alt="Preview" style={{ width: '100px', height: '100px', marginTop: '10px' }} />}
                      </div>
                      <div className="col-md-8">
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <label htmlFor="name" className="form-label fw-bold">
                              <i className="fas fa-user me-1"></i>Name
                            </label>
                            <input type="text" className="form-control form-control-lg" id="name" name="name" value={personalData.name} onChange={handlePersonalChange} placeholder="Enter full name" required />
                          </div>
                          <div className="col-md-6 mb-4">
                            <label htmlFor="fatherName" className="form-label fw-bold">
                              <i className="fas fa-user me-1"></i>Father's Name
                            </label>
                            <input type="text" className="form-control form-control-lg" id="fatherName" name="fatherName" value={personalData.fatherName} onChange={handlePersonalChange} placeholder="Enter father's name" required />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <label htmlFor="dob" className="form-label fw-bold">
                              <i className="fas fa-calendar me-1"></i>Date of Birth
                            </label>
                            <input type="date" className="form-control form-control-lg" id="dob" name="dob" value={personalData.dob} onChange={handlePersonalChange} required />
                          </div>
                          <div className="col-md-6 mb-4">
                            <label htmlFor="gender" className="form-label fw-bold">
                              <i className="fas fa-venus-mars me-1"></i>Gender
                            </label>
                            <select className="form-select form-select-lg" id="gender" name="gender" value={personalData.gender} onChange={handlePersonalChange} required>
                              <option value="">Select Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <label htmlFor="email" className="form-label fw-bold">
                              <i className="fas fa-envelope me-1"></i>Email
                            </label>
                            <input type="email" className="form-control form-control-lg" id="email" name="email" value={personalData.email} onChange={handlePersonalChange} placeholder="employee@example.com" required />
                          </div>
                          <div className="col-md-6 mb-4">
                            <label htmlFor="phone" className="form-label fw-bold">
                              <i className="fas fa-phone me-1"></i>Phone
                            </label>
                            <input type="tel" className="form-control form-control-lg" id="phone" name="phone" value={personalData.phone} onChange={handlePersonalChange} placeholder="Enter phone number" required />
                          </div>
                        </div>
                        <div className="mb-4">
                          <label htmlFor="presentAddress" className="form-label fw-bold">
                            <i className="fas fa-map-marker-alt me-1"></i>Present Address
                          </label>
                          <textarea className="form-control form-control-lg" id="presentAddress" name="presentAddress" value={personalData.presentAddress} onChange={handlePersonalChange} placeholder="Enter present address" required />
                        </div>
                        <div className="mb-4">
                          <label htmlFor="permanentAddress" className="form-label fw-bold">
                            <i className="fas fa-home me-1"></i>Permanent Address
                          </label>
                          <textarea className="form-control form-control-lg" id="permanentAddress" name="permanentAddress" value={personalData.permanentAddress} onChange={handlePersonalChange} placeholder="Enter permanent address" required />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                <div className="d-flex justify-content-between mt-5">
                  <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={onBack}>
                    <i className="fas fa-arrow-left me-2"></i>Back
                  </button>
                  <button type="submit" className="btn btn-warning btn-lg px-4">
                    <i className="fas fa-save me-2"></i>Save Employee Details
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

export default EmployeeDetailsForm;
