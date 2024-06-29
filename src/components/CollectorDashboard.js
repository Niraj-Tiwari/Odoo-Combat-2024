// src/components/CollectorDashboard.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './CollectorDashboard.css'
const CollectorDashboard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
    //   const response = await axios.get('/api/admin/tasks');
    //   setTasks(response.data);
    };
    fetchTasks();
  }, []);

  return (
    <div>
      <h2>Collector Dashboard</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>{task.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default CollectorDashboard;
