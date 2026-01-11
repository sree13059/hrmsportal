import React, { useState } from 'react';

const TeacherScheduleReport = ({ onBack }) => {
  const [selectedShift, setSelectedShift] = useState('');
  const [selectedYear, setSelectedYear] = useState('');
  const [selectedTeacher, setSelectedTeacher] = useState('');

  // Mock data
  const shifts = ['Morning', 'Day', 'Evening'];
  const years = ['2023-2024', '2024-2025', '2025-2026'];
  const teachers = ['Mr. Smith', 'Ms. Johnson', 'Mr. Brown', 'Mrs. Davis', 'Dr. Wilson'];

  const [scheduleData] = useState([
    { id: 1, teacher: 'Mr. Smith', date: '2024-01-15', time: '9:00-10:00', room: '101', subject: 'Math', class: '10A' },
    { id: 2, teacher: 'Mr. Smith', date: '2024-01-15', time: '10:00-11:00', room: '102', subject: 'Physics', class: '10A' },
    { id: 3, teacher: 'Ms. Johnson', date: '2024-01-16', time: '9:00-10:00', room: '103', subject: 'English', class: '9B' },
    { id: 4, teacher: 'Mr. Brown', date: '2024-01-17', time: '11:00-12:00', room: '104', subject: 'Science', class: '8C' },
  ]);

  const [filteredData, setFilteredData] = useState([]);

  const handleShowSchedule = () => {
    if (selectedTeacher) {
      const data = scheduleData.filter(item => item.teacher === selectedTeacher);
      setFilteredData(data);
    } else {
      alert('Please select a teacher.');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleExportPDF = () => {
    alert('Export to PDF functionality would be implemented here.');
  };

  const handleExportExcel = () => {
    alert('Export to Excel functionality would be implemented here.');
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Teacher's Schedule Report</h4>
            </div>
            <div className="card-body">
              <div className="row mb-3">
                <div className="col-md-4">
                  <label htmlFor="shift" className="form-label">Shift</label>
                  <select
                    className="form-control"
                    id="shift"
                    value={selectedShift}
                    onChange={(e) => setSelectedShift(e.target.value)}
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
                  >
                    <option value="">Select Year</option>
                    {years.map(year => <option key={year} value={year}>{year}</option>)}
                  </select>
                </div>
                <div className="col-md-4">
                  <label htmlFor="teacher" className="form-label">Teacher Name</label>
                  <select
                    className="form-control"
                    id="teacher"
                    value={selectedTeacher}
                    onChange={(e) => setSelectedTeacher(e.target.value)}
                  >
                    <option value="">Select Teacher</option>
                    {teachers.map(teacher => <option key={teacher} value={teacher}>{teacher}</option>)}
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <button type="button" className="btn btn-info" onClick={handleShowSchedule}>
                  Show Schedule
                </button>
              </div>
              {filteredData.length > 0 && (
                <>
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered">
                      <thead className="table-dark">
                        <tr>
                          <th>Date</th>
                          <th>Time</th>
                          <th>Room Number</th>
                          <th>Class</th>
                          <th>Subject</th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredData.map(item => (
                          <tr key={item.id}>
                            <td>{item.date}</td>
                            <td>{item.time}</td>
                            <td>{item.room}</td>
                            <td>{item.class}</td>
                            <td>{item.subject}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="mt-3 d-flex gap-3">
                    <button className="btn btn-primary" onClick={handlePrint}>
                      Print
                    </button>
                    <button className="btn btn-success" onClick={handleExportPDF}>
                      Export to PDF
                    </button>
                    <button className="btn btn-success" onClick={handleExportExcel}>
                      Export to Excel
                    </button>
                    <button className="btn btn-secondary" onClick={onBack}>
                      Back
                    </button>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherScheduleReport;
