import React from "react";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Contact from "../components/Contact";
import Dropdown from "../components/Dropdown";
import ContactForm from "../components/ContactForm"
import Image from "next/image";
// import { motion } from "framer-motion";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";
const Page = () => {
  
  return (
    <div className ="font-sans">
      {/* navbar */}
      <div className="md:px-10">
        <Navbar />
      </div>
      {/* navbar */}

      {/* hero section  */}
      <div className="p-5 flex flex-col gap-10 md:p-20 lg:p-40 lg:flex-row " id="home">
        <div className="w-20 h-1 bg-herotext  md:w-40 md:h-2 lg:w-40"></div>
        <div className="">
          <h1 className="text-4xl font-bold pb-3 text-herotext md:text-7xl tracking-wide lg:text-6xl">
            Where <br /> Design Meets <br /> Innovation!
          </h1>
          <p className="text-herotext opacity-[70%] mb-10 md:text-3xl md:py-5 lg:text-2xl">
            Whether you&apos;re a startup looking to establish your brand identity or
            an established business aiming to refresh your image, we&apos;ve got the
            creative firepower to make it happen.
          </p>
          <div>
            <button className="font-semibold bg-herotext w-auto   p-3 rounded-xl text-white md:text-3xl 
            md:p-5 md:rounded-2xl lg:p-5 lg:text-2xl lg:w-[10rem]">
              Let&apos;s Talk
            </button>
          </div>
        </div>
        <div className=" ">
          <Image
           src="/image/heroimg.png"
           width={2000}
           height={500}
           alt="" className="lg:w-[170rem]" />
        </div>
      </div>
      {/* hero section  */}

      {/* services */}
      <div className="bg-black h-auto text-white p-5 py-10 flex flex-col md:p-20 lg:p-40 lg:flex-row lg:gap-5" id="services">
        <div className="md:text-2xl lg:text-xl py-5 flex gap-2">
          <span>Our</span>
          <span>ServiSces</span>
        </div>
        <div className="lg:w-full">
          <div className="flex flex-col gap-5">
            <Dropdown
              header={<div className=" text-white ">Visual Branding</div>}
              content={
                <p>
                  Your brand is more than just a logo; it&apos;s the essence of your
                  business. We create compelling brand identities that tell your
                  unique story and resonate with your target audience.
                </p>
              }
            />
            <Dropdown
              header={<div className=" text-white ">Creative Campaign</div>}
              content={
                <p>
                  Unleash the power of creativity with our innovative and
                  impactful campaigns that captivate your audience. From
                  eye-catching visuals to compelling storytelling, we craft
                  campaigns that leave a lasting impression.
                </p>
              }
            />
            <Dropdown
              header={<div className=" text-white ">UI/UX Design</div>}
              content={
                <p>
                  Elevate user experiences with our cutting-edge UI/UX design
                  services. We believe that a seamless and visually pleasing
                  interface is key to user engagement. Our design experts
                  meticulously craft every detail, from intuitive user
                  interfaces to delightful user experiences.
                </p>
              }
            />
            <Dropdown
              header={<div className=" text-white ">Development</div>}
              content={
                <p>
                  Transform your ideas into reality with our expert development
                  services. Our team of skilled developers is committed to
                  building robust and scalable solutions tailored to your unique
                  needs.
                </p>
              }
            />
          </div>
        </div>
      </div>
      {/* services */}

      {/* portfolio */}
      <div className="p-5 flex flex-col py-20 gap-2 md:p-20 lg:p-40 lg:flex-row  " id="portfolio"> 
        <div className="font-medium flex gap-2 cursor-all-scroll md:text-2xl lg:w-1/4 lg:text-xl">
          <span>Our</span>
          <span>Portflio</span>
        </div>
        <div>
          <h1 className=" text-xl py-2 md:text-2xl lg:text-2xl">
            We envision a world where every idea, product, or service is brought
            to life through exceptional design.
          </h1>

          <div className="grid gap-10 md:gap-20 md:grid-cols-1 lg:grid-cols-2 md:pt-10 ">
            <Portfolio
              imageUrl="/image/portfolio1.png"
              title="Daily App -"
              description="Increasing your productivity"
            />
            <Portfolio
              imageUrl="/image/portfolio2.png"
              title="Daily App -"
              description="Increasing your productivity"
            />
            <Portfolio
              imageUrl="/image/portfoli3.png"
              title="Daily App -"
              description="Increasing your productivity"
            />
            <Portfolio
              imageUrl="/image/portfolio4.png"
              title="Daily App -"
              description="Increasing your productivity"
            />
            <Portfolio
              imageUrl="/image/portfolio6.png"
              title="Daily App -"
              description="Increasing your productivity"
            />
            <Portfolio
              imageUrl="/image/portfolio7.png"
              title="Daily App -"
              description="Increasing your productivity"
            />
          </div>
        </div>
      </div>
      {/* portfolio */}

      {/* contact */}
      <div className="bg-black text-white p-5 flex flex-col gap-5 md:p-20 lg:p-40 lg:flex-row" id="contact">
        <div className=" md:text-2xl pt-4 flex  gap-1 lg:text-xl lg:w-1/4 ">
          <span>Let&apos;s</span>
          <span>Collaborate</span>
        </div>
        <div>
          <p className="pb-3 text-md md:text-2xl lg:text-2xl lg:w-3/4 ">
            Ready to turn your ideas into exceptional designs? Contact us today,
            and let&apos;s make something amazing together!
          </p>
          <Contact />
        </div>
      </div>
      {/* contact */}


<ContactForm/>

      {/* footer */}
      <div className="bg-black text-white p-5 md:p-20 lg:px-40 ">
        <div className="lg:flex justify-around items-center lg:gap-20">
          <div className="md:text-3xl lg:1/3 ">
            <h2 className="font-medium pb-5 md:text-2xl lg:text-2xl ">Sky Tech</h2>
            <p className="text-white  text-md  opacity-[60%] text-sm py-3 md:text-2xl  lg:text-xl">
              SkyTech is where your imagination and our expertise converge to
              create design solutions that elevate your brand and set you apart
              from the competition.
            </p>
            <p className="py-1 md:text-xl lg:text-xl">
              <a href="mailto:companymail">info@sktech.com</a>
            </p>
            <p className="md:text-xl lg:text-xl">+ 233-243-500-3456</p>
          </div>
          <div className="flex gap-10 justify-between  items-center md:text-3xl lg:text-xl lg:w-2/3 ">
            <div className="py-5 md:py-2 ">
              <h1 className="text-sm md:text-2xl lg:text-xl">Company</h1>
              <div className="opacity-[70%] ">
                <ul className="leading-loose text-sm md:text-xl lg:text-xl">
                  <li>
                    <a href="#about">About</a>
                  </li>
                  <li>
                    <a href="#services">Services</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="py-5 md:py-2">
              <h1 className="text-xl md:text-2xl lg:text-xl">Contact</h1>
              <div className="opacity-[70%] ">
                <ul className="leading-loose text-sm md:text-xl lg:text-xl">
                  <li>
                    <a href="#">Help</a>
                  </li>
                  <li>
                    <a href="#">FAQs</a>
                  </li>
                  <li>
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:w-1/3 flex jc lg:justify-end">
            <div className="md:text-2xl lg:text-xl">
              <h1>Discover</h1>
              <div className="opacity-[70%] ">
                <ul className="leading-loose text-sm md:text-xl lg:text-xl">
                  <li>
                    <a href="#">Affiliate</a>
                  </li>
                  <li>
                    <a href="#">Partner Program</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-20 lg:flex gap-10 justify-center items-center ">
          <div className="flex gap-5 justify-center lg:flex  text-xl  lg:text-3xl">
            <div>
              <FaLinkedin className="https://linkedin.com" />
            </div>
            <div>
              <FaInstagram className="https://instagram.com" />
            </div>
            <div>
              <FaFacebook className="https://facebook.com" />
            </div>
          </div>
          <div className="">
            <p className="text-sm text-center p-1 lg:text-2xl">
              Copyright © 2023 SkyTech. All rights reserved.
            </p>
          </div>
        </div>
      </div>
      {/* footer */}
    </div>
  );
};

export default Page;
