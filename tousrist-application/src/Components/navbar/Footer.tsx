import React from 'react';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { RxCross1 } from 'react-icons/rx'; // Assuming RxCross1 is the closest match for "X" in react-icons
import Logo from '@/assets/Logo.png';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-20 text-black py-12 md:py-24">
      <div className="container mx-auto px-4">
        {/* Footer Logo */}
        <div className="text-center mb-8 md:mb-12">
         <Link to ="/">
            <img
              src={Logo}
              alt="Discover Ireland"
              className="mx-auto mb-4 w-24 h-24 md:w-32 md:h-32"  // Adjusted size for responsiveness
            />
          </Link>
        </div>

        {/* Main Footer Links */}
        <div className="flex flex-wrap justify-center mb-8 md:mb-12">
          <ul className="flex flex-wrap justify-center gap-4 md:gap-10 text-sm md:text-base">
           
              <li  className="list-none">
               <Link to ="/" className='hover:underline'>Home</Link>
              </li>
              <li  className="list-none">
               <Link to ="/destinations" className='hover:underline'>Destinations</Link>
              </li>
              <li  className="list-none">
               <Link to ="/cultural-experiences" className='hover:underline'> Cultural Experiences</Link>
              </li>
              <li  className="list-none">
               <Link to ="/travel-tips" className='hover:underline'>
               Travel Tips
               </Link>
              </li>
              <li  className="list-none">
               <Link to ="/contact-us" className='hover:underline'>Contact Us</Link>
              </li>
              <li  className="list-none">
                <Link to ="/" className='hover:underline'>About Us</Link>
              </li>
              <li  className="list-none">
                <Link to ="/" className='hover:underline'>Privacy Policy</Link>
              </li>
              <li  className="list-none">
                <Link to ="/" className='hover:underline'>Terms of Service</Link>
              </li>
    
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-8 md:mb-12">
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebookF className="h-6 w-6 md:h-8 md:w-8 hover:text-primary-500 transition-colors duration-300" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <RxCross1 className="h-6 w-6 md:h-8 md:w-8 hover:text-primary-500 transition-colors duration-300" /> {/* This is the "X" icon */}
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedinIn className="h-6 w-6 md:h-8 md:w-8 hover:text-primary-500 transition-colors duration-300" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="h-6 w-6 md:h-8 md:w-8 hover:text-primary-500 transition-colors duration-300" />
          </a>
        </div>

        {/* Copyright Notice */}
        <div className="text-center text-sm md:text-base">
          <p>© Discover Ireland, 2024. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
