import React, { useState } from 'react';

const Inventory = () => {
  const [inventory, setInventory] = useState([
    { itemName: 'Chalk', category: 'Stationery', quantity: 100, supplier: 'ABC Supplies', lastUpdated: '2025-12-01' },
    { itemName: 'Markers', category: 'Stationery', quantity: 50, supplier: 'XYZ Corp', lastUpdated: '2025-12-02' },
    { itemName: 'Projector Bulbs', category: 'Electronics', quantity: 10, supplier: 'Tech Solutions', lastUpdated: '2025-12-03' }
  ]);

  const [newItem, setNewItem] = useState({
    itemName: '',
    category: '',
    quantity: '',
    supplier: '',
    lastUpdated: ''
  });

  const handleChange = (e) => {
    setNewItem({ ...newItem, [e.target.name]: e.target.value });
  };

  const handleAddItem = () => {
    setInventory([...inventory, { ...newItem, quantity: parseInt(newItem.quantity), lastUpdated: new Date().toLocaleDateString() }]);
    setNewItem({ itemName: '', category: '', quantity: '', supplier: '', lastUpdated: '' });
  };

  const categories = ['Stationery', 'Electronics', 'Furniture', 'Cleaning', 'Lab Supplies'];

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow">
            <div className="card-header bg-secondary text-white text-center">
              <h3>📦 Inventory Management</h3>
            </div>
            <div className="card-body">
              <h4>Add New Inventory Item</h4>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Item Name</label>
                  <input type="text" className="form-control" name="itemName" value={newItem.itemName} onChange={handleChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Category</label>
                  <select className="form-control" name="category" value={newItem.category} onChange={handleChange}>
                    <option value="">Select Category</option>
                    {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
                  </select>
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Quantity</label>
                  <input type="number" className="form-control" name="quantity" value={newItem.quantity} onChange={handleChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Supplier</label>
                  <input type="text" className="form-control" name="supplier" value={newItem.supplier} onChange={handleChange} />
                </div>
              </div>
              <button className="btn btn-secondary" onClick={handleAddItem}>Add Item</button>

              <h4 className="mt-5">📋 Inventory List</h4>
              <table className="table table-striped table-hover">
                <thead className="table-secondary">
                  <tr>
                    <th>Item Name</th>
                    <th>Category</th>
                    <th>Quantity</th>
                    <th>Supplier</th>
                    <th>Last Updated</th>
                  </tr>
                </thead>
                <tbody>
                  {inventory.map((item, index) => (
                    <tr key={index}>
                      <td>{item.itemName}</td>
                      <td>{item.category}</td>
                      <td>{item.quantity}</td>
                      <td>{item.supplier}</td>
                      <td>{item.lastUpdated}</td>
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

export default Inventory;