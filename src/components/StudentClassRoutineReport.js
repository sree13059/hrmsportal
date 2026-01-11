import React, { useState } from "react";
import axios from "axios";

const StudentClassRoutineReport = ({ onBack }) => {
  const [selectedShift, setSelectedShift] = useState("");
  const [selectedClass, setSelectedClass] = useState("");
  const [selectedSection, setSelectedSection] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");

  const [routineData, setRoutineData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const shifts = ["Morning", "Day", "Evening"];
  const classes = ["Class 1", "Class 2", "Class 3", "Class 4", "Class 5"];
  const sections = ["A", "B", "C"];
  const years = ["2023-2024", "2024-2025", "2025-2026"];
  const groups = ["Science", "Arts", "Commerce"];

  // 🔹 FETCH ROUTINE
  const handleShowRoutine = async () => {
    if (!selectedClass || !selectedSection) {
      alert("Please select Class and Section");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await axios.get(
        "https://hrms-backend-1we9.onrender.com/api/studentclassroutine/studentclassroutine",
        {
          params: {
            shift: selectedShift,
            className: selectedClass,
            section: selectedSection,
            year: selectedYear,
            group: selectedGroup
          }
        }
      );

      setRoutineData(response.data.data);
    } catch (err) {
      setError("Failed to fetch routine");
    } finally {
      setLoading(false);
    }
  };

  // 🔹 SAVE ROUTINE
  const handleSave = async () => {
    if (routineData.length === 0) {
      alert("No data to save");
      return;
    }

    try {
      await axios.post(
        "https://hrms-backend-1we9.onrender.com/api/studentclassroutine/save-report",
        {
          shift: selectedShift,
          className: selectedClass,
          section: selectedSection,
          year: selectedYear,
          group: selectedGroup,
          routineData
        }
      );

      alert("Routine saved successfully");
    } catch (err) {
      alert("Failed to save routine");
    }
  };

  // 🔹 RESET
  const handleReset = () => {
    setSelectedShift("");
    setSelectedClass("");
    setSelectedSection("");
    setSelectedYear("");
    setSelectedGroup("");
    setRoutineData([]);
    setError("");
  };

  // 🔹 CANCEL
  const handleCancel = () => {
    handleReset();
  };

  const handlePrint = () => window.print();

  return (
    <div className="container mt-4">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white">
          <h4>Student Class Routine Report</h4>
        </div>

        <div className="card-body">
          {/* FILTERS */}
          <div className="row mb-3">
            <div className="col-md-2">
              <label>Shift</label>
              <select className="form-control" value={selectedShift} onChange={e => setSelectedShift(e.target.value)}>
                <option value="">Select</option>
                {shifts.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>

            <div className="col-md-2">
              <label>Class</label>
              <select className="form-control" value={selectedClass} onChange={e => setSelectedClass(e.target.value)}>
                <option value="">Select</option>
                {classes.map(c => <option key={c}>{c}</option>)}
              </select>
            </div>

            <div className="col-md-2">
              <label>Section</label>
              <select className="form-control" value={selectedSection} onChange={e => setSelectedSection(e.target.value)}>
                <option value="">Select</option>
                {sections.map(s => <option key={s}>{s}</option>)}
              </select>
            </div>

            <div className="col-md-2">
              <label>Year</label>
              <select className="form-control" value={selectedYear} onChange={e => setSelectedYear(e.target.value)}>
                <option value="">Select</option>
                {years.map(y => <option key={y}>{y}</option>)}
              </select>
            </div>

            <div className="col-md-2">
              <label>Group</label>
              <select className="form-control" value={selectedGroup} onChange={e => setSelectedGroup(e.target.value)}>
                <option value="">Select</option>
                {groups.map(g => <option key={g}>{g}</option>)}
              </select>
            </div>

            <div className="col-md-2 d-flex align-items-end">
              <button className="btn btn-info w-100" onClick={handleShowRoutine}>
                Show
              </button>
            </div>
          </div>

          {/* STATUS */}
          {loading && <p className="text-center">Loading...</p>}
          {error && <p className="text-danger text-center">{error}</p>}

          {/* TABLE */}
          {routineData.length > 0 && (
            <>
              <table className="table table-bordered">
                <thead className="table-dark">
                  <tr>
                    <th>Day</th>
                    <th>Slot</th>
                    <th>Subject</th>
                    <th>Teacher</th>
                  </tr>
                </thead>
                <tbody>
                  {routineData.map(item => (
                    <tr key={item._id}>
                      <td>{item.day}</td>
                      <td>{item.slot}</td>
                      <td>{item.subject}</td>
                      <td>{item.teacher}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* ACTION BUTTONS */}
              <div className="mt-3 d-flex gap-2 flex-wrap">
                <button className="btn btn-success" onClick={handleSave}>Save</button>
                <button className="btn btn-warning" onClick={handleReset}>Reset</button>
                <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
                <button className="btn btn-primary" onClick={handlePrint}>Print</button>
                <button className="btn btn-secondary" onClick={onBack}>Back</button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentClassRoutineReport;

