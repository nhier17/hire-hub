import React from 'react';
import hero from '../assets/hero.jpeg';
import { motion } from 'framer-motion';
import { posts } from '../constants';
import PostCard from './PostCard';

const Hero = () => {
  return (
    <div className="flex-1 max-w-2xl">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between py-12">
        <motion.div
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Find Your Dream Job
          </h2>
          <p className="text-base md:text-lg text-gray-600 mb-6">
            HireHub is the platform where businesses and professionals connect. We help you find your dream job and help businesses find top talent. Let's build your career and make an impact together.
          </p>
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
            className="w-full rounded-lg shadow-lg object-cover"
          />
        </motion.div>
      </div>

      {/* Posts Section */}
      <section className="flex flex-col space-y-6">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
};

export default Hero;
