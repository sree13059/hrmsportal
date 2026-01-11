import React, { useState } from 'react';
import axios from "axios";

const RoutineEntryForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    class: '',
    section: '',
    day: '',
    slot: '',
    subject: '',
    teacher: '',
    entryBy: '',
    entryDate: ''
  });

  const [routineData, setRoutineData] = useState([]);

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
    const response = await axios.post(
      "http://localhost:5000/api/routine-entry/create",
      {
        class: formData.class,
        section: formData.section,
        day: formData.day,
        slot: formData.slot,
        subject: formData.subject,
        teacher: formData.teacher,
        entryBy: formData.entryBy,
        entryDate: formData.entryDate
      }
    );

    // Add saved data from backend
    setRoutineData(prev => [...prev, response.data.data]);

    console.log("Routine Entry submitted:", response.data.data);
    alert("Routine Entry added successfully!");

    // Reset form
    setFormData({
      class: "",
      section: "",
      day: "",
      slot: "",
      subject: "",
      teacher: "",
      entryBy: "",
      entryDate: ""
    });

  } catch (error) {
    console.error("Save error:", error);
    alert("Failed to save routine entry");
  }
};


  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Routine Entry Form</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit} className="mb-4">
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="class" className="form-label">Class</label>
                    <input
                      type="text"
                      className="form-control"
                      id="class"
                      name="class"
                      value={formData.class}
                      onChange={handleChange}
                      placeholder="Enter class"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
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
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="day" className="form-label">Day</label>
                    <select
                      className="form-control"
                      id="day"
                      name="day"
                      value={formData.day}
                      onChange={handleChange}
                    >
                      <option value="">Select Day</option>
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                    </select>
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="slot" className="form-label">Slot</label>
                    <input
                      type="text"
                      className="form-control"
                      id="slot"
                      name="slot"
                      value={formData.slot}
                      onChange={handleChange}
                      placeholder="Enter slot"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter subject"
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="teacher" className="form-label">Teacher</label>
                    <input
                      type="text"
                      className="form-control"
                      id="teacher"
                      name="teacher"
                      value={formData.teacher}
                      onChange={handleChange}
                      placeholder="Enter teacher"
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
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
                  <div className="col-md-6 mb-3">
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
                </div>
                <div className="d-flex justify-content-center gap-3">
                  <button type="submit" className="btn btn-success">
                    Save
                  </button>
                  <button type="button" className="btn btn-danger">
                    Delete
                  </button>
                  <button type="button" className="btn btn-warning" onClick={() => setFormData({
                    class: '',
                    section: '',
                    day: '',
                    slot: '',
                    subject: '',
                    teacher: '',
                    entryBy: '',
                    entryDate: ''
                  })}>
                    Reset
                  </button>
                </div>
              </form>
              <div className="table-responsive">
                <table className="table table-striped table-bordered">
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>Class</th>
                      <th>Section</th>
                      <th>Day</th>
                      <th>Slot</th>
                      <th>Subject</th>
                      <th>Teacher</th>
                      <th>Entry By</th>
                      <th>Entry Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {routineData.map(item => (
                      <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.class}</td>
                        <td>{item.section}</td>
                        <td>{item.day}</td>
                        <td>{item.slot}</td>
                        <td>{item.subject}</td>
                        <td>{item.teacher}</td>
                        <td>{item.entryBy}</td>
                        <td>{item.entryDate}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-3">
                <button className="btn btn-secondary" onClick={onBack}>
                  Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoutineEntryForm;