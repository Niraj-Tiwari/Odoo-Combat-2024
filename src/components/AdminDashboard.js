// src/components/AdminDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminDashboard.css'
const AdminDashboard = () => {
  const [reports, setReports] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      console.log(response);
      setReports(response.data);
    };
    const fetchUsers = async () => {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      console.log(response);
      setUsers(response.data);
    };
    fetchReports();
    fetchUsers();
  }, []);

  const assignTask = async () => {
    await axios.post('/api/admin/assign-task', { reportId: selectedReport, userId: selectedUser });
    alert('Task assigned successfully');
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>
      <select onChange={(e) => setSelectedReport(e.target.value)} defaultValue="">
        <option value="" disabled>Select Report</option>
        {reports.map((report) => (
          <option key={report.id} value={report.id}>
            {report.title}
          </option>
        ))}
      </select>
      <select onChange={(e) => setSelectedUser(e.target.value)} defaultValue="">
        <option value="" disabled>Select User</option>
        {users.map((user) => (
          <option key={user._id} value={user._id}>
            {user.username}
          </option>
        ))}
      </select>
      <button onClick={assignTask}>Assign Task</button>
    </div>
  );
};

export default AdminDashboard;
