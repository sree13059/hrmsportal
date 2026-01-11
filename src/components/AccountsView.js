import React from 'react';

const AccountsView = ({ onSelect }) => {
  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Accounts</h4>
            </div>
            <div className="card-body">
              <div className="row">
                <div className="col-md-4 mb-3">
                  <button className="btn btn-outline-primary w-100" onClick={() => onSelect('debitHead')}>
                    Debit Head
                  </button>
                </div>
                <div className="col-md-4 mb-3">
                  <button className="btn btn-outline-primary w-100" onClick={() => onSelect('creditHead')}>
                    Credit Head
                  </button>
                </div>
                <div className="col-md-4 mb-3">
                  <button className="btn btn-outline-primary w-100" onClick={() => onSelect('bankDeposit')}>
                    Bank Deposit
                  </button>
                </div>
                <div className="col-md-4 mb-3">
                  <button className="btn btn-outline-primary w-100" onClick={() => onSelect('bankWithdraw')}>
                    Bank Withdraw
                  </button>
                </div>
                <div className="col-md-4 mb-3">
                  <button className="btn btn-outline-primary w-100" onClick={() => onSelect('income')}>
                    Income
                  </button>
                </div>
                <div className="col-md-4 mb-3">
                  <button className="btn btn-outline-primary w-100" onClick={() => onSelect('expense')}>
                    Expense
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

export default AccountsView;
