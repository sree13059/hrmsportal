import React, { useState } from 'react';
import './App.css';
import Login from './components/Login';
import PIMS from './components/PIMS';
import Dashboard from './components/Dashboard';
import AdminDashboard from './components/AdminDashboard';
import StudentDashboard from './components/StudentDashboard';
import AdministrationForm from './components/AdministrationForm';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (role) => {
    setUser({ role });
  };

  const handleLogout = () => {
    setUser(null);
  };

  const renderContent = () => {
    if (!user) return <Login onLogin={handleLogin} />;
    if (user.role === 'admin') return <AdminDashboard user={user} onLogout={handleLogout} />;
    if (user.role === 'superadmin') return <Dashboard user={user} />;
    if (user.role === 'student') return <StudentDashboard user={user} />;
    return <PIMS />;
  };

  return (
    <div className="App">
      {renderContent()}
    </div>
  );
}

export default App;
