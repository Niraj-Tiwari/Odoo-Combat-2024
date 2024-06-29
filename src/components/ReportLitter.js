// src/components/ReportLitter.js
import React, { useState } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import './ReportLitter.css';

const ReportLitter = () => {
  const [description, setDescription] = useState('');
  const [photo, setPhoto] = useState(null);
  const [location, setLocation] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('description', description);
    formData.append('photo', photo);
    formData.append('location', JSON.stringify(location));

    try {
      await axios.post('/api/report', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      alert('Report submitted successfully');
    } catch (err) {
      console.error(err);
      alert('Error submitting report');
    }
  };

  const handlePhotoChange = (e) => {
    setPhoto(e.target.files[0]);
  };

  const LocationMarker = () => {
    useMapEvents({
      click(e) {
        setLocation({ type: 'Point', coordinates: [e.latlng.lat, e.latlng.lng] });
      },
    });
    return location ? (
      <Marker position={[location.coordinates[0], location.coordinates[1]]} />
    ) : null;
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Report Litter</h2>
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input type="file" accept="image/*" onChange={handlePhotoChange} required />
      <MapContainer center={[51.505, -0.09]} zoom={13} style={{ height: "200px", width: "100%" }}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <LocationMarker />
      </MapContainer>
      <button type="submit">Report</button>
    </form>
  );
};

export default ReportLitter;
