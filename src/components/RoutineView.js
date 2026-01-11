import React from 'react';

const RoutineView = ({ onSelect }) => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Routine</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <button className="btn btn-outline-primary w-100" onClick={() => onSelect('routineSlotEntry')}>
                    Routine Slot Entry
                  </button>
                </div>
                <div className="col-md-6 mb-3">
                  <button className="btn btn-outline-primary w-100" onClick={() => onSelect('routineEntry')}>
                    Routine Entry
                  </button>
                </div>
                <div className="col-md-6 mb-3">
                  <button className="btn btn-outline-primary w-100" onClick={() => onSelect('studentClassRoutine')}>
                    Student Class Routine (Report)
                  </button>
                </div>
                <div className="col-md-6 mb-3">
                  <button className="btn btn-outline-primary w-100" onClick={() => onSelect('teacherSchedule')}>
                    Teacher's Schedule (Report)
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

export default RoutineView;