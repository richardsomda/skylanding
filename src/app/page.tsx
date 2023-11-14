import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const Page = () => {
  return (
    <div>
      {/* navbar */}
      <Navbar />
      {/* navbar */}

      {/* hero section  */}
      <div className="p-5 flex flex-col gap-10 ">
        <div className="w-20 h-1 bg-black "></div>
        <div className="">
          <h1 className="text-4xl font-bold pb-3 text-herotext">
            Where <br /> Design Meets Innovation!
          </h1>
          <p className="text-herotext opacity-[70%] mb-10">
            Whether you're a startup looking to establish your brand identity or
            an established business aiming to refresh your image, we've got the
            creative firepower to make it happen.
          </p>
          <div>
            <button className="font-semibold bg-herotext w-32  p-3 rounded-xl text-white ">
              Let's Talk
            </button>
          </div>
        </div>
        <div className=" ">
          <img src="/image/heroimg.png" alt="" />
        </div>
      </div>
      {/* hero section  */}

      {/* services */}
      
      {/* services */}

      <div></div>
    </div>
  );
};

export default Page;
