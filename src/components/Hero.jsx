import React from 'react'
import hero from '../assets/hero.jpeg';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';



const Hero = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
    <div className="flex flex-col-reverse md:flex-row items-center justify-between px-6 py-12 max-w-6xl">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Find Your Dream Job</h2>
          <p className="text-lg text-gray-600 mb-6">
            HireHub is the platform where businesses and professionals connect. We help you find your dream job and help businesses find top talent. Let's build your career and make an impact together.
          </p>
          
          <motion.div className="flex space-x-4">
            <button className="px-6 py-3 bg-blue-500 text-white rounded-md shadow hover:bg-blue-500 transition">
              Sign Up
            </button>
            <button className="px-6 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition">
              Log In
            </button>
            <button className="px-6 py-3 bg-gray-600 text-white rounded-md shadow hover:bg-gray-700 transition">
              Browse Jobs
            </button>
          </motion.div>
        </motion.div>

        <motion.div
          className="w-full md:w-1/2 mb-8 md:mb-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={hero}
            alt="Hero"
            className="w-full rounded-lg shadow-lg"
          />
        </motion.div>
      </div>

      <section className="bg-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl font-semibold text-gray-800 mb-8">Featured Jobs</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              className="bg-gray-100 p-6 rounded-lg shadow-md"
              whileHover={{ scale: 1.05 }}
            >
              <h4 className="text-xl font-bold text-gray-800 mb-2">Software Engineer</h4>
              <p className="text-gray-600 mb-1"><strong>Company:</strong> TechCorp</p>
              <p className="text-gray-600 mb-3"><strong>Location:</strong> New York, NY</p>
              <p className="text-gray-700 mb-4">Develop and maintain web applications using Python and Flask.</p>
              <Link className="text-blue-600 hover:underline">View Details</Link>
            </motion.div>
          </div>
        </div>
      </section>

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
    </div>
  )
}

export default Hero