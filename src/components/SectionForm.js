import React, { useState } from "react";
import axios from "axios";

const SectionForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    shift: "",
    class: "",
    sectionCode: "",
    sectionName: "",
    entryBy: "",
    entryDate: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // SAVE SECTION
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await axios.post("https://hrms-backend-1we9.onrender.com/api/sections/add", formData);
      alert("Section saved successfully!");

      // Reset form
      setFormData({
        shift: "",
        class: "",
        sectionCode: "",
        sectionName: "",
        entryBy: "",
        entryDate: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Error saving section");
    } finally {
      setLoading(false);
    }
  };

  // RESET FORM
  const handleReset = () => {
    setFormData({
      shift: "",
      class: "",
      sectionCode: "",
      sectionName: "",
      entryBy: "",
      entryDate: "",
    });
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Section Form</h4>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>
                {/* Shift */}
                <div className="mb-3">
                  <label className="form-label">Shift</label>
                  <input
                    type="text"
                    className="form-control"
                    name="shift"
                    value={formData.shift}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Class */}
                <div className="mb-3">
                  <label className="form-label">Class</label>
                  <input
                    type="text"
                    className="form-control"
                    name="class"
                    value={formData.class}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Section Code */}
                <div className="mb-3">
                  <label className="form-label">Section Code</label>
                  <input
                    type="text"
                    className="form-control"
                    name="sectionCode"
                    value={formData.sectionCode}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Section Name */}
                <div className="mb-3">
                  <label className="form-label">Section Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="sectionName"
                    value={formData.sectionName}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Entry By */}
                <div className="mb-3">
                  <label className="form-label">Entry By</label>
                  <select
                    className="form-control"
                    name="entryBy"
                    value={formData.entryBy}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="admin">Admin</option>
                    <option value="superadmin">Superadmin</option>
                  </select>
                </div>

                {/* Entry Date */}
                <div className="mb-3">
                  <label className="form-label">Entry Date</label>
                  <input
                    type="date"
                    className="form-control"
                    name="entryDate"
                    value={formData.entryDate}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Buttons */}
                <div className="d-flex justify-content-between">
                  <div className="d-flex gap-2">
                    <button
                      type="submit"
                      className="btn btn-success"
                      disabled={loading}
                    >
                      {loading ? "Saving..." : "Save"}
                    </button>

                    <button
                      type="button"
                      className="btn btn-warning"
                      onClick={handleReset}
                    >
                      Reset
                    </button>
                  </div>

                  <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={onBack}
                  >
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

export default SectionForm;

