import React, { useState } from 'react';
import axios from "axios";
const StudentPromotionForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    studentId: '',
    currentClass: '',
    promotedClass: '',
    promotionDate: '',
    remarks: '',
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
    await axios.post(
      "http://localhost:5000/api/student-promotion/create",
      formData
    );

    alert("Student Promotion submitted successfully ✅");

    setFormData({
      studentId: "",
      currentClass: "",
      promotedClass: "",
      promotionDate: "",
      remarks: "",
      entryBy: "",
      entryDate: "",
    });
  } catch (error) {
    console.error(error);
    alert("Failed to submit ❌");
  }
};

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Student Promotion Form</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="studentId" className="form-label">Student ID</label>
                  <input
                    type="text"
                    className="form-control"
                    id="studentId"
                    name="studentId"
                    value={formData.studentId}
                    onChange={handleChange}
                    placeholder="Enter student ID"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="currentClass" className="form-label">Current Class</label>
                  <input
                    type="text"
                    className="form-control"
                    id="currentClass"
                    name="currentClass"
                    value={formData.currentClass}
                    onChange={handleChange}
                    placeholder="Enter current class"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="promotedClass" className="form-label">Promoted Class</label>
                  <input
                    type="text"
                    className="form-control"
                    id="promotedClass"
                    name="promotedClass"
                    value={formData.promotedClass}
                    onChange={handleChange}
                    placeholder="Enter promoted class"
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="promotionDate" className="form-label">Promotion Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="promotionDate"
                    name="promotionDate"
                    value={formData.promotionDate}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="remarks" className="form-label">Remarks</label>
                  <textarea
                    className="form-control"
                    id="remarks"
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleChange}
                    placeholder="Enter remarks"
                    rows="3"
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
                      studentId: '',
                      currentClass: '',
                      promotedClass: '',
                      promotionDate: '',
                      remarks: '',
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

export default StudentPromotionForm;