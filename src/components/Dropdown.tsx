'use client'
import React, { useState } from 'react';
import { FaChevronDown , FaChevronUp} from 'react-icons/fa';

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
      <div onClick={toggleDropdown} className="cursor-pointer py-3 flex justify-between items-center  border-b-2 border-white border-opacity-[50%] md:text-5xl  lg:text-4xl">
        {header}
        <FaChevronDown/>
      </div>
      {isOpen && (
          <div className="mt-5 text-white  shadow-md rounded-md p-4 opacity-[80%] md:text-4xl lg:text-3xl">
          {content}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
