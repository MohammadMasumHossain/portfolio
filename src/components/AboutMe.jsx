import React from 'react';
import Lottie from 'lottie-react';
import { motion } from 'framer-motion';
import animationData from '../assets/aboutme animation.json';

const AboutMe = () => {
  return (
    <div id='aboutme' className="bg-base-100 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        
        {/* Lottie Animation (slide from left) */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="w-full max-w-md mx-auto"
        >
          <Lottie animationData={animationData} loop={true} />
        </motion.div>

        {/* Text Section (slide from right) */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="text-left"
        >
          <h2 className="text-3xl lg:text-4xl font-extrabold text-primary mb-2">
            I'm Mohammad Masum Hossain
          </h2>
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">
            Full Stack Developer
          </h3>

          <p className="text-base text-gray-600 leading-relaxed mb-4">
            A passionate problem solver who builds efficient, scalable, and user-friendly applications. I love transforming ideas into real digital products.
          </p>

          <p className="text-base text-gray-600 leading-relaxed">
            I'm always exploring new technologies, collaborating with others, and looking for ways to grow — both as a developer and a person.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
