import React, { useState, useEffect } from 'react';

const Attendance = () => {
  const [isPunchedIn, setIsPunchedIn] = useState(false);
  const [punchInTime, setPunchInTime] = useState(null);
  const [punchOutTime, setPunchOutTime] = useState(null);
  const [serverTime, setServerTime] = useState('');
  const [cameraStream, setCameraStream] = useState(null);
  const [attendanceHistory, setAttendanceHistory] = useState([
    {
      date: '2025-12-18',
      punchIn: '09:00 AM',
      punchOut: '05:00 PM',
      inSelfie: 'selfie1.jpg',
      outSelfie: 'selfie2.jpg',
      totalHours: '8 hours',
      status: 'Present'
    },
    {
      date: '2025-12-17',
      punchIn: '09:15 AM',
      punchOut: '04:45 PM',
      inSelfie: 'selfie3.jpg',
      outSelfie: 'selfie4.jpg',
      totalHours: '7.5 hours',
      status: 'Present'
    }
  ]);

  useEffect(() => {
    const updateTime = () => {
      setServerTime(new Date().toLocaleString());
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handlePunchIn = () => {
    const now = new Date();
    setPunchInTime(now.toLocaleTimeString());
    setIsPunchedIn(true);
  };

  const handlePunchOut = () => {
    const now = new Date();
    setPunchOutTime(now.toLocaleTimeString());
    setIsPunchedIn(false);
    // Add to history
    const newEntry = {
      date: now.toLocaleDateString(),
      punchIn: punchInTime,
      punchOut: now.toLocaleTimeString(),
      inSelfie: 'new_selfie_in.jpg',
      outSelfie: 'new_selfie_out.jpg',
      totalHours: calculateHours(punchInTime, now.toLocaleTimeString()),
      status: 'Present'
    };
    setAttendanceHistory([newEntry, ...attendanceHistory]);
  };

  const calculateHours = (inTime, outTime) => {
    // Simple calculation
    return '8 hours'; // Mock
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card shadow">
            <div className="card-header bg-primary text-white text-center">
              <h3>Attendance Panel</h3>
            </div>
            <div className="card-body">
              <div className="row mb-4">
                <div className="col-md-6">
                  <p><strong>🕒 Server Time:</strong> {serverTime}</p>
                </div>
                <div className="col-md-6">
                  <p><strong>📶 Your IP:</strong> 203.192.253.13</p>
                </div>
              </div>
              <div className="text-center mb-4">
                <div className="mb-3">
                  <video id="camera" width="320" height="240" autoPlay style={{ border: '1px solid #ccc', display: cameraStream ? 'block' : 'none' }}></video>
                  {!cameraStream ? (
                    <button className="btn btn-info mt-2" onClick={() => {
                      navigator.mediaDevices.getUserMedia({ video: true })
                        .then(stream => {
                          document.getElementById('camera').srcObject = stream;
                          setCameraStream(stream);
                        })
                        .catch(err => console.error('Error accessing camera:', err));
                    }}>
                      📷 Open Camera
                    </button>
                  ) : (
                    <div className="mt-2">
                      <button className="btn btn-success me-2" onClick={() => {
                        // Capture photo
                        const video = document.getElementById('camera');
                        const canvas = document.createElement('canvas');
                        canvas.width = video.videoWidth;
                        canvas.height = video.videoHeight;
                        canvas.getContext('2d').drawImage(video, 0, 0);
                        canvas.toBlob(blob => {
                          // Set as photo, but since it's not in formData, perhaps just alert
                          alert('Photo captured!');
                          // Stop stream
                          cameraStream.getTracks().forEach(track => track.stop());
                          setCameraStream(null);
                        });
                      }}>
                        OK
                      </button>
                      <button className="btn btn-secondary" onClick={() => {
                        cameraStream.getTracks().forEach(track => track.stop());
                        setCameraStream(null);
                      }}>
                        Cancel
                      </button>
                    </div>
                  )}
                </div>
                <button
                  className={`btn ${isPunchedIn ? 'btn-danger' : 'btn-success'} me-2`}
                  onClick={isPunchedIn ? handlePunchOut : handlePunchIn}
                >
                  {isPunchedIn ? 'Punch Out' : 'Punch In'}
                </button>
              </div>
              {isPunchedIn && (
                <div className="alert alert-info">
                  Punched In at: {punchInTime}
                </div>
              )}
              <h4>Attendance History</h4>
              <div className="mb-3">
                <select className="form-select">
                  <option>December</option>
                </select>
                <select className="form-select mt-2">
                  <option>2025</option>
                </select>
              </div>
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Punch In</th>
                    <th>Punch Out</th>
                    <th>In Selfie</th>
                    <th>Out Selfie</th>
                    <th>Total Hours</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {attendanceHistory.map((entry, index) => (
                    <tr key={index}>
                      <td>{entry.date}</td>
                      <td>{entry.punchIn}</td>
                      <td>{entry.punchOut}</td>
                      <td><img src={entry.inSelfie} alt="In Selfie" style={{ width: '50px', height: '50px' }} /></td>
                      <td><img src={entry.outSelfie} alt="Out Selfie" style={{ width: '50px', height: '50px' }} /></td>
                      <td>{entry.totalHours}</td>
                      <td>{entry.status}</td>
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

export default Attendance;
