import React, { useState } from 'react';

const ProfileForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    name: 'John Doe',
    fatherName: 'John Sr.',
    dob: '2000-01-01',
    gender: 'male',
    email: 'john@example.com',
    phone: '1234567890',
    course: 'B.Sc.',
    group: 'Science',
    presentAddress: '123 Main St',
    permanentAddress: '456 Elm St',
    religion: 'Christian',
    nationality: 'American',
    parentName: 'Jane Doe',
    parentPhone: '0987654321',
    motherName: 'Jane Doe',
    bloodGroup: 'A+',
    emergencyContact: 'Uncle Bob',
    emergencyPhone: '1122334455',
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
    alert('Profile updated: ' + JSON.stringify(formData));
    // Handle submission
  };

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="row justify-content-center w-100">
        <div className="col-lg-10 col-md-12">
          <div className="card shadow-lg border-0 rounded-lg">
            <div className="card-header bg-primary text-white text-center py-4">
              <h3 className="mb-0">
                <i className="fas fa-user-edit me-2"></i>Edit Profile
              </h3>
              <p className="mb-0">Update your personal information</p>
            </div>
            <div className="card-body p-5">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-4 text-center mb-3">
                    <label htmlFor="photo" className="form-label fw-bold">
                      <i className="fas fa-camera me-1"></i>Photo
                    </label>
                    <input type="file" className="form-control form-control-lg" id="photo" name="photo" accept="image/*" onChange={handleChange} />
                    {formData.photo && <img src={URL.createObjectURL(formData.photo)} alt="Preview" style={{ width: '100px', height: '100px', marginTop: '10px' }} />}
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="name" className="form-label fw-bold">
                          <i className="fas fa-user me-1"></i>Name
                        </label>
                        <input type="text" className="form-control form-control-lg" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter full name" required />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="fatherName" className="form-label fw-bold">
                          <i className="fas fa-user me-1"></i>Father's Name
                        </label>
                        <input type="text" className="form-control form-control-lg" id="fatherName" name="fatherName" value={formData.fatherName} onChange={handleChange} placeholder="Enter father's name" required />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="dob" className="form-label fw-bold">
                          <i className="fas fa-calendar me-1"></i>Date of Birth
                        </label>
                        <input type="date" className="form-control form-control-lg" id="dob" name="dob" value={formData.dob} onChange={handleChange} required />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="gender" className="form-label fw-bold">
                          <i className="fas fa-venus-mars me-1"></i>Gender
                        </label>
                        <select className="form-select form-select-lg" id="gender" name="gender" value={formData.gender} onChange={handleChange} required>
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
                        <input type="email" className="form-control form-control-lg" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="student@example.com" required />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="phone" className="form-label fw-bold">
                          <i className="fas fa-phone me-1"></i>Phone
                        </label>
                        <input type="tel" className="form-control form-control-lg" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" required />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="religion" className="form-label fw-bold">
                          <i className="fas fa-pray me-1"></i>Religion
                        </label>
                        <input type="text" className="form-control form-control-lg" id="religion" name="religion" value={formData.religion} onChange={handleChange} placeholder="Enter religion" required />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="nationality" className="form-label fw-bold">
                          <i className="fas fa-flag me-1"></i>Nationality
                        </label>
                        <input type="text" className="form-control form-control-lg" id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} placeholder="Enter nationality" required />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="course" className="form-label fw-bold">
                          <i className="fas fa-book me-1"></i>Course
                        </label>
                        <input type="text" className="form-control form-control-lg" id="course" name="course" value={formData.course} onChange={handleChange} placeholder="e.g., B.Sc., B.A." required />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="group" className="form-label fw-bold">
                          <i className="fas fa-users me-1"></i>Group
                        </label>
                        <select className="form-select form-select-lg" id="group" name="group" value={formData.group} onChange={handleChange} required>
                          <option value="">Select Group</option>
                          <option value="Science">Science</option>
                          <option value="Arts">Arts</option>
                          <option value="Commerce">Commerce</option>
                          <option value="Engineering">Engineering</option>
                          <option value="Medical">Medical</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label htmlFor="presentAddress" className="form-label fw-bold">
                        <i className="fas fa-map-marker-alt me-1"></i>Present Address
                      </label>
                      <textarea className="form-control form-control-lg" id="presentAddress" name="presentAddress" value={formData.presentAddress} onChange={handleChange} placeholder="Enter present address" required />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="permanentAddress" className="form-label fw-bold">
                        <i className="fas fa-home me-1"></i>Permanent Address
                      </label>
                      <textarea className="form-control form-control-lg" id="permanentAddress" name="permanentAddress" value={formData.permanentAddress} onChange={handleChange} placeholder="Enter permanent address" required />
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="parentName" className="form-label fw-bold">
                          <i className="fas fa-user-friends me-1"></i>Parent/Guardian Name
                        </label>
                        <input type="text" className="form-control form-control-lg" id="parentName" name="parentName" value={formData.parentName} onChange={handleChange} placeholder="Enter parent/guardian name" required />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="parentPhone" className="form-label fw-bold">
                          <i className="fas fa-phone me-1"></i>Parent/Guardian Phone
                        </label>
                        <input type="tel" className="form-control form-control-lg" id="parentPhone" name="parentPhone" value={formData.parentPhone} onChange={handleChange} placeholder="Enter parent/guardian phone" required />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="motherName" className="form-label fw-bold">
                          <i className="fas fa-female me-1"></i>Mother's Name
                        </label>
                        <input type="text" className="form-control form-control-lg" id="motherName" name="motherName" value={formData.motherName} onChange={handleChange} placeholder="Enter mother's name" required />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="bloodGroup" className="form-label fw-bold">
                          <i className="fas fa-tint me-1"></i>Blood Group
                        </label>
                        <input type="text" className="form-control form-control-lg" id="bloodGroup" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange} placeholder="e.g., A+, B-" required />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <label htmlFor="emergencyContact" className="form-label fw-bold">
                          <i className="fas fa-exclamation-triangle me-1"></i>Emergency Contact Name
                        </label>
                        <input type="text" className="form-control form-control-lg" id="emergencyContact" name="emergencyContact" value={formData.emergencyContact} onChange={handleChange} placeholder="Enter emergency contact name" required />
                      </div>
                      <div className="col-md-6 mb-4">
                        <label htmlFor="emergencyPhone" className="form-label fw-bold">
                          <i className="fas fa-phone me-1"></i>Emergency Contact Phone
                        </label>
                        <input type="tel" className="form-control form-control-lg" id="emergencyPhone" name="emergencyPhone" value={formData.emergencyPhone} onChange={handleChange} placeholder="Enter emergency contact phone" required />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-5">
                  <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={onBack}>
                    <i className="fas fa-arrow-left me-2"></i>Back
                  </button>
                  <button type="submit" className="btn btn-primary btn-lg px-4">
                    <i className="fas fa-save me-2"></i>Update Profile
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

export default ProfileForm;