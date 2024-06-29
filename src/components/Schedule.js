// src/components/Schedule.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Schedule.css';
const Schedule = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
    //   const response = await axios.get('/api/schedules');
    //   setSchedules(response.data);
    };
    fetchSchedules();
  }, []);

  return (
    <div>
      <h2>Garbage Collection Schedule</h2>
      <ul>
        {schedules.map((schedule) => (
          <li key={schedule._id}>
            {schedule.day}: {schedule.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Schedule;
