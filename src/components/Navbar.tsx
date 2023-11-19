"use client";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import Link from 'next/link'; 

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative lg:mx-40 ">
      <div className="flex justify-between px-5 py-5">
        <div className="text-2xl font-bold md:text-3xl lg:text-3xl ">
          <h1>Skytech</h1>
        </div>
        <div
          className="text-2xl md:text-xl font-bold md:hidden text-herotext"
          onClick={toggleDropdown}
        >
          <FaBars />
        </div>
        <nav className="hidden md:flex items-center space-x-8 gap-5 text-2xl md:text-lg lg:text-xl">
          <a href="#home" className="">
            Home
          </a>
          <a href="#about" className="">
            About
          </a>
          <a href="#portfolio" className="">
            Portfolio
          </a>
          <div>
            <button className="bg-herotext text-white p-4 rounded-2xl lg:text-sm">Get In Touch</button>
          </div>
        </nav>
      </div>
      {isDropdownOpen && (
        <div className="absolute top-15 right-0 bg-herotext border border-gray-300 shadow-md rounded-md p-5 w-full">
          <ul className="text-white">
            <li className="p-1">
              <a href="#home">Home</a>
            </li>

            <li className="p-1">
              <a href="#services">Services</a>
            </li>
            <li className="p-1">
              <a href="#blog">Blog</a>
            </li>
            <li className="p-1">
              <a href="#">Get In Touch</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
