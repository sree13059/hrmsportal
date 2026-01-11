import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('admin');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy authentication
    if ((username === 'admin' && password === 'admin123' && role === 'admin') ||
        (username === 'superadmin' && password === 'password' && role === 'superadmin') ||
        (username === 'student' && password === 'password' && role === 'student')) {
      onLogin(role);
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 ">
      <div className="card p-4 shadow" style={{ width: '400px' }}>
        <div className="card-body text-center">
          <img src="/images/logo.jpg.jpeg" alt="Logo" className="mb-3" style={{ width: '100px', height: '100px' }} />
          <h2 className="card-title mb-4">Login to HRMS</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="role" className="form-label">Role</label>
              <select
                className="form-select"
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
              >
                <option value="admin">Admin</option>
                <option value="superadmin">Superadmin</option>
                <option value="student">Student</option>
              </select>
            </div>
            {error && <div className="alert alert-danger">{error}</div>}
            <button type="submit" className="btn btn-success w-100">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
