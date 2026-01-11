import React, { useEffect, useState } from "react";
import axios from "axios";

const EmployeeAttendanceView = ({ onBack }) => {
  const [filters, setFilters] = useState({
    attendanceDate: "",
    department: "",
    designation: "",
    id: "",
    name: "",
    status: ""
  });

  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(false);

  /* ================= FETCH ATTENDANCE ================= */
  const fetchAttendance = async () => {
    try {
      setLoading(true);
      const res = await axios.get(
        "http://localhost:5000/api/employee-attendance/view",
        {
          params: {
            attendanceDate: filters.attendanceDate,
            department: filters.department,
            designation: filters.designation,
            employeeId: filters.id,
            employeeName: filters.name,
            status: filters.status
          }
        }
      );
      setAttendanceData(res.data);
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAttendance();
  }, [filters]);

  /* ================= HANDLERS ================= */
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  // SAVE
  const handleSave = async () => {
    try {
      const payload = attendanceData.map((item) => ({
        employeeId: item.employeeId,
        employeeName: item.employeeName,
        department: item.department,
        designation: item.designation,
        status: item.status,
        attendanceDate: item.attendanceDate
      }));

      await axios.post(
        "http://localhost:5000/api/employee-attendance/save",
        payload
      );

      alert("Attendance saved successfully!");
      fetchAttendance();
    } catch (error) {
      console.error(error);
      alert("Failed to save attendance");
    }
  };

  // RESET FILTERS
  const handleReset = () => {
    setFilters({
      attendanceDate: "",
      department: "",
      designation: "",
      id: "",
      name: "",
      status: ""
    });
  };

  // CANCEL
  const handleCancel = () => {
    handleReset();
    setAttendanceData([]);
  };

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header bg-primary text-white">
          <h4>Employee Attendance</h4>
        </div>

        <div className="card-body">
          {/* FILTERS */}
          <div className="row mb-4">
            {[
              { label: "Date", name: "attendanceDate", type: "date" },
              { label: "Department", name: "department" },
              { label: "Designation", name: "designation" },
              { label: "Employee ID", name: "id" },
              { label: "Name", name: "name" }
            ].map((f, i) => (
              <div className="col-md-4 mb-3" key={i}>
                <label>{f.label}</label>
                <input
                  type={f.type || "text"}
                  className="form-control"
                  name={f.name}
                  value={filters[f.name]}
                  onChange={handleFilterChange}
                />
              </div>
            ))}

            <div className="col-md-4 mb-3">
              <label>Status</label>
              <select
                className="form-control"
                name="status"
                value={filters.status}
                onChange={handleFilterChange}
              >
                <option value="">All</option>
                <option value="Present">Present</option>
                <option value="Absent">Absent</option>
              </select>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="d-flex gap-3 justify-content-center mb-3">
            <button className="btn btn-success" onClick={handleSave}>Save</button>
            <button className="btn btn-warning" onClick={handleReset}>Reset</button>
            <button className="btn btn-danger" onClick={handleCancel}>Cancel</button>
          </div>

          {/* TABLE */}
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="table-dark">
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Designation</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {loading ? (
                  <tr><td colSpan="6" className="text-center">Loading...</td></tr>
                ) : attendanceData.length === 0 ? (
                  <tr><td colSpan="6" className="text-center">No records</td></tr>
                ) : (
                  attendanceData.map((item) => (
                    <tr key={item._id}>
                      <td>{item.employeeId}</td>
                      <td>{item.employeeName}</td>
                      <td>{item.department}</td>
                      <td>{item.designation}</td>
                      <td>
                        <select
                          className="form-control"
                          value={item.status}
                          onChange={(e) => {
                            const updated = attendanceData.map(row =>
                              row._id === item._id
                                ? { ...row, status: e.target.value }
                                : row
                            );
                            setAttendanceData(updated);
                          }}
                        >
                          <option value="Present">Present</option>
                          <option value="Absent">Absent</option>
                        </select>
                      </td>
                      <td>{item.attendanceDate}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          <button className="btn btn-secondary mt-3" onClick={onBack}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAttendanceView;
