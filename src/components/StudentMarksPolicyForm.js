import React, { useState } from 'react';
import axios from "axios";

const StudentMarksPolicyForm = ({ onBack }) => {
  const [selectedClass, setSelectedClass] = useState('');
  const [selectedSession, setSelectedSession] = useState('');
  const [selectedGroup, setSelectedGroup] = useState('');
  const [subjects, setSubjects] = useState([]);
  const [policies, setPolicies] = useState({});
  const [savedPolicies, setSavedPolicies] = useState([]);
  const [entryBy, setEntryBy] = useState('');
  const [entryDate, setEntryDate] = useState('');

  // Mock data
  const classes = ['Class 1', 'Class 2', 'Class 3', 'Class 4', 'Class 5'];
  const sessions = ['2023-2024', '2024-2025', '2025-2026'];
  const groups = ['Science', 'Arts', 'Commerce'];

  const mockSubjects = {
    'Science': ['Mathematics', 'Physics', 'Chemistry', 'Biology'],
    'Arts': ['Bengali', 'English', 'History', 'Geography'],
    'Commerce': ['Accounting', 'Business Studies', 'Economics', 'Statistics']
  };

  const handleShow = () => {
    if (selectedClass && selectedSession && selectedGroup) {
      const subj = mockSubjects[selectedGroup] || [];
      setSubjects(subj);
      const initialPolicies = {};
      subj.forEach(subject => {
        initialPolicies[subject] = {
          haveClassTest: false,
          classTestTotalMarks: '',
          passMarks: '',
          isHandwritingSpelling: false,
          writtenPassMarks: '',
          totalPassMarks: ''
        };
      });
      setPolicies(initialPolicies);
    } else {
      alert('Please select Class, Session, and Group.');
    }
  };

  const handlePolicyChange = (subject, field, value) => {
    setPolicies(prev => ({
      ...prev,
      [subject]: {
        ...prev[subject],
        [field]: value
      }
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const policyData = {
    class: selectedClass,
    session: selectedSession,
    group: selectedGroup,
    subjects: policies,
    entryBy,
    entryDate
  };

  try {
    const response = await axios.post(
      "http://localhost:5000/api/student-marks-policies",
      policyData
    );

    if (response.data.success) {
      // Save returned data (optional)
      setSavedPolicies(prev => [...prev, response.data.data]);

      console.log("Student Marks Policy saved:", response.data.data);
      alert("Student Marks Policy submitted successfully!");

      // Reset form
      setSelectedClass('');
      setSelectedSession('');
      setSelectedGroup('');
      setSubjects([]);
      setPolicies({});
      setEntryBy('');
      setEntryDate('');
    }
  } catch (error) {
    console.error("Error saving policy:", error);
    alert("Failed to submit Student Marks Policy");
  }
};


  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Student Marks Policy Form</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-4">
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
                  <div className="col-md-4">
                    <label htmlFor="session" className="form-label">Session</label>
                    <select
                      className="form-control"
                      id="session"
                      value={selectedSession}
                      onChange={(e) => setSelectedSession(e.target.value)}
                      required
                    >
                      <option value="">Select Session</option>
                      {sessions.map(sess => <option key={sess} value={sess}>{sess}</option>)}
                    </select>
                  </div>
                  <div className="col-md-4">
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
                </div>
                <div className="mb-3">
                  <button type="button" className="btn btn-info" onClick={handleShow}>
                    Show
                  </button>
                </div>
                {subjects.length > 0 && (
                  <div className="mb-3">
                    <h5>Subjects and Policies</h5>
                    {subjects.map(subject => (
                      <div key={subject} className="border p-3 mb-3">
                        <h6>{subject}</h6>
                        <div className="row">
                          <div className="col-md-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`haveClassTest-${subject}`}
                                checked={policies[subject]?.haveClassTest || false}
                                onChange={(e) => handlePolicyChange(subject, 'haveClassTest', e.target.checked)}
                              />
                              <label className="form-check-label" htmlFor={`haveClassTest-${subject}`}>
                                Have Class Test
                              </label>
                            </div>
                          </div>
                          <div className="col-md-3">
                            <label htmlFor={`classTestTotalMarks-${subject}`} className="form-label">Class Test Total Marks</label>
                            <input
                              type="number"
                              className="form-control"
                              id={`classTestTotalMarks-${subject}`}
                              value={policies[subject]?.classTestTotalMarks || ''}
                              onChange={(e) => handlePolicyChange(subject, 'classTestTotalMarks', e.target.value)}
                              placeholder="Enter marks"
                            />
                          </div>
                          <div className="col-md-3">
                            <label htmlFor={`passMarks-${subject}`} className="form-label">Pass Marks</label>
                            <input
                              type="number"
                              className="form-control"
                              id={`passMarks-${subject}`}
                              value={policies[subject]?.passMarks || ''}
                              onChange={(e) => handlePolicyChange(subject, 'passMarks', e.target.value)}
                              placeholder="Enter marks"
                            />
                          </div>
                          <div className="col-md-3">
                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                id={`isHandwritingSpelling-${subject}`}
                                checked={policies[subject]?.isHandwritingSpelling || false}
                                onChange={(e) => handlePolicyChange(subject, 'isHandwritingSpelling', e.target.checked)}
                              />
                              <label className="form-check-label" htmlFor={`isHandwritingSpelling-${subject}`}>
                                Is Marks in Handwriting/Spelling
                              </label>
                            </div>
                          </div>
                        </div>
                        <div className="row mt-2">
                          <div className="col-md-4">
                            <label htmlFor={`writtenPassMarks-${subject}`} className="form-label">Written Pass Marks</label>
                            <input
                              type="number"
                              className="form-control"
                              id={`writtenPassMarks-${subject}`}
                              value={policies[subject]?.writtenPassMarks || ''}
                              onChange={(e) => handlePolicyChange(subject, 'writtenPassMarks', e.target.value)}
                              placeholder="Enter marks"
                            />
                          </div>
                          <div className="col-md-4">
                            <label htmlFor={`totalPassMarks-${subject}`} className="form-label">Total Pass Marks</label>
                            <input
                              type="number"
                              className="form-control"
                              id={`totalPassMarks-${subject}`}
                              value={policies[subject]?.totalPassMarks || ''}
                              onChange={(e) => handlePolicyChange(subject, 'totalPassMarks', e.target.value)}
                              placeholder="Enter marks"
                            />
                          </div>
                        </div>
                      </div>
                    ))}
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
                      setSelectedClass('');
                      setSelectedSession('');
                      setSelectedGroup('');
                      setSubjects([]);
                      setPolicies({});
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
      {savedPolicies.length > 0 && (
        <div className="row justify-content-center mt-4">
          <div className="col-md-12">
            <div className="card shadow-lg">
              <div className="card-header bg-success text-white">
                <h4 className="mb-0">Saved Marks Policies</h4>
              </div>
              <div className="card-body">
                {savedPolicies.map((policy, index) => (
                  <div key={index} className="mb-4">
                    <h5>Class: {policy.class}, Session: {policy.session}, Group: {policy.group}</h5>
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>Subject</th>
                          <th>Have Class Test</th>
                          <th>Class Test Total Marks</th>
                          <th>Pass Marks</th>
                          <th>Handwriting/Spelling</th>
                          <th>Written Pass Marks</th>
                          <th>Total Pass Marks</th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(policy.subjects).map(([subject, subjPolicy]) => (
                          <tr key={subject}>
                            <td>{subject}</td>
                            <td>{subjPolicy.haveClassTest ? 'Yes' : 'No'}</td>
                            <td>{subjPolicy.classTestTotalMarks}</td>
                            <td>{subjPolicy.passMarks}</td>
                            <td>{subjPolicy.isHandwritingSpelling ? 'Yes' : 'No'}</td>
                            <td>{subjPolicy.writtenPassMarks}</td>
                            <td>{subjPolicy.totalPassMarks}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    <p><strong>Entry By:</strong> {policy.entryBy} | <strong>Entry Date:</strong> {policy.entryDate}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentMarksPolicyForm;