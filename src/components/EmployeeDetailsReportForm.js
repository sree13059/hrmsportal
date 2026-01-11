import React, { useState } from 'react';
import axios from "axios";
const EmployeeDetailsReportForm = ({ onBack }) => {
const [formData, setFormData] = useState({
  employeeId: '',
  joindate: '',
  designation: '',
  department: '',   // ✅ ADD THIS
  serviceperiod: '',
  employeetype: '',
  highestdegree: '',
  phone: '',
  email: '',
  name: '',
  fatherName: '',
  motherName: '',
  presentAddress: '',
  permanentAddress: '',
  dob: '',
  age: '',
  gender: '',
  maritalStatus: '',
  nationality: '',
  religion: '',
  photo: null,
  signature: null
});


 const handleChange = (e) => {
  const { name, value, files } = e.target;

  // If file input
  if (files) {
    setFormData({
      ...formData,
      [name]: files[0]
    });
  } else {
    setFormData({
      ...formData,
      [name]: value
    });
  }
};


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = new FormData();

    // Append all fields
    Object.keys(formData).forEach((key) => {
      if (formData[key] !== null && formData[key] !== "") {
        data.append(key, formData[key]);
      }
    });

    const response = await axios.post(
      "http://localhost:5000/api/employeedetailsreport/create",
      data,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );

    console.log("Employee Details Report submitted:", response.data);
    alert("Employee Details Report generated successfully!");

    // Reset form
    setFormData({
      employeeId: "",
      joindate: "",
      designation: "",
      serviceperiod: "",
      employeetype: "",
      highestdegree: "",
      phone: "",
      email: "",
      name: "",
      fatherName: "",
      motherName: "",
      presentAddress: "",
      permanentAddress: "",
      dob: "",
      age: "",
      gender: "",
      maritalStatus: "",
      nationality: "",
      religion: "",
      photo: null,
      signature: null
    });
  } catch (error) {
    console.error(
      "Error submitting Employee Details Report:",
      error.response?.data || error.message
    );
    alert("Failed to generate Employee Details Report");
  }
};

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Employee Details Report Form</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-8">
                    <div className="mb-4">
                      <h5>Employee General Information</h5>
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label htmlFor="employeeId" className="form-label">Employee ID</label>
                            <input
                              type="text"
                              className="form-control"
                              id="employeeId"
                              name="employeeId"
                              value={formData.employeeId}
                              onChange={handleChange}
                              placeholder="Enter employee ID"
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label htmlFor="name" className="form-label">Employee Name</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              placeholder="Enter employee name"
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label htmlFor="designation" className="form-label">Designation</label>
                            <input
                              type="text"
                              className="form-control"
                              id="designation"
                              name="designation"
                              value={formData.designation}
                              onChange={handleChange}
                              placeholder="Enter designation"
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label htmlFor="joindate" className="form-label">Join Date</label>
                            <input
                              type="date"
                              className="form-control"
                              id="joindate"
                              name="joindate"
                              value={formData.joindate}
                              onChange={handleChange}
                            />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group mb-3">
                            <label htmlFor="department" className="form-label">Department</label>
                            <input
                              type="text"
                              className="form-control"
                              id="department"
                              name="department"
                              value={formData.department}
                              onChange={handleChange}
                              placeholder="Enter department"
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label htmlFor="highestdegree" className="form-label">Highest Degree</label>
                            <input
                              type="text"
                              className="form-control"
                              id="highestdegree"
                              name="highestdegree"
                              value={formData.highestdegree}
                              onChange={handleChange}
                              placeholder="Enter highest degree"
                            />
                          </div>
                          <div className="form-group mb-3">
                            <label htmlFor="employeetype" className="form-label">Employee Type</label>
                            <input
                              type="text"
                              className="form-control"
                              id="employeetype"
                              name="employeetype"
                              value={formData.employeetype}
                              onChange={handleChange}
                              placeholder="Enter employee type"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mb-4">
                      <h5>Employee Personal Information</h5>
                      <div className="form-group mb-3">
                        <label htmlFor="fatherName" className="form-label">Father's Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="fatherName"
                          name="fatherName"
                          value={formData.fatherName}
                          onChange={handleChange}
                          placeholder="Enter father's name"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="motherName" className="form-label">Mother's Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="motherName"
                          name="motherName"
                          value={formData.motherName}
                          onChange={handleChange}
                          placeholder="Enter mother's name"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="presentAddress" className="form-label">Present Address</label>
                        <textarea
                          className="form-control"
                          id="presentAddress"
                          name="presentAddress"
                          value={formData.presentAddress}
                          onChange={handleChange}
                          placeholder="Enter present address"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="permanentAddress" className="form-label">Permanent Address</label>
                        <textarea
                          className="form-control"
                          id="permanentAddress"
                          name="permanentAddress"
                          value={formData.permanentAddress}
                          onChange={handleChange}
                          placeholder="Enter permanent address"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="phone" className="form-label">Phone</label>
                        <input
                          type="tel"
                          className="form-control"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter phone"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="email" className="form-label">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="Enter email"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 text-center">
                    <div className="mb-4">
                      <label htmlFor="photo" className="form-label">Employee Photo</label>
                      <div className="border" style={{width: '150px', height: '150px', margin: '0 auto 10px'}}>
                        {formData.photo && <img src={URL.createObjectURL(formData.photo)} alt="Preview" style={{width: '100%', height: '100%', objectFit: 'cover'}} />}
                      </div>
                      <input type="file" className="form-control mb-4" id="photo" name="photo" accept="image/*" onChange={handleChange} />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="signature" className="form-label">Employee Signature</label>
                      <div className="border" style={{width: '150px', height: '100px', margin: '0 auto 10px'}}>
                        {formData.signature && <img src={URL.createObjectURL(formData.signature)} alt="Signature Preview" style={{width: '100%', height: '100%', objectFit: 'contain'}} />}
                      </div>
                      <input type="file" className="form-control" id="signature" name="signature" accept="image/*" onChange={handleChange} />
                    </div>
                  </div>
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
                      employeeId: '',
                      name: '',
                      designation: '',
                      department: '',
                      joindate: '',
                      highestdegree: '',
                      employeetype: '',
                      fatherName: '',
                      motherName: '',
                      presentAddress: '',
                      permanentAddress: '',
                      phone: '',
                      email: '',
                      photo: null,
                      signature: null
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

export default EmployeeDetailsReportForm;