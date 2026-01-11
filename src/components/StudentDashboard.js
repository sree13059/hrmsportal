import React, { useState } from 'react';
import Attendance from './Attendance';
import Routine from './Routine';
import Syllabus from './Syllabus';
import Library from './Library';
import Result from './Result';
import ProfileForm from './ProfileForm';

const StudentDashboard = ({ user }) => {
  const [activeModule, setActiveModule] = useState(null);
  const [activeView, setActiveView] = useState(null);

  const modules = [
    'Profile',
    'Attendance',
    'Routine',
    'Syllabus',
    'Library',
    'Result'
  ];

  const handleModuleClick = (module) => {
    setActiveModule(module);
  };

  const renderMainContent = () => {
    if (activeView === 'editProfile') {
      return <ProfileForm onBack={() => setActiveView(null)} />;
    }
    if (activeModule === 'Attendance') {
      return <Attendance />;
    }
    if (activeModule === 'Routine') {
      return <Routine />;
    }
    if (activeModule === 'Syllabus') {
      return <Syllabus />;
    }
    if (activeModule === 'Library') {
      return <Library />;
    }
    if (activeModule === 'Result') {
      return <Result />;
    }
    if (activeModule === 'Profile') {
      return (
        <div className="p-4">
          <h3>Student Profile</h3>
          <p>View and edit your profile information.</p>
          <div className="mt-4">
            <button className="btn btn-primary me-2" onClick={() => setActiveView('editProfile')}>Edit Profile</button>
            <button className="btn btn-secondary">View Details</button>
          </div>
        </div>
      );
    }
    return (
      <div className="p-4">
        <h3>{activeModule || 'Student Dashboard'}</h3>
        <p>Select a module from the sidebar to manage.</p>
        <div className="mt-4">
          <button className="btn btn-primary me-2">Save</button>
          <button className="btn btn-danger me-2">Delete</button>
          <button className="btn btn-secondary">Reset</button>
        </div>
      </div>
    );
  };

  return (
    <div className="d-flex">
      <div className="bg-info text-white" style={{ width: '250px', minHeight: '100vh' }}>
        <div className="p-3">
          <img src="/images/logo.jpg.jpeg" alt="Logo" style={{ width: '50px', height: '50px' }} className="mb-3" />
          <h5>Student Dashboard</h5>
          <ul className="list-unstyled">
            {modules.map((module) => (
              <li key={module} className="mb-2">
                <button
                  className={`btn btn-link text-white text-decoration-none ${activeModule === module ? 'fw-bold' : ''}`}
                  onClick={() => handleModuleClick(module)}
                >
                  {module}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="flex-grow-1">
        {renderMainContent()}
      </div>
    </div>
  );
};

export default StudentDashboard;
