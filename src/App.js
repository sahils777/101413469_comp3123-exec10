import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
    address: '',
    city: '',
    province: '',
    postalCode: '',
  });
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  return (
    <div className="App">
      <h2>Data Entry Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Full Name:</label>
          <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} required />
        </div>
        <div>
          <label>Address:</label>
          <input type="text" name="address" value={formData.address} onChange={handleChange} required />
        </div>
        <div>
          <label>City:</label>
          <input type="text" name="city" value={formData.city} onChange={handleChange} required />
        </div>
        <div>
          <label>Province:</label>
          <input type="text" name="province" value={formData.province} onChange={handleChange} required />
        </div>
        <div>
          <label>Postal Code:</label>
          <input type="text" name="postalCode" value={formData.postalCode} onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>

      {submittedData && (
        <div class="submitted-data">
          <h3>Submitted Information</h3>
          <p>Email: {submittedData.email}</p>
          <p>Full Name: {submittedData.fullName}</p>
          <p>Address: {submittedData.address}</p>
          <p>City: {submittedData.city}</p>
          <p>Province: {submittedData.province}</p>
          <p>Postal Code: {submittedData.postalCode}</p>
        </div>
      )}
    </div>
  );
}

export default App;
