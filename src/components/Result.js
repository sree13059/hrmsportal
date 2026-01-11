import React, { useState } from 'react';

const Result = () => {
  const [results, setResults] = useState([
    { studentName: 'John Doe', class: '10', section: 'A', subject: 'Math', marks: 85, grade: 'A', examType: 'Midterm' },
    { studentName: 'Jane Smith', class: '10', section: 'B', subject: 'Science', marks: 92, grade: 'A+', examType: 'Final' },
    { studentName: 'Emily Johnson', class: '9', section: 'A', subject: 'English', marks: 78, grade: 'B+', examType: 'Midterm' }
  ]);

  const [newResult, setNewResult] = useState({
    studentName: '',
    class: '',
    section: '',
    subject: '',
    marks: '',
    grade: '',
    examType: ''
  });

  const handleChange = (e) => {
    setNewResult({ ...newResult, [e.target.name]: e.target.value });
  };

  const handleAddResult = () => {
    setResults([...results, { ...newResult, marks: parseInt(newResult.marks) }]);
    setNewResult({ studentName: '', class: '', section: '', subject: '', marks: '', grade: '', examType: '' });
  };

  const examTypes = ['Midterm', 'Final', 'Quiz', 'Assignment'];
  const grades = ['A+', 'A', 'B+', 'B', 'C+', 'C', 'D', 'F'];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow">
            <div className="card-header bg-success text-white text-center">
              <h3>📊 Student Results Management</h3>
            </div>
            <div className="card-body">
              <h4>Add New Result</h4>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Student Name</label>
                  <input type="text" className="form-control" name="studentName" value={newResult.studentName} onChange={handleChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Exam Type</label>
                  <select className="form-control" name="examType" value={newResult.examType} onChange={handleChange}>
                    <option value="">Select Exam Type</option>
                    {examTypes.map(type => <option key={type} value={type}>{type}</option>)}
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4 mb-3">
                  <label className="form-label">Class</label>
                  <input type="text" className="form-control" name="class" value={newResult.class} onChange={handleChange} />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">Section</label>
                  <input type="text" className="form-control" name="section" value={newResult.section} onChange={handleChange} />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">Subject</label>
                  <input type="text" className="form-control" name="subject" value={newResult.subject} onChange={handleChange} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Marks</label>
                  <input type="number" className="form-control" name="marks" value={newResult.marks} onChange={handleChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Grade</label>
                  <select className="form-control" name="grade" value={newResult.grade} onChange={handleChange}>
                    <option value="">Select Grade</option>
                    {grades.map(grade => <option key={grade} value={grade}>{grade}</option>)}
                  </select>
                </div>
              </div>
              <button className="btn btn-success" onClick={handleAddResult}>Add Result</button>

              <h4 className="mt-5">📈 Results List</h4>
              <table className="table table-striped table-hover">
                <thead className="table-dark">
                  <tr>
                    <th>Student Name</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Subject</th>
                    <th>Exam Type</th>
                    <th>Marks</th>
                    <th>Grade</th>
                  </tr>
                </thead>
                <tbody>
                  {results.map((result, index) => (
                    <tr key={index}>
                      <td>{result.studentName}</td>
                      <td>{result.class}</td>
                      <td>{result.section}</td>
                      <td>{result.subject}</td>
                      <td>{result.examType}</td>
                      <td>{result.marks}</td>
                      <td><span className={`badge ${result.grade === 'A+' || result.grade === 'A' ? 'bg-success' : result.grade === 'B+' || result.grade === 'B' ? 'bg-primary' : 'bg-warning'}`}>{result.grade}</span></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;
