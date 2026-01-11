import React, { useState } from "react";
import axios from "axios";

const GroupSubjectsForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    class: "",
    group: "",
    subjective: "",
    subjectName: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // SAVE GROUP SUBJECT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      await axios.post(
        "http://localhost:5000/api/group-subjects/add",
        formData
      );

      alert("Group Subjects saved successfully!");

      // Reset form
      setFormData({
        class: "",
        group: "",
        subjective: "",
        subjectName: "",
      });
    } catch (error) {
      alert(error.response?.data?.message || "Error saving Group Subjects");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setFormData({
      class: "",
      group: "",
      subjective: "",
      subjectName: "",
    });
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Group Subjects Form</h4>
            </div>

            <div className="card-body">
              <form onSubmit={handleSubmit}>
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

                {/* Group */}
                <div className="mb-3">
                  <label className="form-label">Group</label>
                  <input
                    type="text"
                    className="form-control"
                    name="group"
                    value={formData.group}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Subjective */}
                <div className="mb-3">
                  <label className="form-label">Subjective</label>
                  <select
                    className="form-control"
                    name="subjective"
                    value={formData.subjective}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="bengali">Bengali</option>
                    <option value="english">English</option>
                    <option value="mathmetics">Mathmetics</option>
                    <option value="islam_sikkha">Islam Sikkha</option>
                  </select>
                </div>

                {/* Subject Name */}
                <div className="mb-3">
                  <label className="form-label">Subject Name</label>
                  <select
                    className="form-control"
                    name="subjectName"
                    value={formData.subjectName}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="elective_math">Elective Math</option>
                    <option value="agriculture">Agriculture</option>
                    <option value="biology">Biology</option>
                    <option value="other">Other</option>
                  </select>
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

export default GroupSubjectsForm;
