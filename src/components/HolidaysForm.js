import React, { useState } from 'react';
import axios from 'axios';

const HolidaysForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    holidayName: '',
    holidayDate: '',
    isRecurring: false,
    dayOfWeek: 'Friday',
    remarks: '',
    entryBy: '',
    entryDate: ''
  });

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
      await axios.post('https://hrms-backend-1we9.onrender.com/api/admin/holiday', formData);
      alert('Holiday submitted successfully!');
      setFormData({
        holidayName: '',
        holidayDate: '',
        isRecurring: false,
        dayOfWeek: 'Friday',
        remarks: '',
        entryBy: '',
        entryDate: ''
      });
    } catch (error) {
      console.error('Error submitting holiday:', error);
      alert('Failed to submit holiday');
    }
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Holidays Form</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="form-group mb-3">
                  <label htmlFor="holidayName" className="form-label">Holiday Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="holidayName"
                    name="holidayName"
                    value={formData.holidayName}
                    onChange={handleChange}
                    placeholder="Enter holiday name"
                    required
                  />
                </div>
                <div className="form-group mb-3">
                  <div className="form-check">
                    <input
                      type="checkbox"
                      className="form-check-input"
                      id="isRecurring"
                      name="isRecurring"
                      checked={formData.isRecurring}
                      onChange={(e) => setFormData({ ...formData, isRecurring: e.target.checked })}
                    />
                    <label className="form-check-label" htmlFor="isRecurring">Is Recurring Weekend Holiday</label>
                  </div>
                </div>
                {formData.isRecurring ? (
                  <div className="form-group mb-3">
                    <label htmlFor="dayOfWeek" className="form-label">Day of Week</label>
                    <select
                      className="form-control"
                      id="dayOfWeek"
                      name="dayOfWeek"
                      value={formData.dayOfWeek}
                      onChange={handleChange}
                      required
                    >
                      <option value="Monday">Monday</option>
                      <option value="Tuesday">Tuesday</option>
                      <option value="Wednesday">Wednesday</option>
                      <option value="Thursday">Thursday</option>
                      <option value="Friday">Friday</option>
                      <option value="Saturday">Saturday</option>
                      <option value="Sunday">Sunday</option>
                    </select>
                  </div>
                ) : (
                  <div className="form-group mb-3">
                    <label htmlFor="holidayDate" className="form-label">Holiday Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="holidayDate"
                      name="holidayDate"
                      value={formData.holidayDate}
                      onChange={handleChange}
                      required
                    />
                  </div>
                )}
                <div className="form-group mb-3">
                  <label htmlFor="remarks" className="form-label">Remarks</label>
                  <textarea
                    className="form-control"
                    id="remarks"
                    name="remarks"
                    value={formData.remarks}
                    onChange={handleChange}
                    placeholder="Enter remarks"
                    rows="3"
                  />
                </div>
                <div className="form-group mb-3">
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
                <div className="form-group mb-3">
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
                <div className="d-flex justify-content-between">
                  <div className="d-flex gap-3">
                    <button type="submit" className="btn btn-success">
                      Save
                    </button>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                    <button type="button" className="btn btn-warning" onClick={() => setFormData({
                      holidayName: '',
                      holidayDate: '',
                      isRecurring: false,
                      dayOfWeek: 'Friday',
                      remarks: '',
                      entryBy: '',
                      entryDate: ''
                    })}>
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

export default HolidaysForm;
