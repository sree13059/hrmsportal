import React, { useState } from 'react';

const Asset = () => {
  const [assets, setAssets] = useState([
    { name: 'Projector', category: 'Electronics', quantity: 5, location: 'Room 101', status: 'Available' },
    { name: 'Whiteboard', category: 'Furniture', quantity: 10, location: 'Various Rooms', status: 'In Use' },
    { name: 'Laptop', category: 'Electronics', quantity: 20, location: 'Lab', status: 'Available' }
  ]);

  const [newAsset, setNewAsset] = useState({
    name: '',
    category: '',
    quantity: '',
    location: '',
    status: ''
  });

  const handleChange = (e) => {
    setNewAsset({ ...newAsset, [e.target.name]: e.target.value });
  };

  const handleAddAsset = () => {
    setAssets([...assets, { ...newAsset, quantity: parseInt(newAsset.quantity) }]);
    setNewAsset({ name: '', category: '', quantity: '', location: '', status: '' });
  };

  const categories = ['Electronics', 'Furniture', 'Books', 'Sports', 'Lab Equipment'];
  const statuses = ['Available', 'In Use', 'Under Maintenance', 'Lost'];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow">
            <div className="card-header bg-warning text-white text-center">
              <h3>📦 Asset Management</h3>
            </div>
            <div className="card-body">
              <h4>Add New Asset</h4>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Asset Name</label>
                  <input type="text" className="form-control" name="name" value={newAsset.name} onChange={handleChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Category</label>
                  <select className="form-control" name="category" value={newAsset.category} onChange={handleChange}>
                    <option value="">Select Category</option>
                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-4 mb-3">
                  <label className="form-label">Quantity</label>
                  <input type="number" className="form-control" name="quantity" value={newAsset.quantity} onChange={handleChange} />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">Location</label>
                  <input type="text" className="form-control" name="location" value={newAsset.location} onChange={handleChange} />
                </div>
                <div className="col-md-4 mb-3">
                  <label className="form-label">Status</label>
                  <select className="form-control" name="status" value={newAsset.status} onChange={handleChange}>
                    <option value="">Select Status</option>
                    {statuses.map(stat => <option key={stat} value={stat}>{stat}</option>)}
                  </select>
                </div>
              </div>
              <button className="btn btn-warning" onClick={handleAddAsset}>Add Asset</button>

              <h4 className="mt-5">🏢 Assets List</h4>
              <table className="table table-striped table-hover">
                <thead className="table-warning">
                  <tr>
                    <th>Asset Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Location</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {assets.map((asset, index) => (
                    <tr key={index}>
                      <td>{asset.name}</td>
                      <td>{asset.category}</td>
                      <td>{asset.quantity}</td>
                      <td>{asset.location}</td>
                      <td><span className={`badge ${asset.status === 'Available' ? 'bg-success' : asset.status === 'In Use' ? 'bg-primary' : 'bg-secondary'}`}>{asset.status}</span></td>
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

export default Asset;