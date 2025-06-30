import React from 'react';
import profileImg from '../assets/masum.jpg';
import resume from '../assets/Mohammad-Masum-Hossain_resume.pdf';
import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="hero min-h-[calc(100vh-64px)] bg-base-100 px-6 -mt-12">
      <div className="hero-content flex-col lg:flex-row gap-10 w-full">
        {/* Text & Socials (Left) */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold mb-2">Mohammad Masum Hossain</h1>
          <p className="text-xl font-semibold text-gray-600 mb-4">Full Stack Developer</p>
          <div className="flex gap-5 mb-6 text-2xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="hover:text-blue-600 transition duration-200" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-700 transition duration-200" />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <FaGithub className="hover:text-gray-800 transition duration-200" />
            </a>
          </div>
          <a
            href={resume}
            download="Mohammad-Masum-Hossain-Resume.pdf"
            className="btn btn-primary"
          >
            Download Resume
          </a>
        </div>

        {/* Image (Right) */}
        <div className="flex-1 flex justify-center">
          <img
            src={profileImg}
            alt="Mohammad Masum Hossain"
            className="rounded-full w-60 h-60 object-cover border-4 border-primary shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
