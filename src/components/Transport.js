import React, { useState } from 'react';

const Transport = () => {
  const [routes, setRoutes] = useState([
    { routeName: 'Route A', from: 'College', to: 'City Center', vehicle: 'Bus 101', schedule: '08:00 AM - 06:00 PM', capacity: 50 },
    { routeName: 'Route B', from: 'College', to: 'Airport', vehicle: 'Van 202', schedule: '09:00 AM - 07:00 PM', capacity: 20 },
    { routeName: 'Route C', from: 'College', to: 'Train Station', vehicle: 'Bus 303', schedule: '07:00 AM - 08:00 PM', capacity: 40 }
  ]);

  const [newRoute, setNewRoute] = useState({
    routeName: '',
    from: '',
    to: '',
    vehicle: '',
    schedule: '',
    capacity: ''
  });

  const handleChange = (e) => {
    setNewRoute({ ...newRoute, [e.target.name]: e.target.value });
  };

  const handleAddRoute = () => {
    setRoutes([...routes, { ...newRoute, capacity: parseInt(newRoute.capacity) }]);
    setNewRoute({ routeName: '', from: '', to: '', vehicle: '', schedule: '', capacity: '' });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow">
            <div className="card-header bg-danger text-white text-center">
              <h3>🚍 Transport Management</h3>
            </div>
            <div className="card-body">
              <h4>Add New Route</h4>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Route Name</label>
                  <input type="text" className="form-control" name="routeName" value={newRoute.routeName} onChange={handleChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">From</label>
                  <input type="text" className="form-control" name="from" value={newRoute.from} onChange={handleChange} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">To</label>
                  <input type="text" className="form-control" name="to" value={newRoute.to} onChange={handleChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Vehicle</label>
                  <input type="text" className="form-control" name="vehicle" value={newRoute.vehicle} onChange={handleChange} />
                </div>
              </div>
              <div className="row mb-3">
                <div className="col-md-6 mb-3">
                  <label className="form-label">Schedule</label>
                  <input type="text" className="form-control" name="schedule" placeholder="e.g., 08:00 AM - 06:00 PM" value={newRoute.schedule} onChange={handleChange} />
                </div>
                <div className="col-md-6 mb-3">
                  <label className="form-label">Capacity</label>
                  <input type="number" className="form-control" name="capacity" value={newRoute.capacity} onChange={handleChange} />
                </div>
              </div>
              <button className="btn btn-danger" onClick={handleAddRoute}>Add Route</button>

              <h4 className="mt-5">🗺️ Transport Routes</h4>
              <table className="table table-striped table-hover">
                <thead className="table-danger">
                  <tr>
                    <th>Route Name</th>
                    <th>From</th>
                    <th>To</th>
                    <th>Vehicle</th>
                    <th>Schedule</th>
                    <th>Capacity</th>
                  </tr>
                </thead>
                <tbody>
                  {routes.map((route, index) => (
                    <tr key={index}>
                      <td>{route.routeName}</td>
                      <td>{route.from}</td>
                      <td>{route.to}</td>
                      <td>{route.vehicle}</td>
                      <td>{route.schedule}</td>
                      <td>{route.capacity}</td>
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

export default Transport;
