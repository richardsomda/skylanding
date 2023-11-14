'use client'
// src/components/Navbar.tsx
import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <div className="flex justify-between px-5 py-5">
        <div className="text-2xl font-medium">
          <h1>Skytech</h1>
        </div>
        <div className="text-2xl font-bold md:hidden" onClick={toggleDropdown}>
          <FaBars />
        </div>
        <nav className="hidden md:flex items-center space-x-8 gap-5 text-2xl">
          <a href="#" className="tblack">
            Home
          </a>
          <a href="#" className="">
            Services
          </a>
          <a href="#" className="">
            About Us
          </a>
          <a href="#" className="">
            Why Choose Us
          </a>
          <a href="#" className="">
            Testimonial
          </a>
        </nav>
      </div>
      {isDropdownOpen && (
        <div className="absolute top-15 right-0 bg-herotext border border-gray-300 shadow-md rounded-md p-5 w-full">
          <ul className="text-white">
            <li className="p-1">
              <a href="#">Home</a>
            </li>
            <li className="p-1">
              <a href="#">Services</a>
            </li>
            <li className="p-1">
              <a href="#">About Us</a>
            </li>
            <li className="p-1">
              <a href="#">Why Choose Us</a>
            </li>
            <li className="p-1">
              <a href="#">Testimonial</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
