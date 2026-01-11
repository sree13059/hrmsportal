import React, { useState } from 'react';
import axios from 'axios';

const StudentAdmissionForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    session: '',
    class: '',
    section: '',
    rollno: '',
    group: '',
    photo: null,
    name: '',
    fatherName: '',
    presentAddress: '',
    presentPostOffice: '',
    presentPoliceStation: '',
    presentDistrict: '',
    presentCell: '',
    admissionDate: '',
    nationality: '',
    religion: '',
    previousClass: '',
    previousSchool: '',
    previousRollno: '',
    previousGroup: '',
    nameBengali: '',
    motherName: '',
    motherPresentAddress: '',
    motherPostOffice: '',
    motherPoliceStation: '',
    motherDistrict: '',
    motherCell: '',
    dob: '',
    gender: '',
    status: ''
  });

  const handleChange = (e) => {
    if (e.target.type === 'file') {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.keys(formData).forEach(key => {
        if (formData[key] !== null && formData[key] !== '') {
          formDataToSend.append(key, formData[key]);
        }
      });

      await axios.post('http://localhost:5000/api/students/create', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      alert('Student admission submitted successfully!');
      // Reset form
      setFormData({
        session: '',
        class: '',
        section: '',
        rollno: '',
        group: '',
        photo: null,
        name: '',
        fatherName: '',
        presentAddress: '',
        presentPostOffice: '',
        presentPoliceStation: '',
        presentDistrict: '',
        presentCell: '',
        admissionDate: '',
        nationality: '',
        religion: '',
        previousClass: '',
        previousSchool: '',
        previousRollno: '',
        previousGroup: '',
        nameBengali: '',
        motherName: '',
        motherPresentAddress: '',
        motherPostOffice: '',
        motherPoliceStation: '',
        motherDistrict: '',
        motherCell: '',
        dob: '',
        gender: '',
        status: ''
      });
    } catch (error) {
      console.error('Error submitting student admission:', error);
      alert('Failed to submit student admission');
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="row justify-content-center w-100">
        <div className="col-lg-10 col-md-12">
          <div className="card shadow-lg border-0 rounded-lg">
            <div className="card-header bg-success text-white text-center py-4">
              <h3 className="mb-0">
                <i className="fas fa-user-graduate me-2"></i>
                Student Admission Form
              </h3>
              <p className="mb-0">Please fill in all the required details for admission</p>
            </div>
            <div className="card-body p-5">
                <form onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-4 mb-4">
                      <label htmlFor="session" className="form-label fw-bold">Session</label>
                      <input type="text" className="form-control" id="session" name="session" value={formData.session} onChange={handleChange} placeholder="Enter session" required />
                      <label htmlFor="class" className="form-label fw-bold">Class</label>
                      <input type="text" className="form-control" id="class" name="class" value={formData.class} onChange={handleChange} placeholder="Enter class" required />
                      <label htmlFor="section" className="form-label fw-bold">Section</label>
                      <input type="text" className="form-control" id="section" name="section" value={formData.section} onChange={handleChange} placeholder="Enter section" required />
                    </div>
                    <div className="col-md-4 mb-4">
                      <label htmlFor="rollno" className="form-label fw-bold">Roll No</label>
                      <input type="text" className="form-control" id="rollno" name="rollno" value={formData.rollno} onChange={handleChange} placeholder="Enter roll no" required />
                      <label htmlFor="group" className="form-label fw-bold">Group</label>
                      <select className="form-select" id="group" name="group" value={formData.group} onChange={handleChange} required>
                        <option value="">Select Group</option>
                        <option value="Science">Science</option>
                        <option value="Arts">Arts</option>
                        <option value="Commerce">Commerce</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Medical">Medical</option>
                      </select>
                    </div>
                    <div className="col-md-4 mb-4 text-center">
                      <label className="form-label fw-bold">Student Photo</label>
                      <div className="border" style={{width: '150px', height: '150px', margin: '0 auto 10px'}}>
                        {formData.photo && <img src={URL.createObjectURL(formData.photo)} alt="Preview" style={{width: '100%', height: '100%', objectFit: 'cover'}} />}
                      </div>
                      <input type="file" className="form-control" id="photo" name="photo" accept="image/*" onChange={handleChange} />
                    </div>
                  </div>
                  <hr />
                  <div className="row">
                    <div className="col-md-4 mb-4">
                      <label htmlFor="name" className="form-label fw-bold">Name (English)</label>
                      <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter full name" required />
                      <label htmlFor="fatherName" className="form-label fw-bold">Father's Name</label>
                      <input type="text" className="form-control" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Enter father's name" required />
                      <div className="mb-4">
                        <label className="form-label fw-bold">Present Address</label>
                        <div className="border p-3">
                          <input type="text" className="form-control mb-2" name="presentAddress" value={formData.presentAddress} onChange={handleChange} placeholder="Address" required />
                          <input type="text" className="form-control mb-2" name="presentPostOffice" value={formData.presentPostOffice} onChange={handleChange} placeholder="Post Office" required />
                          <input type="text" className="form-control mb-2" name="presentPoliceStation" value={formData.presentPoliceStation} onChange={handleChange} placeholder="Police Station" required />
                          <input type="text" className="form-control mb-2" name="presentDistrict" value={formData.presentDistrict} onChange={handleChange} placeholder="District" required />
                          <input type="text" className="form-control mb-2" name="presentCell" value={formData.presentCell} onChange={handleChange} placeholder="Cell" required />
                        </div>
                      </div>
                      <label htmlFor="admissionDate" className="form-label fw-bold">Admission Date</label>
                      <input type="date" className="form-control" id="admissionDate" name="admissionDate" value={formData.admissionDate} onChange={handleChange} required />
                      <label htmlFor="nationality" className="form-label fw-bold">Nationality</label>
                      <input type="text" className="form-control" id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} placeholder="Enter nationality" required />
                      <label htmlFor="religion" className="form-label fw-bold">Religion</label>
                      <input type="text" className="form-control" id="religion" name="religion" value={formData.religion} onChange={handleChange} placeholder="Enter religion" required />
                    </div>
                    <div className="col-md-4 mb-4">
                      <label htmlFor="nameBengali" className="form-label fw-bold">Name (Bengali)</label>
                      <input type="text" className="form-control" id="nameBengali" name="nameBengali" value={formData.nameBengali} onChange={handleChange} placeholder="Enter name in Bengali" required />
                      <label htmlFor="motherName" className="form-label fw-bold">Mother's Name</label>
                      <input type="text" className="form-control" id="motherName" name="motherName" value={formData.motherName} onChange={handleChange} placeholder="Enter mother's name" required />
                      <div className="mb-4">
                        <label className="form-label fw-bold">Present Address</label>
                        <div className="border p-3">
                          <input type="text" className="form-control mb-2" name="motherPresentAddress" value={formData.motherPresentAddress} onChange={handleChange} placeholder="Address" required />
                          <input type="text" className="form-control mb-2" name="motherPostOffice" value={formData.motherPostOffice} onChange={handleChange} placeholder="Post Office" required />
                          <input type="text" className="form-control mb-2" name="motherPoliceStation" value={formData.motherPoliceStation} onChange={handleChange} placeholder="Police Station" required />
                          <input type="text" className="form-control mb-2" name="motherDistrict" value={formData.motherDistrict} onChange={handleChange} placeholder="District" required />
                          <input type="text" className="form-control mb-2" name="motherCell" value={formData.motherCell} onChange={handleChange} placeholder="Cell" required />
                        </div>
                      </div>
                      <label htmlFor="dob" className="form-label fw-bold">Date of Birth</label>
                      <input type="date" className="form-control" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
                      <label htmlFor="gender" className="form-label fw-bold">Gender</label>
                      <select className="form-select" id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                      <label htmlFor="status" className="form-label fw-bold">Status</label>
                      <input type="text" className="form-control" id="status" name="status" value={formData.status} onChange={handleChange} placeholder="Enter status" required />
                    </div>
                    <div className="col-md-4 mb-4">
                      <div className="d-flex flex-column gap-3">
                        <button type="submit" className="btn btn-success">
                          <i className="fas fa-save me-2"></i>Save
                        </button>
                        <button type="button" className="btn btn-danger">
                          <i className="fas fa-trash me-2"></i>Delete
                        </button>
                        <button type="button" className="btn btn-warning" onClick={() => setFormData({
                          session: '',
                          class: '',
                          section: '',
                          rollno: '',
                          group: '',
                          photo: null,
                          name: '',
                          fatherName: '',
                          presentAddress: '',
                          presentPostOffice: '',
                          presentPoliceStation: '',
                          presentDistrict: '',
                          presentCell: '',
                          admissionDate: '',
                          nationality: '',
                          religion: '',
                          previousClass: '',
                          previousSchool: '',
                          previousRollno: '',
                          previousGroup: '',
                          nameBengali: '',
                          motherName: '',
                          motherPresentAddress: '',
                          motherPostOffice: '',
                          motherPoliceStation: '',
                          motherDistrict: '',
                          motherCell: '',
                          dob: '',
                          gender: '',
                          status: ''
                        })}>
                          <i className="fas fa-undo me-2"></i>Reset
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 mb-4">
                      <label className="form-label fw-bold">Previous History</label>
                      <div className="border p-3">
                        <div className="row">
                          <div className="col-md-3 mb-3">
                            <label htmlFor="previousClass" className="form-label">Class</label>
                            <input type="text" className="form-control" id="previousClass" name="previousClass" value={formData.previousClass} onChange={handleChange} placeholder="Enter previous class" />
                          </div>
                          <div className="col-md-3 mb-3">
                            <label htmlFor="previousSchool" className="form-label">School/College</label>
                            <input type="text" className="form-control" id="previousSchool" name="previousSchool" value={formData.previousSchool} onChange={handleChange} placeholder="Enter school/college" />
                          </div>
                          <div className="col-md-3 mb-3">
                            <label htmlFor="previousRollno" className="form-label">Roll No</label>
                            <input type="text" className="form-control" id="previousRollno" name="previousRollno" value={formData.previousRollno} onChange={handleChange} placeholder="Enter roll no" />
                          </div>
                          <div className="col-md-3 mb-3">
                            <label htmlFor="previousGroup" className="form-label">Group</label>
                            <input type="text" className="form-control" id="previousGroup" name="previousGroup" value={formData.previousGroup} onChange={handleChange} placeholder="Enter group" />
                          </div>
                        </div>
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

export default StudentAdmissionForm;