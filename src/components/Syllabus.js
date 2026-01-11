import React, { useState } from 'react';

const Syllabus = () => {
  const [syllabi, setSyllabi] = useState([
    { subject: 'Math', class: '10', section: 'A', topics: 'Algebra, Geometry, Trigonometry', teacher: 'Mr. Smith' },
    { subject: 'Science', class: '10', section: 'B', topics: 'Physics, Chemistry, Biology', teacher: 'Ms. Johnson' },
    { subject: 'English', class: '9', section: 'A', topics: 'Grammar, Literature, Writing', teacher: 'Mrs. Brown' }
  ]);

  const [newSyllabus, setNewSyllabus] = useState({
    subject: '',
    class: '',
    section: '',
    topics: '',
    teacher: ''
  });

  const handleChange = (e) => {
    setNewSyllabus({ ...newSyllabus, [e.target.name]: e.target.value });
  };

  const handleAddSyllabus = () => {
    setSyllabi([...syllabi, newSyllabus]);
    setNewSyllabus({ subject: '', class: '', section: '', topics: '', teacher: '' });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h3>Syllabus Management</h3>
            </div>
            <div className="card-body">
              <h4>Add New Syllabus</h4>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Subject</label>
                  <input type="text" className="form-control" name="subject" value={newSyllabus.subject} onChange={handleChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Class</label>
                  <input type="text" className="form-control" name="class" value={newSyllabus.class} onChange={handleChange} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Section</label>
                  <input type="text" className="form-control" name="section" value={newSyllabus.section} onChange={handleChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Teacher</label>
                  <input type="text" className="form-control" name="teacher" value={newSyllabus.teacher} onChange={handleChange} />
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Topics</label>
                <textarea className="form-control" name="topics" value={newSyllabus.topics} onChange={handleChange} rows="3" />
              </div>
              <button className="btn btn-success" onClick={handleAddSyllabus}>Add Syllabus</button>

              <h4 className="mt-5">Syllabi List</h4>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Subject</th>
                    <th>Class</th>
                    <th>Section</th>
                    <th>Topics</th>
                    <th>Teacher</th>
                  </tr>
                </thead>
                <tbody>
                  {syllabi.map((syllabus, index) => (
                    <tr key={index}>
                      <td>{syllabus.subject}</td>
                      <td>{syllabus.class}</td>
                      <td>{syllabus.section}</td>
                      <td>{syllabus.topics}</td>
                      <td>{syllabus.teacher}</td>
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

export default Syllabus;