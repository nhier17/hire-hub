import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import React from 'react'

const Footer = () => {
  return (
<footer className="bg-gray-800 text-white py-6">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          <p className="mb-4 md:mb-0">© 2024 HireHub. All rights reserved.</p>
          <div className="flex space-x-4">
            <Link className="hover:text-blue-400 transition">
              <FaFacebook size={24} />
            </Link>
            <Link className="hover:text-blue-400 transition">
              <FaXTwitter size={24} />
            </Link>
            <Link className="hover:text-pink-500 transition">
              <FaInstagram size={24} />
            </Link>
            <Link className="hover:text-blue-600 transition">
              <FaLinkedin size={24} />
            </Link>
          </div>
        </div>
      </footer>
  )
}

export default Footer



 