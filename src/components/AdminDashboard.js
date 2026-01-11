import React, { useState } from 'react';
import SuperAdminForm from './SuperAdminForm';
import UserEntryForm from './UserEntryForm';
import StudentAdmissionForm from './StudentAdmissionForm';
import StudentDetailsForm from './StudentDetailsForm';
import EmployeeRegistrationForm from './EmployeeRegistrationForm';
import EmployeeDetailsForm from './EmployeeDetailsForm';
import AdministrationView from './AdministrationView';
import ShiftForm from './ShiftForm';
import ClassForm from './ClassForm';
import SubjectForm from './SubjectForm';
import SectionForm from './SectionForm';
import StudentGroupForm from './StudentGroupForm';
import GroupSubjectsForm from './GroupSubjectsForm';
import DesignationForm from './DesignationForm';
import HolidaysForm from './HolidaysForm';
import StudentAttendanceView from './StudentAttendanceView';
import EmployeeAttendanceView from './EmployeeAttendanceView';
import PIMSView from './PIMSView';
import ResultView from './ResultView';
import RoutineView from './RoutineView';
import AccountsView from './AccountsView';
import StudentPromotionForm from './StudentPromotionForm';
import StudentListForm from './StudentListForm';
import EmployeeListForm from './EmployeeListForm';
import StudentDetailsReportForm from './StudentDetailsReportForm';
import StudentListReportForm from './StudentListReportForm';
import EmployeeDetailsReportForm from './EmployeeDetailsReportForm';
import EmployeeListReportForm from './EmployeeListReportForm';
import StudentMarksPolicyForm from './StudentMarksPolicyForm';
import SubjectWiseMarksEntryForm from './SubjectWiseMarksEntryForm';
import ResultVerificationForm from './ResultVerificationForm';
import RoutineSlotEntryForm from './RoutineSlotEntryForm';
import RoutineEntryForm from './RoutineEntryForm';
import StudentClassRoutineReport from './StudentClassRoutineReport';
import TeacherScheduleReport from './TeacherScheduleReport';
import DebitHeadForm from './DebitHeadForm';
import CreditHeadForm from './CreditHeadForm';
import BankDepositForm from './BankDepositForm';
import BankWithdrawForm from './BankWithdrawForm';
import IncomeForm from './IncomeForm';
import ExpenseForm from './ExpenseForm';

const AdminDashboard = ({ user, onLogout }) => {
  const [activeView, setActiveView] = useState(null);

  const handleSuperadminClick = () => {
    setActiveView('superadmin');
  };

  const handleUserEntryClick = () => {
    setActiveView('userEntry');
  };

  const handleStudentDetailsClick = () => {
    setActiveView('studentDetails');
  };

  const handleEmployeeDetailsClick = () => {
    setActiveView('employeeDetails');
  };

  const handleAdministrationClick = () => {
    setActiveView('administration');
  };

  const handleStudentAttendanceClick = () => {
    setActiveView('studentAttendance');
  };

  const handleEmployeeAttendanceClick = () => {
    setActiveView('employeeAttendance');
  };

  const handleHolidaysClick = () => {
    setActiveView('holidays');
  };

  const handlePIMSClick = () => {
    setActiveView('pims');
  };

  const handleResultClick = () => {
    setActiveView('result');
  };

  const handleRoutineClick = () => {
    setActiveView('routine');
  };

  const handleAccountsClick = () => {
    setActiveView('accounts');
  };

  const renderMainContent = () => {
    if (activeView === 'superadmin') {
      return <SuperAdminForm onBack={() => setActiveView(null)} />;
    }
    if (activeView === 'userEntry') {
      return <UserEntryForm onBack={() => setActiveView(null)} />;
    }
    if (activeView === 'studentDetails') {
      return <StudentDetailsForm onBack={() => setActiveView(null)} />;
    }
    if (activeView === 'employeeDetails') {
      return <EmployeeDetailsForm onBack={() => setActiveView(null)} />;
    }
    if (activeView === 'administration') {
      return <AdministrationView onSelect={setActiveView} />;
    }
    if (activeView === 'shift') {
      return <ShiftForm onBack={() => setActiveView('administration')} />;
    }
    if (activeView === 'class') {
      return <ClassForm onBack={() => setActiveView('administration')} />;
    }
    if (activeView === 'subject') {
      return <SubjectForm onBack={() => setActiveView('administration')} />;
    }
    if (activeView === 'section') {
      return <SectionForm onBack={() => setActiveView('administration')} />;
    }
    if (activeView === 'studentGroup') {
      return <StudentGroupForm onBack={() => setActiveView('administration')} />;
    }
    if (activeView === 'groupSubjects') {
      return <GroupSubjectsForm onBack={() => setActiveView('administration')} />;
    }
    if (activeView === 'designation') {
      return <DesignationForm onBack={() => setActiveView('administration')} />;
    }
    if (activeView === 'studentAttendance') {
      return <StudentAttendanceView onBack={() => setActiveView(null)} />;
    }
    if (activeView === 'employeeAttendance') {
      return <EmployeeAttendanceView onBack={() => setActiveView(null)} />;
    }
    if (activeView === 'holidays') {
      return <HolidaysForm onBack={() => setActiveView(null)} />;
    }
    if (activeView === 'pims') {
      return <PIMSView onSelect={setActiveView} />;
    }
    if (activeView === 'result') {
      return <ResultView onSelect={setActiveView} />;
    }
    if (activeView === 'studentMarksPolicy') {
      return <StudentMarksPolicyForm onBack={() => setActiveView('result')} />;
    }
    if (activeView === 'subjectWiseMarksEntry') {
      return <SubjectWiseMarksEntryForm onBack={() => setActiveView('result')} />;
    }
    if (activeView === 'resultVerification') {
      return <ResultVerificationForm onBack={() => setActiveView('result')} />;
    }
    if (activeView === 'routine') {
      return <RoutineView onSelect={setActiveView} />;
    }
    if (activeView === 'routineSlotEntry') {
      return <RoutineSlotEntryForm onBack={() => setActiveView('routine')} />;
    }
    if (activeView === 'routineEntry') {
      return <RoutineEntryForm onBack={() => setActiveView('routine')} />;
    }
    if (activeView === 'studentClassRoutine') {
      return <StudentClassRoutineReport onBack={() => setActiveView('routine')} />;
    }
    if (activeView === 'teacherSchedule') {
      return <TeacherScheduleReport onBack={() => setActiveView('routine')} />;
    }
    if (activeView === 'accounts') {
      return <AccountsView onSelect={setActiveView} />;
    }
    if (activeView === 'debitHead') {
      return <DebitHeadForm onBack={() => setActiveView('accounts')} />;
    }
    if (activeView === 'creditHead') {
      return <CreditHeadForm onBack={() => setActiveView('accounts')} />;
    }
    if (activeView === 'bankDeposit') {
      return <BankDepositForm onBack={() => setActiveView('accounts')} />;
    }
    if (activeView === 'bankWithdraw') {
      return <BankWithdrawForm onBack={() => setActiveView('accounts')} />;
    }
    if (activeView === 'income') {
      return <IncomeForm onBack={() => setActiveView('accounts')} />;
    }
    if (activeView === 'expense') {
      return <ExpenseForm onBack={() => setActiveView('accounts')} />;
    }
    if (activeView === 'studentAdmission') {
      return <StudentAdmissionForm onBack={() => setActiveView('pims')} />;
    }
    if (activeView === 'studentPromotion') {
      return <StudentPromotionForm onBack={() => setActiveView('pims')} />;
    }
    if (activeView === 'employeeRegistration') {
      return <EmployeeRegistrationForm onBack={() => setActiveView('pims')} />;
    }
    if (activeView === 'studentList') {
      return <StudentListForm onBack={() => setActiveView('pims')} />;
    }
    if (activeView === 'employeeList') {
      return <EmployeeListForm onBack={() => setActiveView('pims')} />;
    }
    if (activeView === 'studentDetailsReport') {
      return <StudentDetailsReportForm onBack={() => setActiveView('pims')} />;
    }
    if (activeView === 'studentListReport') {
      return <StudentListReportForm onBack={() => setActiveView('pims')} />;
    }
    if (activeView === 'employeeDetailsReport') {
      return <EmployeeDetailsReportForm onBack={() => setActiveView('pims')} />;
    }
    if (activeView === 'employeeListReport') {
      return <EmployeeListReportForm onBack={() => setActiveView('pims')} />;
    }
    return (
      <div className="p-4">
        <h3>Welcome to Admin Dashboard</h3>
        <p>Select an option from the sidebar.</p>
      </div>
    );
  };

  return (
    <div className="d-flex">
      <div className="bg-dark text-white" style={{ width: '250px', minHeight: '100vh' }}>
        <div className="p-3">
          <img src="/images/logo.jpg.jpeg" alt="Logo" style={{ width: '50px', height: '50px' }} className="mb-3" />
          <h5>Admin Dashboard</h5>
          <ul className="list-unstyled">
            <li className="mb-2">
              <button className="btn btn-link text-white text-decoration-none" onClick={handleSuperadminClick}>
                Superadmin
              </button>
            </li>
            <li className="mb-2">
              <button className="btn btn-link text-white text-decoration-none" onClick={handleUserEntryClick}>
                User Entry
              </button>
            </li>
            <li className="mb-2">
              <button className="btn btn-link text-white text-decoration-none" onClick={handleStudentDetailsClick}>
                Student Details
              </button>
            </li>
            <li className="mb-2">
              <button className="btn btn-link text-white text-decoration-none" onClick={handleEmployeeDetailsClick}>
                Employee Details
              </button>
            </li>
            <li className="mb-2">
              <button className="btn btn-link text-white text-decoration-none" onClick={handleAdministrationClick}>
                Administration
              </button>
            </li>
            <li className="mb-2">
              <button className="btn btn-link text-white text-decoration-none" onClick={handleStudentAttendanceClick}>
                Student Attendance
              </button>
            </li>
            <li className="mb-2">
              <button className="btn btn-link text-white text-decoration-none" onClick={handleEmployeeAttendanceClick}>
                Employee Attendance
              </button>
            </li>
            <li className="mb-2">
              <button className="btn btn-link text-white text-decoration-none" onClick={handleHolidaysClick}>
                Holidays
              </button>
            </li>
            <li className="mb-2">
              <button className="btn btn-link text-white text-decoration-none" onClick={handlePIMSClick}>
                PIMS
              </button>
            </li>
            <li className="mb-2">
              <button className="btn btn-link text-white text-decoration-none" onClick={handleResultClick}>
                Result
              </button>
            </li>
            <li className="mb-2">
              <button className="btn btn-link text-white text-decoration-none" onClick={handleRoutineClick}>
                Routine
              </button>
            </li>
            <li className="mb-2">
              <button className="btn btn-link text-white text-decoration-none" onClick={handleAccountsClick}>
                Accounts
              </button>
            </li>
            <li className="mb-2">
              <button className="btn btn-link text-white text-decoration-none" onClick={onLogout}>
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex-grow-1">
        {renderMainContent()}
      </div>
    </div>
  );
};

export default AdminDashboard;