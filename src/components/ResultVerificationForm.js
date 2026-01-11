import React, { useState, useEffect } from "react";
import axios from "axios";

const ResultVerificationForm = ({ onBack }) => {
  const [filters, setFilters] = useState({
    studentId: "",
    class: "",
    subject: "",
    status: ""
  });

  const [verificationData, setVerificationData] = useState([]);
  const [loading, setLoading] = useState(false);

  // 🔄 Fetch data from backend
  const fetchResults = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        "https://hrms-backend-1we9.onrender.com/api/result-verification/list",
        {
          params: {
            studentId: filters.studentId,
            className: filters.class,   // 🔥 important mapping
            subject: filters.subject,
            status: filters.status
          }
        }
      );

      setVerificationData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Fetch error:", error);
      alert("Failed to fetch results");
      setLoading(false);
    }
  };

  // 🔁 Auto fetch when filters change
  useEffect(() => {
    fetchResults();
  }, [filters]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Result Verification Form</h4>
            </div>

            <div className="card-body">
              <form className="mb-4">
                <div className="row">
                  <div className="col-md-3 mb-3">
                    <label className="form-label">Student ID</label>
                    <input
                      type="text"
                      className="form-control"
                      name="studentId"
                      value={filters.studentId}
                      onChange={handleFilterChange}
                    />
                  </div>

                  <div className="col-md-3 mb-3">
                    <label className="form-label">Class</label>
                    <input
                      type="text"
                      className="form-control"
                      name="class"
                      value={filters.class}
                      onChange={handleFilterChange}
                    />
                  </div>

                  <div className="col-md-3 mb-3">
                    <label className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      name="subject"
                      value={filters.subject}
                      onChange={handleFilterChange}
                    />
                  </div>

                  <div className="col-md-3 mb-3">
                    <label className="form-label">Status</label>
                    <select
                      className="form-control"
                      name="status"
                      value={filters.status}
                      onChange={handleFilterChange}
                    >
                      <option value="">All</option>
                      <option value="Verified">Verified</option>
                      <option value="Pending">Pending</option>
                      <option value="Rejected">Rejected</option>
                    </select>
                  </div>
                </div>
              </form>

              {loading ? (
                <p className="text-center">Loading...</p>
              ) : (
                <div className="table-responsive">
                  <table className="table table-striped table-bordered">
                    <thead className="table-dark">
                      <tr>
                        <th>#</th>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Class</th>
                        <th>Subject</th>
                        <th>Marks</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {verificationData.length > 0 ? (
                        verificationData.map((item, index) => (
                          <tr key={item._id}>
                            <td>{index + 1}</td>
                            <td>{item.studentId}</td>
                            <td>{item.studentName}</td>
                            <td>{item.className}</td>
                            <td>{item.subject}</td>
                            <td>{item.marks}</td>
                            <td>{item.status}</td>
                          </tr>
                        ))
                      ) : (
                        <tr>
                          <td colSpan="7" className="text-center">
                            No records found
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
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

export default ResultVerificationForm;

