// src/components/SpecialPickupRequest.js
import React, { useState } from 'react';
import axios from 'axios';
import './SpecialPickupRequest.css';
const SpecialPickupRequest = () => {
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // await axios.post('/api/special-pickup', { description });
    alert('Request submitted successfully');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Request Special Pickup</h2>
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <button type="submit">Request Pickup</button>
    </form>
  );
};

export default SpecialPickupRequest;
