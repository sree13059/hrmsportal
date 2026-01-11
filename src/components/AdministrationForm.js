import React, { useState } from 'react';

const AdministrationForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    adminName: '',
    fatherName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '',
    permissions: [],
    department: '',
    presentAddress: '',
    permanentAddress: '',
    religion: '',
    nationality: '',
    accessLevel: '',
    photo: null
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        permissions: checked
          ? [...prev.permissions, value]
          : prev.permissions.filter(p => p !== value)
      }));
    } else if (type === 'file') {
      setFormData({ ...formData, [name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    alert('Administration settings submitted: ' + JSON.stringify(formData));
    // Handle submission
  };

  const permissionsOptions = [
    'User Management',
    'Employee Records',
    'Attendance Tracking',
    'Reports',
    'System Settings'
  ];

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="row justify-content-center w-100">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow-lg border-0 rounded-lg">
            <div className="card-header bg-primary text-white text-center py-4">
              <h3 className="mb-0">
                {/* <i className="fas fa-cogs me-2"></i> */}
                Admition Form
              </h3>
              {/* <p className="mb-0">Manage administrative configurations and permissions</p> */}
            </div>
            <div className="card-body p-5">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-4 text-center mb-3">
                    <label htmlFor="photo" className="form-label">Photo</label>
                    <input type="file" className="form-control" id="photo" name="photo" accept="image/*" onChange={handleChange} />
                    {formData.photo && <img src={URL.createObjectURL(formData.photo)} alt="Preview" style={{ width: '100px', height: '100px', marginTop: '10px' }} />}
                  </div>
                  <div className="col-md-8">
                    <div className="row">
                  <div className="col-md-6 mb-4">
                    <label htmlFor="adminName" className="form-label fw-bold">
                      <i className="fas fa-user me-1"></i>Administrator Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="adminName"
                      name="adminName"
                      value={formData.adminName}
                      onChange={handleChange}
                      placeholder="Enter administrator name"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label htmlFor="email" className="form-label fw-bold">
                      <i className="fas fa-envelope me-1"></i>Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="admin@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label htmlFor="fatherName" className="form-label fw-bold">
                      <i className="fas fa-user me-1"></i>Father's Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="fatherName"
                      name="fatherName"
                      value={formData.fatherName}
                      onChange={handleChange}
                      placeholder="Enter father's name"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label htmlFor="password" className="form-label fw-bold">
                      <i className="fas fa-lock me-1"></i>Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter password"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label htmlFor="confirmPassword" className="form-label fw-bold">
                      <i className="fas fa-lock me-1"></i>Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control form-control-lg"
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Confirm password"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label htmlFor="role" className="form-label fw-bold">
                      <i className="fas fa-briefcase me-1"></i>Role
                    </label>
                    <select
                      className="form-select form-select-lg"
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select Role</option>
                      <option value="Super Admin">Super Admin</option>
                      <option value="HR Manager">HR Manager</option>
                      <option value="System Admin">System Admin</option>
                      <option value="Department Head">Department Head</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-4">
                    <label htmlFor="department" className="form-label fw-bold">
                      <i className="fas fa-building me-1"></i>Department
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="department"
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      placeholder="e.g., Human Resources"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label htmlFor="presentAddress" className="form-label fw-bold">
                      <i className="fas fa-map-marker-alt me-1"></i>Present Address
                    </label>
                    <textarea
                      className="form-control form-control-lg"
                      id="presentAddress"
                      name="presentAddress"
                      value={formData.presentAddress}
                      onChange={handleChange}
                      placeholder="Enter present address"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label htmlFor="permanentAddress" className="form-label fw-bold">
                      <i className="fas fa-home me-1"></i>Permanent Address
                    </label>
                    <textarea
                      className="form-control form-control-lg"
                      id="permanentAddress"
                      name="permanentAddress"
                      value={formData.permanentAddress}
                      onChange={handleChange}
                      placeholder="Enter permanent address"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label fw-bold">
                    <i className="fas fa-shield-alt me-1"></i>Access Level
                  </label>
                  <div className="row">
                    <div className="col-md-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="accessLevel"
                          id="readOnly"
                          value="Read Only"
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="readOnly">
                          Read Only
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="accessLevel"
                          id="edit"
                          value="Edit"
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="edit">
                          Edit
                        </label>
                      </div>
                    </div>
                    <div className="col-md-4">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="accessLevel"
                          id="fullAccess"
                          value="Full Access"
                          onChange={handleChange}
                        />
                        <label className="form-check-label" htmlFor="fullAccess">
                          Full Access
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label htmlFor="religion" className="form-label fw-bold">
                      <i className="fas fa-pray me-1"></i>Religion
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="religion"
                      name="religion"
                      value={formData.religion}
                      onChange={handleChange}
                      placeholder="Enter religion"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label htmlFor="nationality" className="form-label fw-bold">
                      <i className="fas fa-flag me-1"></i>Nationality
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="nationality"
                      name="nationality"
                      value={formData.nationality}
                      onChange={handleChange}
                      placeholder="Enter nationality"
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="form-label fw-bold">
                    <i className="fas fa-key me-1"></i>Permissions
                  </label>
                  <div className="row">
                    {permissionsOptions.map(perm => (
                      <div key={perm} className="col-md-6">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            id={perm.replace(/\s+/g, '')}
                            value={perm}
                            onChange={handleChange}
                            checked={formData.permissions.includes(perm)}
                          />
                          <label className="form-check-label" htmlFor={perm.replace(/\s+/g, '')}>
                            {perm}
                          </label>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                  </div>
                </div>
                <div className="d-flex justify-content-between mt-5">
                  <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={onBack}>
                    <i className="fas fa-arrow-left me-2"></i>Back
                  </button>
                  <button type="submit" className="btn btn-success btn-lg px-4">
                    <i className="fas fa-save me-2"></i>Save Settings
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

export default AdministrationForm;