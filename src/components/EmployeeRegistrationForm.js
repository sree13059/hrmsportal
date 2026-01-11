import React, { useState } from 'react';
import axios from "axios";

const EmployeeRegistrationForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    employeeId: '',
    name: '',
    fatherName: '',
    presentAddress: '',
    presentPoliceStation: '',
    presentCell: '',
    presentPostOffice: '',
    presentDistrict: '',
    presentEmail: '',
    permanentAddress: '',
    permanentPoliceStation: '',
    permanentCell: '',
    permanentPostOffice: '',
    permanentDistrict: '',
    dob: '',
    highestDegree: '',
    nationality: '',
    experience: '',
    designation: '',
    employeeStatus: '',
    employeeType: '',
    motherName: '',
    dateOfJoin: '',
    maritalStatus: '',
    religion: '',
    gender: '',
    bloodGroup: '',
    conductClass: false,
    photo: null,
    signature: null
  });

const handleChange = (e) => {
  const { name, type, value, checked, files } = e.target;

  if (type === "file") {
    setFormData({ ...formData, [name]: files[0] });
  } else if (type === "checkbox") {
    setFormData({ ...formData, [name]: checked });
  } else {
    setFormData({ ...formData, [name]: value });
  }
};

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formDataToSend = new FormData();

    Object.entries(formData).forEach(([key, value]) => {
      if (value !== null && value !== "") {
        formDataToSend.append(key, value);
      }
    });

    const response = await axios.post(
      "https://hrms-backend-1we9.onrender.com/api/employeeregister/create",
      formDataToSend,
      {
        headers: { "Content-Type": "multipart/form-data" },
      }
    );

    alert("Employee registered successfully ✅");
    console.log(response.data);

  } catch (error) {
    console.error(error);
    alert("Employee registration failed ❌");
  }
};


  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow">
            <div className="card-header text-white text-center" style={{ background: 'linear-gradient(to right, #667eea 0%, #764ba2 100%)' }}>
              <img src="/images/logo.jpg.jpeg" alt="Logo" style={{ width: '50px', height: '50px' }} className="me-2" />
              <h3 className="d-inline">Employee Registration Form</h3>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-4 mb-4">
                    <label htmlFor="employeeId" className="form-label fw-bold">Employee ID</label>
                    <input type="text" className="form-control" id="employeeId" name="employeeId" value={formData.employeeId} onChange={handleChange} placeholder="Enter employee ID" required />
                    <label htmlFor="name" className="form-label fw-bold">Employee Name</label>
                    <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter employee name" required />
                    <label htmlFor="fatherName" className="form-label fw-bold">Father's Name</label>
                    <input type="text" className="form-control" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Enter father's name" required />
                    <div className="mb-4">
                      <label className="form-label fw-bold">Present Address</label>
                      <div className="border p-3">
                        <div className="row">
                          <div className="col-6">
                            <input type="text" className="form-control mb-2" name="presentAddress" value={formData.presentAddress} onChange={handleChange} placeholder="Address" required />
                            <input type="text" className="form-control mb-2" name="presentPoliceStation" value={formData.presentPoliceStation} onChange={handleChange} placeholder="Police Station" required />
                            <input type="text" className="form-control mb-2" name="presentCell" value={formData.presentCell} onChange={handleChange} placeholder="Cell" required />
                          </div>
                          <div className="col-6">
                            <input type="text" className="form-control mb-2" name="presentPostOffice" value={formData.presentPostOffice} onChange={handleChange} placeholder="Post Office" required />
                            <input type="text" className="form-control mb-2" name="presentDistrict" value={formData.presentDistrict} onChange={handleChange} placeholder="District" required />
                            <input type="email" className="form-control mb-2" name="presentEmail" value={formData.presentEmail} onChange={handleChange} placeholder="Email" required />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="form-label fw-bold">Permanent Address</label>
                      <div className="border p-3">
                        <div className="row">
                          <div className="col-6">
                            <input type="text" className="form-control mb-2" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} placeholder="Address" required />
                            <input type="text" className="form-control mb-2" name="permanentPoliceStation" value={formData.permanentPoliceStation} onChange={handleChange} placeholder="Police Station" required />
                            <input type="text" className="form-control mb-2" name="permanentCell" value={formData.permanentCell} onChange={handleChange} placeholder="Cell" required />
                          </div>
                          <div className="col-6">
                            <input type="text" className="form-control mb-2" name="permanentPostOffice" value={formData.permanentPostOffice} onChange={handleChange} placeholder="Post Office" required />
                            <input type="text" className="form-control mb-2" name="permanentDistrict" value={formData.permanentDistrict} onChange={handleChange} placeholder="District" required />
                          </div>
                        </div>
                      </div>
                    </div>
                    <label htmlFor="dob" className="form-label fw-bold">Date of Birth</label>
                    <input type="date" className="form-control" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
                    <label htmlFor="highestDegree" className="form-label fw-bold">Highest Degree</label>
                    <input type="text" className="form-control" id="highestDegree" name="highestDegree" value={formData.highestDegree} onChange={handleChange} placeholder="Enter highest degree" required />
                    <label htmlFor="nationality" className="form-label fw-bold">Nationality</label>
                    <input type="text" className="form-control" id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} placeholder="Enter nationality" required />
                    <label htmlFor="experience" className="form-label fw-bold">Years of Experience</label>
                    <input type="number" className="form-control" id="experience" name="experience" value={formData.experience} onChange={handleChange} placeholder="Enter years" required />
                    <label htmlFor="designation" className="form-label fw-bold">Designation</label>
                    <input type="text" className="form-control" id="designation" name="designation" value={formData.designation} onChange={handleChange} placeholder="Enter designation" required />
                    <label htmlFor="employeeStatus" className="form-label fw-bold">Employee Status</label>
                    <input type="text" className="form-control" id="employeeStatus" name="employeeStatus" value={formData.employeeStatus} onChange={handleChange} placeholder="Enter status" required />
                  </div>
                  <div className="col-md-4 mb-4">
                    <label htmlFor="employeeType" className="form-label fw-bold">Employee Type</label>
                    <input type="text" className="form-control" id="employeeType" name="employeeType" value={formData.employeeType} onChange={handleChange} placeholder="Enter employee type" required />
                    <label htmlFor="motherName" className="form-label fw-bold">Mother's Name</label>
                    <input type="text" className="form-control" id="motherName" name="motherName" value={formData.motherName} onChange={handleChange} placeholder="Enter mother's name" required />
                    <label htmlFor="dateOfJoin" className="form-label fw-bold">Date of Join</label>
                    <input type="date" className="form-control" id="dateOfJoin" name="dateOfJoin" value={formData.dateOfJoin} onChange={handleChange} required />
                    <label htmlFor="maritalStatus" className="form-label fw-bold">Marital Status</label>
                    <select className="form-select" id="maritalStatus" name="maritalStatus" value={formData.maritalStatus} onChange={handleChange} required>
                      <option value="">Select Marital Status</option>
                      <option value="single">Single</option>
                      <option value="married">Married</option>
                      <option value="divorced">Divorced</option>
                      <option value="widowed">Widowed</option>
                    </select>
                    <label htmlFor="religion" className="form-label fw-bold">Religion</label>
                    <input type="text" className="form-control" id="religion" name="religion" value={formData.religion} onChange={handleChange} placeholder="Enter religion" required />
                    <label htmlFor="gender" className="form-label fw-bold">Gender</label>
                    <select className="form-select" id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <label htmlFor="bloodGroup" className="form-label fw-bold">Blood Group</label>
                    <input type="text" className="form-control" id="bloodGroup" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} placeholder="e.g., A+, B-" required />
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="conductClass" name="conductClass" checked={formData.conductClass} onChange={handleChange} />
                      <label className="form-check-label" htmlFor="conductClass">
                        Conduct Class?
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4 text-center">
                    <label className="form-label fw-bold">Employee Photo</label>
                    <div className="border" style={{width: '150px', height: '150px', margin: '0 auto 10px'}}>
                      {formData.photo && <img src={URL.createObjectURL(formData.photo)} alt="Preview" style={{width: '100%', height: '100%', objectFit: 'cover'}} />}
                    </div>
                    <input type="file" className="form-control mb-4" id="photo" name="photo" accept="image/*" onChange={handleChange} />
                    <label className="form-label fw-bold">Employee Signature</label>
                    <div className="border" style={{width: '150px', height: '100px', margin: '0 auto 10px'}}>
                      {formData.signature && <img src={URL.createObjectURL(formData.signature)} alt="Signature Preview" style={{width: '100%', height: '100%', objectFit: 'contain'}} />}
                    </div>
                    <input type="file" className="form-control mb-4" id="signature" name="signature" accept="image/*" onChange={handleChange} />
                    <div className="d-flex flex-column gap-3">
                      <button type="submit" className="btn btn-success">
                        <i className="fas fa-save me-2"></i>Save
                      </button>
                      <button type="button" className="btn btn-danger">
                        <i className="fas fa-trash me-2"></i>Delete
                      </button>
                      <button type="button" className="btn btn-warning" onClick={() => setFormData({
                        employeeId: '',
                        name: '',
                        fatherName: '',
                        presentAddress: '',
                        presentPoliceStation: '',
                        presentCell: '',
                        presentPostOffice: '',
                        presentDistrict: '',
                        presentEmail: '',
                        permanentAddress: '',
                        permanentPoliceStation: '',
                        permanentCell: '',
                        permanentPostOffice: '',
                        permanentDistrict: '',
                        dob: '',
                        highestDegree: '',
                        nationality: '',
                        experience: '',
                        designation: '',
                        employeeStatus: '',
                        employeeType: '',
                        motherName: '',
                        dateOfJoin: '',
                        maritalStatus: '',
                        religion: '',
                        gender: '',
                        bloodGroup: '',
                        conductClass: false,
                        photo: null,
                        signature: null
                      })}>
                        <i className="fas fa-undo me-2"></i>Reset
                      </button>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-end mt-5">
                  <button type="button" className="btn btn-secondary btn-lg px-4" onClick={onBack}>
                    <i className="fas fa-arrow-left me-2"></i>Back
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

export default EmployeeRegistrationForm;
