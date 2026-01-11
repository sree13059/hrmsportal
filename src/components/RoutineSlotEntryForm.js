import React, { useState } from 'react';
import axios from "axios";

const RoutineSlotEntryForm = ({ onBack }) => {
  const [selectedShift, setSelectedShift] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedDay, setSelectedDay] = useState('');
  const [slotTitle, setSlotTitle] = useState('');
  const [timeFrom, setTimeFrom] = useState('');
  const [timeTo, setTimeTo] = useState('');
  const [description, setDescription] = useState('');
  const [isBreak, setIsBreak] = useState(false);
  const [savedSlots, setSavedSlots] = useState([]);
  const [entryBy, setEntryBy] = useState('');
  const [entryDate, setEntryDate] = useState('');

  // Mock data
  const shifts = ['Morning', 'Day', 'Evening'];
  const years = ['2023-2024', '2024-2025', '2025-2026'];
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

 const handleSubmit = async (e) => {
  e.preventDefault();

  const slotData = {
    shift: selectedShift,
    year: selectedYear,
    day: selectedDay,
    slotTitle,
    timeFrom,
    timeTo,
    description,
    isBreak,
    entryBy,
    entryDate
  };

  try {
    const response = await axios.post(
      "http://localhost:5000/api/routine-slots/create",
      slotData
    );

    // Save response data to table
    setSavedSlots(prev => [...prev, response.data.data]);

    alert("Routine Slot Entry saved successfully!");

    // Reset form
    setSelectedShift("");
    setSelectedYear("");
    setSelectedDay("");
    setSlotTitle("");
    setTimeFrom("");
    setTimeTo("");
    setDescription("");
    setIsBreak(false);
    setEntryBy("");
    setEntryDate("");

  } catch (error) {
    console.error("Save error:", error);
    alert("Failed to save routine slot");
  }
};


  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Routine Slot Entry Form</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-4">
                    <label htmlFor="shift" className="form-label">Shift</label>
                    <select
                      className="form-control"
                      id="shift"
                      value={selectedShift}
                      onChange={(e) => setSelectedShift(e.target.value)}
                      required
                    >
                      <option value="">Select Shift</option>
                      {shifts.map(shift => <option key={shift} value={shift}>{shift}</option>)}
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="year" className="form-label">Year</label>
                    <select
                      className="form-control"
                      id="year"
                      value={selectedYear}
                      onChange={(e) => setSelectedYear(e.target.value)}
                      required
                    >
                      <option value="">Select Year</option>
                      {years.map(year => <option key={year} value={year}>{year}</option>)}
                    </select>
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="day" className="form-label">Day</label>
                    <select
                      className="form-control"
                      id="day"
                      value={selectedDay}
                      onChange={(e) => setSelectedDay(e.target.value)}
                      required
                    >
                      <option value="">Select Day</option>
                      {days.map(day => <option key={day} value={day}>{day}</option>)}
                    </select>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="timeFrom" className="form-label">Time From</label>
                    <input
                      type="time"
                      className="form-control"
                      id="timeFrom"
                      value={timeFrom}
                      onChange={(e) => setTimeFrom(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="timeTo" className="form-label">Time To</label>
                    <input
                      type="time"
                      className="form-control"
                      id="timeTo"
                      value={timeTo}
                      onChange={(e) => setTimeTo(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="slotTitle" className="form-label">Slot Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="slotTitle"
                    value={slotTitle}
                    onChange={(e) => setSlotTitle(e.target.value)}
                    placeholder="e.g., 1st period"
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
                    id="isBreak"
                    checked={isBreak}
                    onChange={(e) => setIsBreak(e.target.checked)}
                  />
                  <label className="form-check-label" htmlFor="isBreak">
                    Is Break
                  </label>
                </div>
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
                      setSelectedShift('');
                      setSelectedYear('');
                      setSelectedDay('');
                      setSlotTitle('');
                      setTimeFrom('');
                      setTimeTo('');
                      setDescription('');
                      setIsBreak(false);
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
      {savedSlots.length > 0 && (
        <div className="row justify-content-center mt-4">
          <div className="col-md-12">
            <div className="card shadow-lg">
              <div className="card-header bg-success text-white">
                <h4 className="mb-0">Saved Routine Slots</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-striped table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th>Year</th>
                        <th>Shift</th>
                        <th>Day</th>
                        <th>Time From</th>
                        <th>Time To</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Is Tiffin?</th>
                      </tr>
                    </thead>
                    <tbody>
                      {savedSlots.map((slot, index) => (
                        <tr key={index}>
                          <td>{slot.year}</td>
                          <td>{slot.shift}</td>
                          <td>{slot.day}</td>
                          <td>{slot.timeFrom}</td>
                          <td>{slot.timeTo}</td>
                          <td>{slot.slotTitle}</td>
                          <td>{slot.description || '-'}</td>
                          <td>{slot.isBreak ? 'Yes' : 'No'}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RoutineSlotEntryForm;