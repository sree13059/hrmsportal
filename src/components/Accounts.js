import React, { useState } from 'react';

const Accounts = () => {
  const [transactions, setTransactions] = useState([
    { description: 'Tuition Fee', amount: 5000, type: 'Income', date: '2025-12-01' },
    { description: 'Stationery Purchase', amount: 2000, type: 'Expense', date: '2025-12-02' },
    { description: 'Library Fee', amount: 1000, type: 'Income', date: '2025-12-03' }
  ]);

  const [newTransaction, setNewTransaction] = useState({
    description: '',
    amount: '',
    type: '',
    date: ''
  });

  const handleChange = (e) => {
    setNewTransaction({ ...newTransaction, [e.target.name]: e.target.value });
  };

  const handleAddTransaction = () => {
    setTransactions([...transactions, { ...newTransaction, amount: parseFloat(newTransaction.amount), date: new Date().toLocaleDateString() }]);
    setNewTransaction({ description: '', amount: '', type: '', date: '' });
  };

  const types = ['Income', 'Expense'];

  const totalIncome = transactions.filter(t => t.type === 'Income').reduce((sum, t) => sum + t.amount, 0);
  const totalExpense = transactions.filter(t => t.type === 'Expense').reduce((sum, t) => sum + t.amount, 0);
  const balance = totalIncome - totalExpense;

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow">
            <div className="card-header bg-success text-white text-center">
              <h3>💰 Accounts Management</h3>
            </div>
            <div className="card-body">
              <div className="row mb-4">
                <div className="col-md-4">
                  <div className="card text-white bg-success mb-3">
                    <div className="card-body">
                      <h5>Total Income</h5>
                      <h3>${totalIncome}</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-white bg-danger mb-3">
                    <div className="card-body">
                      <h5>Total Expense</h5>
                      <h3>${totalExpense}</h3>
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card text-white bg-primary mb-3">
                    <div className="card-body">
                      <h5>Balance</h5>
                      <h3>${balance}</h3>
                    </div>
                  </div>
                </div>
              </div>
              <h4>Add New Transaction</h4>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Description</label>
                  <input type="text" className="form-control" name="description" value={newTransaction.description} onChange={handleChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Amount</label>
                  <input type="number" className="form-control" name="amount" value={newTransaction.amount} onChange={handleChange} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Type</label>
                  <select className="form-control" name="type" value={newTransaction.type} onChange={handleChange}>
                    <option value="">Select Type</option>
                    {types.map(type => <option key={type} value={type}>{type}</option>)}
                  </select>
                </div>
              </div>
              <button className="btn btn-success" onClick={handleAddTransaction}>Add Transaction</button>

              <h4 className="mt-5">📊 Transaction History</h4>
              <table className="table table-striped table-hover">
                <thead className="table-success">
                  <tr>
                    <th>Description</th>
                    <th>Amount</th>
                    <th>Type</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {transactions.map((transaction, index) => (
                    <tr key={index}>
                      <td>{transaction.description}</td>
                      <td>${transaction.amount}</td>
                      <td><span className={`badge ${transaction.type === 'Income' ? 'bg-success' : 'bg-danger'}`}>{transaction.type}</span></td>
                      <td>{transaction.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Accounts;