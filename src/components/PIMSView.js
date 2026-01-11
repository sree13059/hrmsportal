import React from 'react';

const PIMSView = ({ onSelect }) => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">PIMS</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <button className="btn btn-outline-primary w-100" onClick={() => onSelect('studentAdmission')}>
                    Student Admission
                  </button>
                </div>
                <div className="col-md-4 mb-3">
                  <button className="btn btn-outline-primary w-100" onClick={() => onSelect('studentPromotion')}>
                    Student Promotion
                  </button>
                </div>
                <div className="col-md-4 mb-3">
                  <button className="btn btn-outline-primary w-100" onClick={() => onSelect('employeeRegistration')}>
                    Employee Registration
                  </button>
                </div>
                <div className="col-md-4 mb-3">
                  <button className="btn btn-outline-primary w-100" onClick={() => onSelect('studentList')}>
                    Student List
                  </button>
                </div>
                <div className="col-md-4 mb-3">
                  <button className="btn btn-outline-primary w-100" onClick={() => onSelect('employeeList')}>
                    Employee List
                  </button>
                </div>
                <div className="col-md-4 mb-3">
                  <button className="btn btn-outline-primary w-100" onClick={() => onSelect('studentDetailsReport')}>
                    Student Details Report
                  </button>
                </div>
                <div className="col-md-4 mb-3">
                  <button className="btn btn-outline-primary w-100" onClick={() => onSelect('studentListReport')}>
                    Student List Report
                  </button>
                </div>
                <div className="col-md-4 mb-3">
                  <button className="btn btn-outline-primary w-100" onClick={() => onSelect('employeeDetailsReport')}>
                    Employee Details Report
                  </button>
                </div>
                <div className="col-md-4 mb-3">
                  <button className="btn btn-outline-primary w-100" onClick={() => onSelect('employeeListReport')}>
                    Employee List Report
                  </button>
                </div>
              </div>
              <div className="mt-3">
                <button className="btn btn-secondary" onClick={() => onSelect(null)}>
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

export default PIMSView;