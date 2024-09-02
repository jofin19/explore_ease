import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData); // For now, we'll just log the form data
  };

  return (
    <section className="py-20 mt-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-primary-600 mb-8 text-center">Contact Us</h2>
        <p className="text-lg text-primary-500 mb-12 text-center">
          We're here to help! Please fill out the form below to reach us.
        </p>
        
        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-primary-100 p-8 rounded-lg shadow-lg mb-12">
          <div className="mb-6">
            <label htmlFor="name" className="block text-primary-600 font-semibold mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-primary-600 font-semibold mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-primary-600 font-semibold mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border border-primary-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
              rows={5}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-primary-500 text-white py-2 rounded-md hover:bg-primary-600 transition-colors duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Information */}
        <div className="flex flex-wrap justify-around mb-12">
          <div className="flex items-center mb-6">
            <FaPhone className="text-primary-500 text-3xl mr-4" />
            <p className="text-primary-600 font-semibold">+1 234 567 890</p>
          </div>
          <div className="flex items-center mb-6">
            <FaEnvelope className="text-primary-500 text-3xl mr-4" />
            <p className="text-primary-600 font-semibold">info@exploreease.com</p>
          </div>
          <div className="flex items-center mb-6">
            <FaMapMarkerAlt className="text-primary-500 text-3xl mr-4" />
            <p className="text-primary-600 font-semibold">123 Travel Lane, Dublin, Ireland</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="text-primary-500 text-3xl hover:text-primary-600 transition-colors duration-300" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-primary-500 text-3xl hover:text-primary-600 transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="text-primary-500 text-3xl hover:text-primary-600 transition-colors duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
