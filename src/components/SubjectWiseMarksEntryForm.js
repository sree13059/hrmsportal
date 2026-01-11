import React, { useState } from 'react';
import axios from "axios";

const SubjectWiseMarksEntryForm = ({ onBack }) => {
  const [selectedShift, setSelectedShift] = useState('');
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [selectedExamTerm, setSelectedExamTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('');
  const [students, setStudents] = useState([]);
  const [marks, setMarks] = useState({});
  const [entryBy, setEntryBy] = useState('');
  const [entryDate, setEntryDate] = useState('');

  // Mock data
  const shifts = ['Morning', 'Day', 'Evening'];
  const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'];
  const years = ['2023-2024', '2024-2025', '2025-2026'];
  const groups = ['Science', 'Arts', 'Commerce'];
  const examTerms = ['Midterm', 'Final', 'Quiz', 'Test'];
  const subjects = ['Mathematics', 'Physics', 'Chemistry', 'Biology', 'Bengali', 'English'];

  const mockStudents = [
    { id: 'S001', name: 'John Doe' },
    { id: 'S002', name: 'Jane Smith' },
    { id: 'S003', name: 'Bob Johnson' },
    { id: 'S004', name: 'Alice Brown' },
    { id: 'S005', name: 'Charlie Wilson' }
  ];

  const handleShowStudents = () => {
    if (selectedShift && selectedClass && selectedYear && selectedGroup && selectedExamTerm && selectedSubject) {
      setStudents(mockStudents);
      const initialMarks = {};
      mockStudents.forEach(student => {
        initialMarks[student.id] = { subjective: '', sba: '', objective: '', practical: '', absent: false };
      });
      setMarks(initialMarks);
    } else {
      alert('Please select all fields.');
    }
  };

  const handleMarksChange = (studentId, field, value) => {
    setMarks(prev => ({
      ...prev,
      [studentId]: {
        ...prev[studentId],
        [field]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  const marksData = {
    shift: selectedShift,
    class: selectedClass,
    year: selectedYear,
    group: selectedGroup,
    examTerm: selectedExamTerm,
    subject: selectedSubject,
    studentMarks: marks,
    entryBy,
    entryDate
  };

  try {
    const response = await axios.post(
      "http://localhost:5000/api/subject-wise-marks/save",
      marksData,
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    );

    console.log("Backend Response:", response.data);
    alert("Marks entry saved successfully!");

    // ✅ Reset after successful save
    setSelectedShift("");
    setSelectedClass("");
    setSelectedYear("");
    setSelectedGroup("");
    setSelectedExamTerm("");
    setSelectedSubject("");
    setStudents([]);
    setMarks({});
    setEntryBy("");
    setEntryDate("");

  } catch (error) {
  console.error("FULL ERROR:", error);

  if (error.response) {
    console.error("Backend Error:", error.response.data);
    console.error("Status:", error.response.status);
    alert(error.response.data.message || "Backend error");
  } else if (error.request) {
    console.error("No response from server:", error.request);
    alert("Server not responding. Is backend running?");
  } else {
    console.error("Axios error:", error.message);
    alert(error.message);
  }
}

};


  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-12">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Subject Wise Marks Entry Form</h4>
            </div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-md-2">
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
                <div className="col-md-2">
                  <label htmlFor="class" className="form-label">Class</label>
                  <select
                    className="form-control"
                    id="class"
                    value={selectedClass}
                    onChange={(e) => setSelectedClass(e.target.value)}
                    required
                  >
                    <option value="">Select Class</option>
                    {classes.map(cls => <option key={cls} value={cls}>{cls}</option>)}
                  </select>
                </div>
                <div className="col-md-2">
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
                <div className="col-md-2">
                  <label htmlFor="group" className="form-label">Group</label>
                  <select
                    className="form-control"
                    id="group"
                    value={selectedGroup}
                    onChange={(e) => setSelectedGroup(e.target.value)}
                    required
                  >
                    <option value="">Select Group</option>
                    {groups.map(grp => <option key={grp} value={grp}>{grp}</option>)}
                  </select>
                </div>
                <div className="col-md-2">
                  <label htmlFor="examTerm" className="form-label">Exam Term</label>
                  <select
                    className="form-control"
                    id="examTerm"
                    value={selectedExamTerm}
                    onChange={(e) => setSelectedExamTerm(e.target.value)}
                    required
                  >
                    <option value="">Select Exam Term</option>
                    {examTerms.map(term => <option key={term} value={term}>{term}</option>)}
                  </select>
                </div>
                <div className="col-md-2">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <select
                    className="form-control"
                    id="subject"
                    value={selectedSubject}
                    onChange={(e) => setSelectedSubject(e.target.value)}
                    required
                  >
                    <option value="">Select Subject</option>
                    {subjects.map(subj => <option key={subj} value={subj}>{subj}</option>)}
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <button type="button" className="btn btn-info" onClick={handleShowStudents}>
                  Show Students
                </button>
              </div>
              {students.length > 0 && (
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <h5>Enter Marks for {selectedSubject}</h5>
                    <div className="table-responsive">
                      <table className="table table-striped table-bordered">
                        <thead className="table-dark">
                          <tr>
                            <th>Roll No</th>
                            <th>Student Name</th>
                            <th>Subjective</th>
                            <th>SBA</th>
                            <th>Objective</th>
                            <th>Practical</th>
                            <th>Is Absent</th>
                          </tr>
                        </thead>
                        <tbody>
                          {students.map(student => (
                            <tr key={student.id}>
                              <td>{student.id}</td>
                              <td>{student.name}</td>
                              <td>
                                <input
                                  type="number"
                                  className="form-control"
                                  value={marks[student.id]?.subjective || ''}
                                  onChange={(e) => handleMarksChange(student.id, 'subjective', e.target.value)}
                                  placeholder="Enter marks"
                                  disabled={marks[student.id]?.absent}
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  className="form-control"
                                  value={marks[student.id]?.sba || ''}
                                  onChange={(e) => handleMarksChange(student.id, 'sba', e.target.value)}
                                  placeholder="Enter marks"
                                  disabled={marks[student.id]?.absent}
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  className="form-control"
                                  value={marks[student.id]?.objective || ''}
                                  onChange={(e) => handleMarksChange(student.id, 'objective', e.target.value)}
                                  placeholder="Enter marks"
                                  disabled={marks[student.id]?.absent}
                                />
                              </td>
                              <td>
                                <input
                                  type="number"
                                  className="form-control"
                                  value={marks[student.id]?.practical || ''}
                                  onChange={(e) => handleMarksChange(student.id, 'practical', e.target.value)}
                                  placeholder="Enter marks"
                                  disabled={marks[student.id]?.absent}
                                />
                              </td>
                              <td>
                                <input
                                  type="checkbox"
                                  checked={marks[student.id]?.absent || false}
                                  onChange={(e) => handleMarksChange(student.id, 'absent', e.target.checked)}
                                />
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center gap-3 mb-3">
                    <button type="submit" className="btn btn-success">
                      Save
                    </button>
                    <button type="button" className="btn btn-danger">
                      Cancel
                    </button>
                    <button type="button" className="btn btn-warning" onClick={() => {
                      setSelectedShift('');
                      setSelectedClass('');
                      setSelectedYear('');
                      setSelectedGroup('');
                      setSelectedExamTerm('');
                      setSelectedSubject('');
                      setStudents([]);
                      setMarks({});
                      setEntryBy('');
                      setEntryDate('');
                    }}>
                      Reset
                    </button>
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
                </form>
              )}
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

export default SubjectWiseMarksEntryForm;