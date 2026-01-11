import React, { useState } from 'react';
import PIMS from './PIMS';
import EmployeeRegistrationForm from './EmployeeRegistrationForm';
import AdministrationForm from './AdministrationForm';
import Attendance from './Attendance';
import Routine from './Routine';
import Syllabus from './Syllabus';
import Library from './Library';
import Residence from './Residence';
import Result from './Result';
import Certificate from './Certificate';
import Asset from './Asset';
import Inventory from './Inventory';
import Transport from './Transport';
import Accounts from './Accounts';
import Help from './Help';

const Dashboard = ({ user }) => {
  const [activeModule, setActiveModule] = useState(null);

  const modules = [
    'UserManagement',
    'Administration',
    'PIMS',
    'Attendance',
    'Routine',
    'Syllabus',
    'Library',
    'Residence',
    'Result',
    'Certificate',
    'Asset',
    'Inventory',
    'Transport',
    'Accounts',
    'Help'
  ];

  const handleModuleClick = (module) => {
    setActiveModule(module);
  };

  const renderMainContent = () => {
    if (activeModule === 'PIMS') {
      return <PIMS />;
    }
    if (activeModule === 'UserManagement') {
      return <EmployeeRegistrationForm onBack={() => setActiveModule(null)} />;
    }
    if (activeModule === 'Administration') {
      return <AdministrationForm onBack={() => setActiveModule(null)} />;
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
    if (activeModule === 'Residence') {
      return <Residence />;
    }
    if (activeModule === 'Result') {
      return <Result />;
    }
    if (activeModule === 'Certificate') {
      return <Certificate />;
    }
    if (activeModule === 'Asset') {
      return <Asset />;
    }
    if (activeModule === 'Inventory') {
      return <Inventory />;
    }
    if (activeModule === 'Transport') {
      return <Transport />;
    }
    if (activeModule === 'Accounts') {
      return <Accounts />;
    }
    if (activeModule === 'Help') {
      return <Help />;
    }
    return (
      <div className="p-4">
        <h3>{activeModule || 'Dashboard'}</h3>
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
      <div className={`bg-${user.role === 'superadmin' ? 'primary' : 'dark'} text-white`} style={{ width: '250px', minHeight: '100vh' }}>
        <div className="p-3">
          <img src="/images/logo.jpg.jpeg" alt="Logo" style={{ width: '50px', height: '50px' }} className="mb-3" />
          <h5>{user.role === 'superadmin' ? 'User Group Permition' : 'User Group Dashboard'}</h5>
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

export default Dashboard;
