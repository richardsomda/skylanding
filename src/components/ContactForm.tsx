'use client'
import React, { useState } from 'react';

const ContactForm = () => {

  return (
    <form  className="max-w-md mx-auto mt-8 p-4 bg-white rounded-md shadow-md">
      <div className="py-5">
        {/* <GoogleMap/> */}
        <h1 className="text-2xl font-semibold">Get In Touch </h1>
        <p>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet.</p>
      </div>
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
        Name:
        <input
          className="w-full px-3 py-2 border rounded-md mt-1 focus:outline-none focus:ring focus:border-herotext"
          type="text"
          name="name"
          id="name"
          placeholder="name"
        />
      </label>

      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email:
        <input
          className="w-full px-3 py-2 border rounded-md mt-1 focus:outline-none focus:ring focus:border-herotext"
          type="email"
          name="email"
          id="email"
          placeholder="skytech@gmail.com"
        />
      </label>
      <label className="block text-gray-700 text-sm font-bold mb-2">
        Message:
        <textarea
          className="w-full px-3 py-2 border rounded-md mt-1 focus:outline-none focus:ring focus:border-herotext"
          name="message"
          id="message"
          rows={5}
          placeholder="Enter Message"
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
