import React, { useState } from 'react';

const Routine = () => {
  const [schedules, setSchedules] = useState([
    { day: 'Monday', time: '09:00 AM - 10:00 AM', subject: 'Math', teacher: 'Mr. Smith', room: '101', class: '10', section: 'A' },
    { day: 'Monday', time: '10:00 AM - 11:00 AM', subject: 'Science', teacher: 'Ms. Johnson', room: '102', class: '10', section: 'B' },
    { day: 'Tuesday', time: '09:00 AM - 10:00 AM', subject: 'English', teacher: 'Mrs. Brown', room: '103', class: '9', section: 'A' }
  ]);

  const [newSchedule, setNewSchedule] = useState({
    day: '',
    time: '',
    subject: '',
    teacher: '',
    room: '',
    class: '',
    section: ''
  });

  const handleChange = (e) => {
    setNewSchedule({ ...newSchedule, [e.target.name]: e.target.value });
  };

  const handleAddSchedule = () => {
    setSchedules([...schedules, newSchedule]);
    setNewSchedule({ day: '', time: '', subject: '', teacher: '', room: '', class: '', section: '' });
  };

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h3>Class Routine Scheduler</h3>
            </div>
            <div className="card-body">
              <h4>Add New Class Schedule</h4>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Day</label>
                  <select className="form-control" name="day" value={newSchedule.day} onChange={handleChange}>
                    <option value="">Select Day</option>
                    {days.map(day => <option key={day} value={day}>{day}</option>)}
                  </select>
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Time</label>
                  <input type="text" className="form-control" name="time" placeholder="e.g., 09:00 AM - 10:00 AM" value={newSchedule.time} onChange={handleChange} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4 mb-3">
                  <label className="form-label">Subject</label>
                  <input type="text" className="form-control" name="subject" value={newSchedule.subject} onChange={handleChange} />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">Teacher</label>
                  <input type="text" className="form-control" name="teacher" value={newSchedule.teacher} onChange={handleChange} />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">Room</label>
                  <input type="text" className="form-control" name="room" value={newSchedule.room} onChange={handleChange} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Class</label>
                  <input type="text" className="form-control" name="class" value={newSchedule.class} onChange={handleChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Section</label>
                  <input type="text" className="form-control" name="section" value={newSchedule.section} onChange={handleChange} />
                </div>
              </div>
              <button className="btn btn-success" onClick={handleAddSchedule}>Add Schedule</button>

              <h4 className="mt-5">Class Schedules</h4>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Day</th>
                    <th>Time</th>
                    <th>Subject</th>
                    <th>Teacher</th>
                    <th>Room</th>
                    <th>Class</th>
                    <th>Section</th>
                  </tr>
                </thead>
                <tbody>
                  {schedules.map((schedule, index) => (
                    <tr key={index}>
                      <td>{schedule.day}</td>
                      <td>{schedule.time}</td>
                      <td>{schedule.subject}</td>
                      <td>{schedule.teacher}</td>
                      <td>{schedule.room}</td>
                      <td>{schedule.class}</td>
                      <td>{schedule.section}</td>
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

export default Routine;