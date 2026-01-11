import React, { useState } from 'react';
import axios from "axios";
const DebitHeadForm = ({ onBack }) => {
  const [headName, setHeadName] = useState('');
  const [description, setDescription] = useState('');
  const [isParentHead, setIsParentHead] = useState(false);
  const [linkedWithClass, setLinkedWithClass] = useState(false);
  const [selectedClass, setSelectedClass] = useState('');
  const [entryBy, setEntryBy] = useState('');
  const [entryDate, setEntryDate] = useState('');

  // Mock data
  const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'];

const handleSubmit = async (e) => {
  e.preventDefault();

  const debitData = {
    headName,
    description,
    isParentHead,
    linkedWithClass,
    selectedClass: linkedWithClass ? selectedClass : "",
    entryBy,
    entryDate
  };

  try {
    const response = await axios.post(
      "http://localhost:5000/api/debit/add",
      debitData
    );

    console.log("Debit submitted:", response.data);
    alert("Debit submitted successfully!");

    // Reset form
    setHeadName("");
    setDescription("");
    setIsParentHead(false);
    setLinkedWithClass(false);
    setSelectedClass("");
    setEntryBy("");
    setEntryDate("");
  } catch (error) {
    console.error("Error submitting debit:", error);
    alert("Failed to submit Debit");
  }
};

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Debit Head Form</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="headName" className="form-label">Head Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="headName"
                    value={headName}
                    onChange={(e) => setHeadName(e.target.value)}
                    placeholder="Enter head name"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description"
                    rows="3"
                  />
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="isParentHead"
                    checked={isParentHead}
                    onChange={(e) => setIsParentHead(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="isParentHead">
                    Is Parent Head
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="linkedWithClass"
                    checked={linkedWithClass}
                    onChange={(e) => setLinkedWithClass(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="linkedWithClass">
                    Linked with Class
                  </label>
                </div>
                {linkedWithClass && (
                  <div className="form-group mb-3">
                    <label htmlFor="selectedClass" className="form-label">Select Class</label>
                    <select
                      className="form-control"
                      id="selectedClass"
                      value={selectedClass}
                      onChange={(e) => setSelectedClass(e.target.value)}
                      required
                    >
                      <option value="">Select Class</option>
                      {classes.map(cls => <option key={cls} value={cls}>{cls}</option>)}
                    </select>
                  </div>
                )}
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="entryBy" className="form-label">Entry By</label>
                    <select
                      className="form-control"
                      id="entryBy"
                      value={entryBy}
                      onChange={(e) => setEntryBy(e.target.value)}
                    >
                      <option value="">Select Entry By</option>
                      <option value="admin">Admin</option>
                      <option value="superadmin">Superadmin</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="entryDate" className="form-label">Entry Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="entryDate"
                      value={entryDate}
                      onChange={(e) => setEntryDate(e.target.value)}
                    />
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
                    <button type="button" className="btn btn-warning" onClick={() => {
                      setHeadName('');
                      setDescription('');
                      setIsParentHead(false);
                      setLinkedWithClass(false);
                      setSelectedClass('');
                      setEntryBy('');
                      setEntryDate('');
                    }}>
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

export default DebitHeadForm;