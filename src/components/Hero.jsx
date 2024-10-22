import React from 'react'
import hero from '../assets/hero.jpeg';
import { FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { posts } from '../constants';
import PostCard from './PostCard';



const Hero = () => {
  return (
    <div className="container px-4 pt-20 mx-auto">
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
          
          <motion.div className="flex gap-2">
            <button className="px-4 py-3 bg-blue-500 text-white rounded-md shadow hover:bg-blue-500 transition">
              Sign Up
            </button>
            <button className="px-4 py-3 bg-green-600 text-white rounded-md shadow hover:bg-green-700 transition">
              Log In
            </button>
            <button className="px-4 py-3 bg-gray-600 text-white rounded-md shadow hover:bg-gray-700 transition">
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

      <section className="flex flex-col">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
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