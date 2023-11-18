"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

interface DropdownProps {
  header: React.ReactNode;
  content: React.ReactNode;
}

const Dropdown: React.FC<DropdownProps> = ({ header, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative ">
      <div
        onClick={toggleDropdown}
        className="cursor-pointer py-3 flex justify-between items-center  border-b-2
       border-white border-opacity-[50%] md:text-3xl  lg:text-4xl "
      >
        {header}
        <FaChevronDown />
      </div>
      {isOpen && (
        <div className="mt-5 text-white  shadow-md rounded-md p-4 opacity-[80%] md:text-2xl lg:text-2xl ">
          {content}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
