import React, { useEffect, useState } from "react";
import axios from "axios";

const StudentListForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    rollno: "",
    class: "",
    section: "",
    name: "",
    group: "",
    guardianname: "",
    photo: null,
    guardianPhoto: null,
    guardianSignature: null,
    status: "",
  });

  const [studentList, setStudentList] = useState([]);

  // 🔄 INPUT CHANGE
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // 📤 SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const sendData = new FormData();
      Object.keys(formData).forEach((key) => {
        if (formData[key]) sendData.append(key, formData[key]);
      });

      await axios.post(
        "http://localhost:5000/api/studentlist/create",
        sendData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      alert("Student saved successfully ✅");
      fetchStudents();

      setFormData({
        rollno: "",
        class: "",
        section: "",
        name: "",
        group: "",
        guardianname: "",
        photo: null,
        guardianPhoto: null,
        guardianSignature: null,
        status: "",
      });
    } catch (error) {
      console.error(error);
      alert("Failed to save student ❌");
    }
  };

  // 📥 GET STUDENTS
  const fetchStudents = async () => {
    const res = await axios.get("http://localhost:5000/api/studentlist");
    setStudentList(res.data);
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow-lg">
        <div className="card-header bg-primary text-white">
          <h4>Student List Form</h4>
        </div>

        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <input className="form-control mb-2" name="rollno" placeholder="Roll No" onChange={handleChange} />
            <input className="form-control mb-2" name="class" placeholder="Class" onChange={handleChange} />
            <input className="form-control mb-2" name="section" placeholder="Section" onChange={handleChange} />
            <input className="form-control mb-2" name="name" placeholder="Name" onChange={handleChange} />
            <input className="form-control mb-2" name="group" placeholder="Group" onChange={handleChange} />
            <input className="form-control mb-2" name="guardianname" placeholder="Guardian Name" onChange={handleChange} />

            <input type="file" className="form-control mb-2" name="photo" onChange={handleChange} />
            <input type="file" className="form-control mb-2" name="guardianPhoto" onChange={handleChange} />
            <input type="file" className="form-control mb-2" name="guardianSignature" onChange={handleChange} />

            <select className="form-control mb-3" name="status" onChange={handleChange}>
              <option value="">Select Status</option>
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>

            <button className="btn btn-success">Save</button>
            <button type="button" className="btn btn-secondary ms-3" onClick={onBack}>
              Back
            </button>
          </form>

          {/* 📋 STUDENT LIST */}
          <table className="table table-bordered mt-4">
            <thead>
              <tr>
                <th>Roll No</th>
                <th>Name</th>
                <th>Class</th>
                <th>Guardian</th>
                <th>Photo</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {studentList.map((s) => (
                <tr key={s._id}>
                  <td>{s.rollno}</td>
                  <td>{s.name}</td>
                  <td>{s.class}</td>
                  <td>{s.guardianname}</td>
                  <td>
                    {s.photo && (
                      <img
                        src={`http://localhost:5000/${s.photo}`}
                        width="50"
                        alt=""
                      />
                    )}
                  </td>
                  <td>{s.status}</td>
                </tr>
              ))}
            </tbody>
          </table>

        </div>
      </div>
    </div>
  );
};

export default StudentListForm;
