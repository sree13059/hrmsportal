import React from 'react';

const ResultView = ({ onSelect }) => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Result</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <button className="btn btn-outline-primary w-100" onClick={() => onSelect('studentMarksPolicy')}>
                    Student Marks Policy
                  </button>
                </div>
                <div className="col-md-4 mb-3">
                  <button className="btn btn-outline-primary w-100" onClick={() => onSelect('subjectWiseMarksEntry')}>
                    Subject Wise Marks Entry
                  </button>
                </div>
                <div className="col-md-4 mb-3">
                  <button className="btn btn-outline-primary w-100" onClick={() => onSelect('resultVerification')}>
                    Result Verification
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

export default ResultView;