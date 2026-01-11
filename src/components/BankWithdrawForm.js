import React, { useState } from 'react';
import axios from "axios";
const BankWithdrawForm = ({ onBack }) => {
  const [bankName, setBankName] = useState('');
  const [branchName, setBranchName] = useState('');
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [withdrawTime, setWithdrawTime] = useState('');
  const [withdrawDate, setWithdrawDate] = useState('');
  const [description, setDescription] = useState('');
  const [entryBy, setEntryBy] = useState('');
  const [entryDate, setEntryDate] = useState('');

  
const handleSubmit = async (e) => {
  e.preventDefault();

  const withdrawData = {
    bankName,
    branchName,
    withdrawAmount,
    withdrawTime,
    withdrawDate,
    description,
    entryBy,
    entryDate
  };

  try {
    await axios.post(
      "http://localhost:5000/api/bank-withdraws/create",
      withdrawData
    );

    alert("Bank Withdraw submitted successfully!");

    // Reset
    setBankName("");
    setBranchName("");
    setWithdrawAmount("");
    setWithdrawTime("");
    setWithdrawDate("");
    setDescription("");
    setEntryBy("");
    setEntryDate("");
  } catch (error) {
    console.error(error);
    alert("Failed to submit Bank Withdraw");
  }
};


  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Bank Withdraw Form</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="bankName" className="form-label">Bank Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="bankName"
                      value={bankName}
                      onChange={(e) => setBankName(e.target.value)}
                      placeholder="Enter bank name"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="branchName" className="form-label">Branch Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="branchName"
                      value={branchName}
                      onChange={(e) => setBranchName(e.target.value)}
                      placeholder="Enter branch name"
                      required
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-4">
                    <label htmlFor="withdrawAmount" className="form-label">Withdraw Amount</label>
                    <input
                      type="number"
                      className="form-control"
                      id="withdrawAmount"
                      value={withdrawAmount}
                      onChange={(e) => setWithdrawAmount(e.target.value)}
                      placeholder="Enter amount"
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="withdrawTime" className="form-label">Withdraw Time</label>
                    <input
                      type="time"
                      className="form-control"
                      id="withdrawTime"
                      value={withdrawTime}
                      onChange={(e) => setWithdrawTime(e.target.value)}
                      required
                    />
                  </div>
                  <div className="col-md-4">
                    <label htmlFor="withdrawDate" className="form-label">Withdraw Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="withdrawDate"
                      value={withdrawDate}
                      onChange={(e) => setWithdrawDate(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="form-group mb-3">
                  <label htmlFor="description" className="form-label">Description</label>
                  <textarea
                    className="form-control"
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Enter description"
                    rows="3"
                  />
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="entryBy" className="form-label">Entry By</label>
                    <select
                      className="form-control"
                      id="entryBy"
                      value={entryBy}
                      onChange={(e) => setEntryBy(e.target.value)}
                    >
                      <option value="">Select Entry By</option>
                      <option value="admin">Admin</option>
                      <option value="superadmin">Superadmin</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="entryDate" className="form-label">Entry Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="entryDate"
                      value={entryDate}
                      onChange={(e) => setEntryDate(e.target.value)}
                    />
                  </div>
                </div>
                <div className="d-flex justify-content-between">
                  <div className="d-flex gap-3">
                    <button type="submit" className="btn btn-success">
                      Save
                    </button>
                    <button type="button" className="btn btn-danger">
                      Delete
                    </button>
                    <button type="button" className="btn btn-warning" onClick={() => {
                      setBankName('');
                      setBranchName('');
                      setWithdrawAmount('');
                      setWithdrawTime('');
                      setWithdrawDate('');
                      setDescription('');
                      setEntryBy('');
                      setEntryDate('');
                    }}>
                      Reset
                    </button>
                  </div>
                  <button type="button" className="btn btn-secondary" onClick={onBack}>
                    Back
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankWithdrawForm;