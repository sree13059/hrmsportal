import React, { useState } from 'react';
import axios from "axios";
const ExpenseForm = ({ onBack }) => {
  const [headCode, setHeadCode] = useState('');
  const [headName, setHeadName] = useState('');
  const [amount, setAmount] = useState('');
  const [expenseDate, setExpenseDate] = useState('');
  const [description, setDescription] = useState('');
  const [entryBy, setEntryBy] = useState('');
  const [entryDate, setEntryDate] = useState('');

  // Mock debit heads
  const debitHeads = [
    { code: 'DH001', name: 'Salaries' },
    { code: 'DH002', name: 'Utilities' },
    { code: 'DH003', name: 'Maintenance' },
    { code: 'DH004', name: 'Stationery' },
    { code: 'DH005', name: 'Transportation' }
  ];

  const handleHeadCodeChange = (e) => {
    const selectedCode = e.target.value;
    setHeadCode(selectedCode);
    const selectedHead = debitHeads.find(head => head.code === selectedCode);
    setHeadName(selectedHead ? selectedHead.name : '');
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  const expenseData = {
    headCode,
    headName,
    amount,
    expenseDate,
    description,
    entryBy,
    entryDate
  };

  try {
    await axios.post("http://localhost:5000/api/expenses/add", expenseData);
    alert("Expense submitted successfully!");
    
    // Reset
    setHeadCode('');
    setHeadName('');
    setAmount('');
    setExpenseDate('');
    setDescription('');
    setEntryBy('');
    setEntryDate('');
  } catch (error) {
    alert("Failed to save expense");
    console.error(error);
  }
};

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">Expense Form</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="headCode" className="form-label">Head Code</label>
                    <select
                      className="form-control"
                      id="headCode"
                      value={headCode}
                      onChange={handleHeadCodeChange}
                      required
                    >
                      <option value="">Select Head Code</option>
                      {debitHeads.map(head => (
                        <option key={head.code} value={head.code}>{head.code}</option>
                      ))}
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="headName" className="form-label">Head Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="headName"
                      value={headName}
                      readOnly
                      placeholder="Auto-filled based on head code"
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-md-6">
                    <label htmlFor="amount" className="form-label">Amount</label>
                    <input
                      type="number"
                      className="form-control"
                      id="amount"
                      value={amount}
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="Enter amount"
                      required
                    />
                  </div>
                  <div className="col-md-6">
                    <label htmlFor="expenseDate" className="form-label">Expense Date</label>
                    <input
                      type="date"
                      className="form-control"
                      id="expenseDate"
                      value={expenseDate}
                      onChange={(e) => setExpenseDate(e.target.value)}
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
                      setHeadCode('');
                      setHeadName('');
                      setAmount('');
                      setExpenseDate('');
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

export default ExpenseForm;