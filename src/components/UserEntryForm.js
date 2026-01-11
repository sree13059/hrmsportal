import React, { useState } from "react";

const UserEntryForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    rePassword: "",
    isActive: false,
    permittedSections: [],
    entryBy: "",
    entryDate: ""
  });

  const [errors, setErrors] = useState({});
  const [serverMessage, setServerMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // success | danger

  // Handle normal input change
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  };

  // Handle permitted sections
  const handleSectionChange = (section) => {
    setFormData((prev) => ({
      ...prev,
      permittedSections: prev.permittedSections.includes(section)
        ? prev.permittedSections.filter((s) => s !== section)
        : [...prev.permittedSections, section]
    }));
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};
    if (!formData.username) newErrors.username = "Username is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.rePassword)
      newErrors.rePassword = "Passwords do not match";
    if (!formData.permittedSections.length)
      newErrors.permittedSections = "At least one section is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      const response = await fetch("https://hrms-backend-1we9.onrender.com/api/users/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        setMessageType("danger");
        setServerMessage(data.message || "Something went wrong");
        return;
      }

      setMessageType("success");
      setServerMessage(data.message || "User created successfully");

      // Reset form
      setFormData({
        username: "",
        password: "",
        rePassword: "",
        isActive: false,
        permittedSections: [],
        entryBy: "",
        entryDate: ""
      });

      setErrors({});
    } catch (error) {
      setMessageType("danger");
      setServerMessage("Server not responding. Please try again.");
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">User Entry Form</h4>
            </div>

            <div className="card-body">
              {/* SERVER MESSAGE */}
              {serverMessage && (
                <div className={`alert alert-${messageType}`}>
                  {serverMessage}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                {/* Username */}
                <div className="mb-3">
                  <label className="form-label">Username</label>
                  <input
                    type="text"
                    name="username"
                    className={`form-control ${
                      errors.username ? "is-invalid" : ""
                    }`}
                    value={formData.username}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">{errors.username}</div>
                </div>

                {/* Password */}
                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    name="password"
                    className={`form-control ${
                      errors.password ? "is-invalid" : ""
                    }`}
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">{errors.password}</div>
                </div>

                {/* Re Password */}
                <div className="mb-3">
                  <label className="form-label">Re-enter Password</label>
                  <input
                    type="password"
                    name="rePassword"
                    className={`form-control ${
                      errors.rePassword ? "is-invalid" : ""
                    }`}
                    value={formData.rePassword}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">{errors.rePassword}</div>
                </div>

                {/* Active */}
                <div className="mb-3 form-check">
                  <input
                    type="checkbox"
                    name="isActive"
                    className="form-check-input"
                    checked={formData.isActive}
                    onChange={handleChange}
                  />
                  <label className="form-check-label">Is Active</label>
                </div>

                {/* Permitted Sections */}
                <div className="mb-3">
                  <label className="form-label">Permitted Sections</label>
                  {[
                    "superadmin",
                    "pims",
                    "accounts",
                    "library",
                    "hostel",
                    "attendance",
                    "results"
                  ].map((section) => (
                    <div key={section} className="form-check">
                      <input
                        type="checkbox"
                        className="form-check-input"
                        checked={formData.permittedSections.includes(section)}
                        onChange={() => handleSectionChange(section)}
                      />
                      <label className="form-check-label">
                        {section.toUpperCase()}
                      </label>
                    </div>
                  ))}
                  {errors.permittedSections && (
                    <div className="text-danger">
                      {errors.permittedSections}
                    </div>
                  )}
                </div>

                {/* Entry By */}
                <div className="mb-3">
                  <label className="form-label">Entry By</label>
                  <input
                    type="text"
                    name="entryBy"
                    className="form-control"
                    value={formData.entryBy}
                    onChange={handleChange}
                  />
                </div>

                {/* Entry Date */}
                <div className="mb-3">
                  <label className="form-label">Entry Date</label>
                  <input
                    type="date"
                    name="entryDate"
                    className="form-control"
                    value={formData.entryDate}
                    onChange={handleChange}
                  />
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-center gap-4">
                  <button type="submit" className="btn btn-success">
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() =>
                      setFormData({
                        username: "",
                        password: "",
                        rePassword: "",
                        isActive: false,
                        permittedSections: [],
                        entryBy: "",
                        entryDate: ""
                      })
                    }
                  >
                    Reset
                  </button>
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

export default UserEntryForm;

