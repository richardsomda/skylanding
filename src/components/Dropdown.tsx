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
        {isOpen ? <FaChevronUp /> : <FaChevronDown />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-5 text-white  shadow-md rounded-md p-4 opacity-[80%] md:text-2xl lg:text-2xl "
          >
            {content}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
