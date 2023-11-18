'use client'
import React, { useState } from 'react';
import GoogleMap from '../components/GoogleMap'

const ContactForm: React.FC = () => {
  const location = {
    lat: 37.7749, // Replace with your desired latitude
    lng: -122.4194, // Replace with your desired longitude
  };
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md shadow-md">
      <div className =" py-5  ">
      <GoogleMap/>
        <h1 className =" text-2xl  font-semibold">Get In Touch </h1>
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.</p>
      </div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Name:
        <input
          className="w-full px-3 py-2 border rounded-md mt-1 focus:outline-none focus:ring focus:border-blue-300"
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="John Doe"
        />
      </label>

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email:
        <input
          className="w-full px-3 py-2 border rounded-md mt-1 focus:outline-none focus:ring focus:border-blue-300"
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john.doe@example.com"
        />
      </label>

      <button
        type="submit"
        className="w-full mt-4 bg-herotext text-white p-3 rounded-md hover:bg-opacity-75 focus:outline-none focus:ring focus:border-blue-300"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
