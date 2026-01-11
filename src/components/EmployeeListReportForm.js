import React, { useState } from 'react';
import axios from "axios";
const EmployeeListReportForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    department: '',
    designation: '',
    fromDate: '',
    toDate: '',
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
    const response = await axios.post(
      "https://hrms-backend-1we9.onrender.com/api/employeelistreports",
      formData
    );

    if (response.data.success) {
      alert("Employee List Report generated successfully!");
      console.log("Saved Data:", response.data.data);

      setFormData({
        department: "",
        designation: "",
        fromDate: "",
        toDate: "",
        entryBy: "",
        entryDate: ""
      });
    }
  } catch (error) {
    console.error("Error saving Employee List Report:", error);
    alert("Failed to generate Employee List Report");
  }
};

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Employee List Report Form</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
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
                  <label htmlFor="fromDate" className="form-label">From Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="fromDate"
                    name="fromDate"
                    value={formData.fromDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="toDate" className="form-label">To Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="toDate"
                    name="toDate"
                    value={formData.toDate}
                    onChange={handleChange}
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
                      department: '',
                      designation: '',
                      fromDate: '',
                      toDate: '',
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

export default EmployeeListReportForm;
