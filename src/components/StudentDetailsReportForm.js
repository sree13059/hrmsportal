import React, { useState } from 'react';
import axios from "axios";
const StudentDetailsReportForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    rollno: '',
    section: '',
    class: '',
    group: '',
    studentnameEnglish: '',
    studentnameBengali: '',
    studentPhoto: null,
    fatherName: '',
    motherName: '',
    presentAddress: '',
    permanentAddress: '',
    guardianName: '',
    guardianPhoto: null
  });

 const handleChange = (e) => {
  const { name, value, files } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: files ? files[0] : value
  }));
};


const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const formDataToSend = new FormData();

    Object.keys(formData).forEach((key) => {
      formDataToSend.append(key, formData[key]);
    });

    await axios.post(
      "https://hrms-backend-1we9.onrender.com/api/studentdetails",
      formDataToSend,
      {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    );

    alert("Student Details Report saved successfully!");

    // Reset form
    setFormData({
      rollno: "",
      section: "",
      class: "",
      group: "",
      studentnameEnglish: "",
      studentnameBengali: "",
      studentPhoto: null,
      fatherName: "",
      motherName: "",
      presentAddress: "",
      permanentAddress: "",
      guardianName: "",
      guardianPhoto: null
    });
  } catch (error) {
    console.error(error);
    alert("Failed to save student details");
  }
};

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Student Details Report Form</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <h5>Student Academic Information</h5>
                  <div className="row">
                    <div className="col-md-3">
                      <div className="form-group mb-3">
                        <label htmlFor="rollno" className="form-label">Roll No</label>
                        <input
                          type="text"
                          className="form-control"
                          id="rollno"
                          name="rollno"
                          value={formData.rollno}
                          onChange={handleChange}
                          placeholder="Enter roll no"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="section" className="form-label">Section</label>
                        <input
                          type="text"
                          className="form-control"
                          id="section"
                          name="section"
                          value={formData.section}
                          onChange={handleChange}
                          placeholder="Enter section"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="class" className="form-label">Class</label>
                        <input
                          type="text"
                          className="form-control"
                          id="class"
                          name="class"
                          value={formData.class}
                          onChange={handleChange}
                          placeholder="Enter class"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="group" className="form-label">Group</label>
                        <input
                          type="text"
                          className="form-control"
                          id="group"
                          name="group"
                          value={formData.group}
                          onChange={handleChange}
                          placeholder="Enter group"
                        />
                      </div>
                    </div>
                    <div className="col-md-3">
                      <div className="form-group mb-3">
                        <label htmlFor="studentnameEnglish" className="form-label">Student Name (English)</label>
                        <input
                          type="text"
                          className="form-control"
                          id="studentnameEnglish"
                          name="studentnameEnglish"
                          value={formData.studentnameEnglish}
                          onChange={handleChange}
                          placeholder="Enter name in English"
                        />
                      </div>
                      <div className="form-group mb-3">
                        <label htmlFor="studentnameBengali" className="form-label">Student Name (Bengali)</label>
                        <input
                          type="text"
                          className="form-control"
                          id="studentnameBengali"
                          name="studentnameBengali"
                          value={formData.studentnameBengali}
                          onChange={handleChange}
                          placeholder="Enter name in Bengali"
                        />
                      </div>
                    </div>
                    <div className="col-md-6 text-center">
                      <label htmlFor="studentPhoto" className="form-label">Student Photo</label>
                      <div className="border" style={{width: '150px', height: '150px', margin: '0 auto 10px'}}>
                        {formData.studentPhoto && <img src={URL.createObjectURL(formData.studentPhoto)} alt="Preview" style={{width: '100%', height: '100%', objectFit: 'cover'}} />}
                      </div>
                      <input type="file" className="form-control" id="studentPhoto" name="studentPhoto" accept="image/*" onChange={handleChange} />
                    </div>
                  </div>
                </div>
                <div className="mb-4">
                  <h5>Student Personal Information</h5>
                  <div className="row">
                    <div className="col-md-8">
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
                        <label htmlFor="guardianName" className="form-label">Guardian Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="guardianName"
                          name="guardianName"
                          value={formData.guardianName}
                          onChange={handleChange}
                          placeholder="Enter guardian name"
                        />
                      </div>
                    </div>
                    <div className="col-md-4 text-center">
                      <label htmlFor="guardianPhoto" className="form-label">Guardian Photo</label>
                      <div className="border" style={{width: '150px', height: '150px', margin: '0 auto 10px'}}>
                        {formData.guardianPhoto && <img src={URL.createObjectURL(formData.guardianPhoto)} alt="Guardian Preview" style={{width: '100%', height: '100%', objectFit: 'cover'}} />}
                      </div>
                      <input type="file" className="form-control" id="guardianPhoto" name="guardianPhoto" accept="image/*" onChange={handleChange} />
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
                      rollno: '',
                      section: '',
                      class: '',
                      group: '',
                      studentnameEnglish: '',
                      studentnameBengali: '',
                      studentPhoto: null,
                      fatherName: '',
                      motherName: '',
                      presentAddress: '',
                      permanentAddress: '',
                      guardianName: '',
                      guardianPhoto: null
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

export default StudentDetailsReportForm;
