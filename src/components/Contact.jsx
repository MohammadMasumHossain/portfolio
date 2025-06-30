import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2';

const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_6fc8n39', // Your EmailJS service ID
        'template_u1zqswi', // Your EmailJS template ID
        formRef.current,
        'JQM_RiAVVLQJVyraG' // Your EmailJS public key
      )
      .then(() => {
        Swal.fire({
          icon: 'success',
          title: 'Message Sent!',
          text: 'Your message has been successfully sent.',
        });
        e.target.reset();
      })
      .catch((error) => {
        console.error('Email send error:', error);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Failed to send your message. Please try again.',
        });
      });
  };

  return (
    <div id='contact' className="bg-gradient-to-r from-sky-100 to-blue-200 px-6 py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        
        {/* Left: Contact Info */}
        <motion.div
          initial={{ x: -80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="space-y-6 p-6 bg-white/70 backdrop-blur-md rounded-xl shadow-lg"
        >
          <h2 className="text-3xl font-bold text-primary">Contact Information</h2>

          <div className="flex items-center gap-4 text-lg text-gray-700">
            <FaEnvelope className="text-primary text-2xl" />

              <p href="masumhossainrana71@gmail.com" className=""> Email: masumhossainrana71@gmail.com</p>
            
          </div>

          <div className="flex items-center gap-4 text-lg text-gray-700">
            <FaPhone className="text-primary text-2xl" />
            <span>
               <p  className="">Phone: +880 01623742668</p>
            </span>
          </div>

          <div className="flex items-center gap-4 text-lg text-gray-700">
            <FaWhatsapp className="text-green-500 text-2xl" />
            <span>
              <p   className="">  WhatsApp:+880 01623742668</p>
            </span>
          </div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ x: 80, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="space-y-4 bg-white/80 backdrop-blur-md p-6 rounded-xl shadow-lg"
        >
          <h3 className="text-2xl font-bold mb-4 text-primary">Send a Message</h3>

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="input input-bordered w-full"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            className="input input-bordered w-full"
            required
          />

          {/* Hidden fields required by your EmailJS template */}
          <input
            type="text"
            name="reply_to"
            value="masum@example.com"
            readOnly
            hidden
          />
          <input
            type="text"
            name="time"
            value={new Date().toLocaleString()}
            readOnly
            hidden
          />

          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="textarea textarea-bordered w-full"
            required
          ></textarea>

          <button type="submit" className="btn btn-primary w-full">
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
