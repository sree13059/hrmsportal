import React, { useState } from 'react';

const SuperAdminForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    superAdminName: '',
    email: '',
    password: '',
    confirmPassword: '',
    permissions: []
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
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (formData.password !== formData.confirmPassword) {
    alert("Passwords do not match");
    return;
  }

  const response = await fetch("http://localhost:5000/api/super-admin/create", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  });

  const data = await response.json();
  alert(data.message);
};


  const permissionsOptions = [
    'Full System Access',
    'User Management',
    'System Configuration',
    'Data Backup',
    'Security Settings'
  ];

  return (
    <div className="container-fluid d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="row justify-content-center w-100">
        <div className="col-lg-8 col-md-10">
          <div className="card shadow-lg border-0 rounded-lg">
            <div className="card-header bg-danger text-white text-center py-4">
              <h3 className="mb-0">Super Admin Form</h3>
            </div>
            <div className="card-body p-5">
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label htmlFor="superAdminName" className="form-label fw-bold">
                      Super Admin Name
                    </label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="superAdminName"
                      name="superAdminName"
                      value={formData.superAdminName}
                      onChange={handleChange}
                      placeholder="Enter super admin name"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <label htmlFor="email" className="form-label fw-bold">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="superadmin@example.com"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <label htmlFor="password" className="form-label fw-bold">
                      Password
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
                      Confirm Password
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
                <div className="mb-4">
                  <label className="form-label fw-bold">Permissions</label>
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
                <div className="d-flex justify-content-between mt-5">
                  <button type="button" className="btn btn-outline-secondary btn-lg px-4" onClick={onBack}>
                    Back
                  </button>
                  <button type="submit" className="btn btn-danger btn-lg px-4">
                    Create Super Admin
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

export default SuperAdminForm;