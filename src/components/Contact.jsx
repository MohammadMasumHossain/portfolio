import React from 'react';
import { FaEnvelope, FaPhone, FaWhatsapp } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "d42c83f8-bb67-4d87-9a96-7ee6e0839b8e");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
      event.target.reset();
    }
  };

  return (
    <section
      id="contact"
      className="py-16 px-4 bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-primary mb-12">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-12 p-6 rounded-xl bg-white/70 backdrop-blur-lg shadow-2xl">
          {/* Left Side: Contact Info - Vertically Centered */}
          <div className="flex flex-col justify-center h-full space-y-6">
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-2xl text-primary" />
              <span className="text-lg font-medium text-gray-800">masumhossainrana71@gmail.com</span>
            </div>
            <div className="flex items-center gap-4">
              <FaPhone className="text-2xl text-primary" />
              <span className="text-lg font-medium text-gray-800">+880 1623742668</span>
            </div>
            <div className="flex items-center gap-4">
              <FaWhatsapp className="text-2xl text-primary" />
              <span className="text-lg font-medium text-gray-800">+880 1623742668</span>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <form onSubmit={onSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 bg-white bg-opacity-80 backdrop-blur-md rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 bg-white bg-opacity-80 backdrop-blur-md rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="4"
                name="message"
                placeholder="Your message"
                required
                className="mt-1 w-full px-4 py-2 border border-gray-300 bg-white bg-opacity-80 backdrop-blur-md rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn btn-primary px-6 py-2 text-white font-medium rounded-md hover:shadow-md hover:scale-105 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
