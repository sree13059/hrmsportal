import React, { useState } from 'react';

const StudentDetailsForm = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState('academic');
  const [academicData, setAcademicData] = useState({
    rollno: '',
    class: '',
    admissiondate: '',
    studentnameEnglish: '',
    studentnameBengali: '',
    section: '',
    group: '',
    session: '',
    photo: null
  });
  const [personalData, setPersonalData] = useState({
    fatherName: '',
    motherName: '',
    presentAddress: '',
    permanentAddress: '',
    guardianName: '',
    photo: null
  });

  const handleAcademicChange = (e) => {
    if (e.target.type === 'file') {
      setAcademicData({ ...academicData, [e.target.name]: e.target.files[0] });
    } else {
      setAcademicData({ ...academicData, [e.target.name]: e.target.value });
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

  const formDataObj = new FormData();

  Object.entries(academicData).forEach(([key, value]) => {
    if (key === "photo") {
      formDataObj.append("academicPhoto", value);
    } else {
      formDataObj.append(key, value);
    }
  });

  Object.entries(personalData).forEach(([key, value]) => {
    if (key === "photo") {
      formDataObj.append("personalPhoto", value);
    } else {
      formDataObj.append(key, value);
    }
  });

  const response = await fetch("http://localhost:5000/api/students/create", {
    method: "POST",
    body: formDataObj
  });

  const data = await response.json();
  alert(data.message);
};


  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="row justify-content-center w-100">
        <div className="col-lg-10 col-md-12">
          <div className="card shadow-lg border-0 rounded-lg" style={{ boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
            <div className="card-header bg-gradient-primary text-white text-center py-4" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
              <h3 className="mb-0">
                <i className="fas fa-user-graduate me-2"></i>Student Details
              </h3>
              <p className="mb-0">Enter student academic and personal information</p>
            </div>
            <div className="card-body p-5">
              <ul className="nav nav-tabs mb-4" style={{ borderBottom: '2px solid #dee2e6' }}>
                <li className="nav-item">
                  <button className={`nav-link ${activeTab === 'academic' ? 'active' : ''}`} onClick={() => setActiveTab('academic')} style={{ borderRadius: '10px 10px 0 0', boxShadow: activeTab === 'academic' ? '0 4px 8px rgba(0,0,0,0.1)' : 'none' }}>
                    <i className="fas fa-graduation-cap me-1"></i>Academic Information
                  </button>
                </li>
                <li className="nav-item">
                  <button className={`nav-link ${activeTab === 'personal' ? 'active' : ''}`} onClick={() => setActiveTab('personal')} style={{ borderRadius: '10px 10px 0 0', boxShadow: activeTab === 'personal' ? '0 4px 8px rgba(0,0,0,0.1)' : 'none' }}>
                    <i className="fas fa-user me-1"></i>Personal Information
                  </button>
                </li>
              </ul>
              <form onSubmit={handleSubmit}>
                {activeTab === 'academic' && (
                  <div className="p-4" style={{ backgroundColor: '#e3f2fd', borderRadius: '10px', boxShadow: 'inset 0 2px 4px rgba(190, 165, 165, 0.73)' }}>
                    <div className="row">
                      <div className="col-md-4 text-center mb-3">
                        <label htmlFor="academicPhoto" className="form-label fw-bold">
                          <i className="fas fa-camera me-1"></i>Photo
                        </label>
                        <input type="file" className="form-control form-control-lg" id="academicPhoto" name="photo" accept="image/*" onChange={handleAcademicChange} />
                        {academicData.photo && <img src={URL.createObjectURL(academicData.photo)} alt="Preview" style={{ width: '100px', height: '100px', marginTop: '10px' }} />}
                      </div>
                      <div className="col-md-8">
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <label htmlFor="rollno" className="form-label fw-bold">
                              <i className="fas fa-id-card me-1"></i>Roll No
                            </label>
                            <input type="text" className="form-control form-control-lg" id="rollno" name="rollno" value={academicData.rollno} onChange={handleAcademicChange} placeholder="Enter roll number" required />
                          </div>
                          <div className="col-md-6 mb-4">
                            <label htmlFor="class" className="form-label fw-bold">
                              <i className="fas fa-graduation-cap me-1"></i>Class
                            </label>
                            <input type="text" className="form-control form-control-lg" id="class" name="class" value={academicData.class} onChange={handleAcademicChange} placeholder="e.g., 10th, 12th" required />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <label htmlFor="admissiondate" className="form-label fw-bold">
                              <i className="fas fa-calendar me-1"></i>Admission Date
                            </label>
                            <input type="date" className="form-control form-control-lg" id="admissiondate" name="admissiondate" value={academicData.admissiondate} onChange={handleAcademicChange} required />
                          </div>
                          <div className="col-md-6 mb-4">
                            <label htmlFor="studentnameEnglish" className="form-label fw-bold">
                              <i className="fas fa-user me-1"></i>Student Name (English)
                            </label>
                            <input type="text" className="form-control form-control-lg" id="studentnameEnglish" name="studentnameEnglish" value={academicData.studentnameEnglish} onChange={handleAcademicChange} placeholder="Enter name in English" required />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <label htmlFor="studentnameBengali" className="form-label fw-bold">
                              <i className="fas fa-user me-1"></i>Student Name (Bengali)
                            </label>
                            <input type="text" className="form-control form-control-lg" id="studentnameBengali" name="studentnameBengali" value={academicData.studentnameBengali} onChange={handleAcademicChange} placeholder="Enter name in Bengali" required />
                          </div>
                          <div className="col-md-6 mb-4">
                            <label htmlFor="section" className="form-label fw-bold">
                              <i className="fas fa-layer-group me-1"></i>Section
                            </label>
                            <input type="text" className="form-control form-control-lg" id="section" name="section" value={academicData.section} onChange={handleAcademicChange} placeholder="e.g., A, B" required />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <label htmlFor="group" className="form-label fw-bold">
                              <i className="fas fa-users me-1"></i>Group
                            </label>
                            <select className="form-select form-select-lg" id="group" name="group" value={academicData.group} onChange={handleAcademicChange} required>
                              <option value="">Select Group</option>
                              <option value="Science">Science</option>
                              <option value="Arts">Arts</option>
                              <option value="Commerce">Commerce</option>
                            </select>
                          </div>
                          <div className="col-md-6 mb-4">
                            <label htmlFor="session" className="form-label fw-bold">
                              <i className="fas fa-calendar-alt me-1"></i>Session
                            </label>
                            <input type="text" className="form-control form-control-lg" id="session" name="session" value={academicData.session} onChange={handleAcademicChange} placeholder="e.g., 2023-2024" required />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {activeTab === 'personal' && (
                  <div className="p-4" style={{ backgroundColor: '#f1f2f5ff', borderRadius: '10px', boxShadow: 'inset 0 2px 4px rgba(201, 203, 216, 0.05)' }}>
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
                            <label htmlFor="fatherName" className="form-label fw-bold">
                              <i className="fas fa-user me-1"></i>Father's Name
                            </label>
                            <input type="text" className="form-control form-control-lg" id="fatherName" name="fatherName" value={personalData.fatherName} onChange={handlePersonalChange} placeholder="Enter father's name" required />
                          </div>
                          <div className="col-md-6 mb-4">
                            <label htmlFor="motherName" className="form-label fw-bold">
                              <i className="fas fa-female me-1"></i>Mother's Name
                            </label>
                            <input type="text" className="form-control form-control-lg" id="motherName" name="motherName" value={personalData.motherName} onChange={handlePersonalChange} placeholder="Enter mother's name" required />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-6 mb-4">
                            <label htmlFor="guardianName" className="form-label fw-bold">
                              <i className="fas fa-user-friends me-1"></i>Guardian Name
                            </label>
                            <input type="text" className="form-control form-control-lg" id="guardianName" name="guardianName" value={personalData.guardianName} onChange={handlePersonalChange} placeholder="Enter guardian name" required />
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
                  <button type="submit" className="btn btn-info btn-lg px-4">
                    <i className="fas fa-save me-2"></i>Save Student Details
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

export default StudentDetailsForm;