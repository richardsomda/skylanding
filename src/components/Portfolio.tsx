import React from 'react';
import Image from 'next/image';


interface PortfolioProps {
  imageUrl: string;
  title: string;
  description: string;
}

const Portfolio: React.FC<PortfolioProps> = ({ imageUrl, title,description }) => {
  return (
    <div className="p-2 border  rounded-md md:px-10 ">
      <Image src={imageUrl} alt="Portfolio Image" className="w-full h-auto mb-4 rounded-md " />
      <span className="text-gray-700 font-semibold  md:text-2xl lg:text-2xl">{title}</span>
      <span className="text-gray-700 md:text-2xl lg:text-2xl">{description}</span>
    </div>
  );
};

export default Portfolio;
