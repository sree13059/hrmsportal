import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentAttendanceView = ({ onBack }) => {
  const [filters, setFilters] = useState({
    attendanceDate: "",
    class: "",
    section: "",
    id: "",
    name: "",
    status: "",
  });

  const [attendanceData, setAttendanceData] = useState([]);

  // Fetch attendance data
  const fetchAttendance = async () => {
    try {
      const res = await axios.get(
        "https://hrms-backend-1we9.onrender.com/api/attendance/view",
        { params: filters }
      );
      setAttendanceData(res.data);
    } catch (error) {
      console.error(error);
      alert("Failed to load attendance data");
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleSave = async () => {
    if (!filters.attendanceDate) {
      alert("Select Attendance Date");
      return;
    }

    try {
      await axios.post("https://hrms-backend-1we9.onrender.com/api/attendance/add", {
        studentId: filters.id || "AUTO",
        studentName: filters.name || "Unknown",
        class: filters.class,
        section: filters.section,
        status: filters.status,
        attendanceDate: filters.attendanceDate,
      });

      alert("Attendance saved successfully");
      fetchAttendance();
    } catch (error) {
      alert("Error saving attendance");
    }
  };

  const handleReset = () => {
    setFilters({
      attendanceDate: "",
      class: "",
      section: "",
      id: "",
      name: "",
      status: "",
    });
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Student Attendance</h4>
            </div>

            <div className="card-body">
              <form className="mb-4">
                <div className="row">
                  {[
                    { label: "Attendance Date", name: "attendanceDate", type: "date" },
                    { label: "Class", name: "class" },
                    { label: "Section", name: "section" },
                    { label: "ID", name: "id" },
                    { label: "Name", name: "name" },
                  ].map((field, i) => (
                    <div className="col-md-4 mb-3" key={i}>
                      <label className="form-label">{field.label}</label>
                      <input
                        type={field.type || "text"}
                        className="form-control"
                        name={field.name}
                        value={filters[field.name]}
                        onChange={handleFilterChange}
                      />
                    </div>
                  ))}

                  <div className="col-md-4 mb-3">
                    <label className="form-label">Status</label>
                    <select
                      className="form-control"
                      name="status"
                      value={filters.status}
                      onChange={handleFilterChange}
                    >
                      <option value="">Select Status</option>
                      <option value="Present">Present</option>
                      <option value="Absent">Absent</option>
                    </select>
                  </div>
                </div>
              </form>

              <div className="d-flex justify-content-center gap-3 mb-4">
                <button className="btn btn-success" onClick={handleSave}>
                  Save
                </button>
                <button className="btn btn-warning" onClick={handleReset}>
                  Reset
                </button>
                <button className="btn btn-secondary" onClick={onBack}>
                  Back
                </button>
              </div>

              <div className="table-responsive">
                <table className="table table-bordered table-striped">
                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Class</th>
                      <th>Section</th>
                      <th>Status</th>
                      <th>Date</th>
                    </tr>
                  </thead>
                  <tbody>
                    {attendanceData.length === 0 ? (
                      <tr>
                        <td colSpan="6" className="text-center">
                          No records found
                        </td>
                      </tr>
                    ) : (
                      attendanceData.map((item) => (
                        <tr key={item._id}>
                          <td>{item.studentId}</td>
                          <td>{item.studentName}</td>
                          <td>{item.class}</td>
                          <td>{item.section}</td>
                          <td>{item.status}</td>
                          <td>{item.attendanceDate}</td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentAttendanceView;

