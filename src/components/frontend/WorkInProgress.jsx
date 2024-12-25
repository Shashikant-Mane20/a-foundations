import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

import '../../app/style.css' 


const generateRandomPosition = () => {
  return Math.random() * 100; 
};

const WorkInProgress = () => {

  const snowflakes = Array(20).fill().map((_, index) => (
    <div
      key={index}
      className="snowflake"
      style={{
        left: `${generateRandomPosition()}%`,
        animationDuration: `${Math.random() * (20 - 8) + 8}s`,
        animationDelay: `${Math.random() * 10}s`, 
      }}
    >
      ❄
    </div>
  ));

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-black text-white px-4"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1646836535296-f4d3b6fa041e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div className="snowflakes">{snowflakes}</div>
      </div>

     
      <div className="text-center mb-6 transform transition-all ease-in-out duration-500 hover:scale-105">
        <h1
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white"
          style={{
            letterSpacing: "3px",
            textShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
            marginBottom: "20px",
          }}
        >
          Arrelic Foundations
        </h1>
      </div>

    
      <div className="text-center mb-6 opacity-90">
        <h2 className="text-3xl md:text-4xl font-semibold text-white">
          Work in Progress
        </h2>
        <p
          className="text-lg md:text-xl mt-4 opacity-75"
          style={{
            animation: "fadeIn 3s ease-in-out forwards",
            animationDelay: "1s",
          }}
        >
          We’re working hard to make this page awesome! Stay tuned.
        </p>
      </div>

     
      {/* <div className="mt-10 flex space-x-6 animate-slide-up">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-500 transition transform hover:scale-110"
        >
          <FaFacebook size={40} />
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition transform hover:scale-110"
        >
          <BsTwitterX size={40} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-pink-500 transition transform hover:scale-110"
        >
          <FaInstagram size={40} />
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 transition transform hover:scale-110"
        >
          <FaLinkedin size={40} />
        </a>
      </div>

     
      <div className="mt-12 text-center opacity-80">
        <p className="mb-2 text-lg">
          Email us at:{" "}
          <a
            href="mailto:contact@arrelicfoundation.org"
            className="text-blue-500  hover:text-blue-300 transition"
          >
            contact@arrelicfoundation.org
          </a>
        </p>
        <p className="text-lg">
          Call us:{" "}
          <a
            href="tel:+910000000000"
            className="text-blue-500  hover:text-blue-300 transition"
          >
            +91 00000 00000
          </a>
        </p>
      </div> */}
    </div>
  );
};

export default WorkInProgress;
