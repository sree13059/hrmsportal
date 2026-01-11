import React, { useState } from 'react';
import axios from "axios";
const EmployeeListForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    employeeid: '',
    name: '',
    joindate: '',
    highestdegree: '',
    employeetype: '',
    photo: null,
    signature: null,
    status: ''
  });
  const [employeeList, setEmployeeList] = useState([]);

 const handleChange = (e) => {
  const { name, value, files } = e.target;

  setFormData({
    ...formData,
    [name]: files ? files[0] : value
  });
};

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const data = new FormData();

    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });

    await axios.post(
      "http://localhost:5000/api/employeelist",
      data,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    alert("Employee List saved successfully!");

    setFormData({
      employeeid: "",
      name: "",
      joindate: "",
      highestdegree: "",
      employeetype: "",
      photo: null,
      signature: null,
      status: ""
    });
  } catch (error) {
    console.error(error);
    alert("Failed to save employee list");
  }
};

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Employee List Form</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group mb-3">
                      <label htmlFor="employeeid" className="form-label">Employee ID</label>
                      <input
                        type="text"
                        className="form-control"
                        id="employeeid"
                        name="employeeid"
                        value={formData.employeeid}
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
                  </div>
                  <div className="col-md-6">
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
                    <div className="form-group mb-3">
                      <label htmlFor="photo" className="form-label">Photo</label>
                      <input
                        type="file"
                        className="form-control"
                        id="photo"
                        name="photo"
                        accept="image/*"
                        onChange={handleChange}
                      />
                      {formData.photo && <img src={URL.createObjectURL(formData.photo)} alt="Preview" style={{ width: '100px', height: '100px', marginTop: '10px' }} />}
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="signature" className="form-label">Signature</label>
                      <input
                        type="file"
                        className="form-control"
                        id="signature"
                        name="signature"
                        accept="image/*"
                        onChange={handleChange}
                      />
                      {formData.signature && <img src={URL.createObjectURL(formData.signature)} alt="Signature Preview" style={{ width: '100px', height: '50px', marginTop: '10px' }} />}
                    </div>
                    <div className="form-group mb-3">
                      <label htmlFor="status" className="form-label">Status</label>
                      <select
                        className="form-control"
                        id="status"
                        name="status"
                        value={formData.status}
                        onChange={handleChange}
                      >
                        <option value="">Select Status</option>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                      </select>
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
                      employeeid: '',
                      name: '',
                      joindate: '',
                      highestdegree: '',
                      employeetype: '',
                      photo: null,
                      signature: null,
                      status: ''
                    })}>
                      Reset
                    </button>
                  </div>
                  <button type="button" className="btn btn-secondary" onClick={onBack}>
                    Back
                  </button>
                </div>
              </form>
              {employeeList.length > 0 && (
                <div className="mt-5">
                  <h5>Employee List</h5>
                  <table className="table table-striped">
                    <thead>
                      <tr>
                        <th>Employee ID</th>
                        <th>Employee Name</th>
                        <th>Join Date</th>
                        <th>Highest Degree</th>
                        <th>Employee Type</th>
                        <th>Photo</th>
                        <th>Signature</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employeeList.map((employee, index) => (
                        <tr key={index}>
                          <td>{employee.employeeid}</td>
                          <td>{employee.name}</td>
                          <td>{employee.joindate}</td>
                          <td>{employee.highestdegree}</td>
                          <td>{employee.employeetype}</td>
                          <td>{employee.photo ? <img src={URL.createObjectURL(employee.photo)} alt="Photo" style={{ width: '50px', height: '50px' }} /> : 'N/A'}</td>
                          <td>{employee.signature ? <img src={URL.createObjectURL(employee.signature)} alt="Signature" style={{ width: '50px', height: '25px' }} /> : 'N/A'}</td>
                          <td>{employee.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeListForm;