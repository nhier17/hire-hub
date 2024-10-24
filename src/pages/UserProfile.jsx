import React from 'react';
import { BsBarChartLineFill } from "react-icons/bs";
import { MdOutlineStackedBarChart } from "react-icons/md";
import { FaEye, FaBriefcase, FaArrowRight  } from 'react-icons/fa';
import { avatar } from '../assets';

const UserProfile = () => {

  return (
        <div className="flex-1 max-w-2xl mx-auto md:mx-0">
        <div className="border border-gray-200 bg-white p-4 rounded-lg shadow-md mb-4">
            <div className="flex flex-col">
            <img 
                src="https://www.gstatic.com/webp/gallery/1.webp" 
                alt="logo" 
                className="w-full h-[201px] object-cover rounded-t-md mb-[-60px] md:rounded-none md:rounded-l-md"
            />
            <img
                src={avatar}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover ml-7"
            />
            </div>

            <div className="px-4 flex-1 text-center md:text-left mt-4 md:mt-0">
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
                <h1 className="text-2xl font-bold">Barry Allen</h1>
                <h3 className="font-semibold">LutherCorp</h3>
            </div>
            <p className="text-lg text-gray-700 mb-2">Software Engineer</p>
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start mb-2">
                <p className="text-sm text-gray-400">Nairobi, Nairobi County, Kenya</p>
                <p className="font-semibold">SmallVille</p>
            </div>
        
            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-2">
                <p className="text-blue-400 font-bold text-sm">400 followers</p>
                <p className="text-blue-400 font-bold text-sm">.</p>
                <p className="text-blue-400 font-bold text-sm">500 connections</p>
            </div>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 my-2">
                <button className="bg-blue-700 text-white px-4 py-2 rounded-md">Open to</button>
                <button className="bg-gray-100 text-[#0A66c2] px-4 py-2 rounded-md ring-1 ring-blue-500 hover:bg-gray-200 transition">Add profile section</button>
                <button className="bg-gray-100 text-[#0A66c2] px-4 py-2 rounded-md ring-1 ring-blue-500 hover:bg-gray-200 transition">Resources</button>
            </div>

            <div className="flex flex-col md:flex-row gap-3 my-4">
                <div className="bg-[#DDE7F1] shadow-md rounded-md p-4 w-full md:max-w-xs">
                <h3 className="font-semibold">Open to work</h3>
                <p>Full-stack developer, Front-end developer</p>
                <p className="text-blue-400 font-bold cursor-pointer">Show details</p>
                </div>
                <div className="bg-white shadow-md rounded-md p-4 w-full md:max-w-xs">
                <p>
                    Showcase your services as a section on your profile so your business can be easily discovered.
                </p>
                <p className="text-blue-400 font-bold cursor-pointer">Get Started</p>
                </div>
            </div>
            </div>
        </div>

        <div className="bg-white shadow-md rounded-md p-4 my-3">
        <h3 className="text-2xl font-semibold">Analytics</h3>
        <div className="flex items-center gap-1 text-gray-400 mb-4">
          <FaEye />
          <span>Private to you</span>
        </div>
        <div className="flex items-center justify-around">
          <div className=" flex-col">
          <div className="flex items-center gap-2">
            <MdOutlineStackedBarChart className="w-6 h-6" />
            <span className="text-base font-medium hover:text-blue-500 cursor-pointer">200 profile views</span>
          </div>
          <p className="text-sm px-4">Discover who's viewed your profile</p>
          </div>
          <div className="">
          <div className="flex items-center gap-2">
            <BsBarChartLineFill className="w-6 h-6" />
            <span className="text-base font-medium hover:text-blue-500 cursor-pointer">150 post impressions</span>
          </div>
          <p className="text-sm px-4">Check out who's engaging with your posts</p>
          </div>
        </div>
        <div className="border-t-2 p-2 mt-2 hover:bg-gray-300 cursor-pointer">
          <div className=" flex items-center gap-1  justify-center">
          <p>Show all analytics</p>
            <FaArrowRight />
          </div>
        </div>
        </div>

      {/* About Section */}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="text-gray-700">
          Passionate software engineer with 5+ years of experience in full-stack development, specializing in JavaScript, React, Node.js, and cloud services. Excels in designing scalable systems and delivering high-quality software solutions. Constantly learning and adapting to new technologies to solve complex problems.
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Experience</h2>
        <div className="space-y-6">
          {/* Experience Item */}
          <div className="flex gap-4 items-start">
            <FaBriefcase  className="w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold">Software Engineer</h3>
              <p className="text-gray-600">Tech Company | Jan 2020 - Present</p>
              <p className="text-gray-700">
                Leading the development of a cloud-based web application used by millions. Implementing new features, optimizing performance, and collaborating with cross-functional teams.
              </p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <FaBriefcase className="w-12 h-12" />
            <div>
              <h3 className="text-xl font-semibold">Frontend Developer</h3>
              <p className="text-gray-600">Another Tech Company | May 2018 - Dec 2019</p>
              <p className="text-gray-700">
                Built and maintained the company's customer-facing website using React and Redux. Worked closely with designers to deliver a seamless user experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6">
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        <div className="flex gap-4 items-start">
          <FaBriefcase  />
          <div>
            <h3 className="text-xl font-semibold">Bachelor of Science in Computer Science</h3>
            <p className="text-gray-600">University of California, Berkeley | 2014 - 2018</p>
            <p className="text-gray-700">
              Specialized in software engineering, with a focus on data structures, algorithms, and full-stack web development.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-4 md:mx-8 mb-6 p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">React.js</span>
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">Next.js</span>
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">JavaScript</span>
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">Node.js</span>
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">TypeScript</span>
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-full text-sm">MongoDB</span>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Recommendations</h2>
        <div className="space-y-4">
          <div className="border-t pt-4">
            <p className="text-gray-700">
              "John is a highly skilled engineer with a great work ethic. He consistently delivers high-quality code and is always willing to go the extra mile."
            </p>
            <p className="text-gray-600 mt-2">- Jane Smith, Tech Lead at Tech Company</p>
          </div>
          <div className="border-t pt-4">
            <p className="text-gray-700">
              "John has been a fantastic teammate. His technical abilities are top-notch, and he is a great mentor to junior developers."
            </p>
            <p className="text-gray-600 mt-2">- Tom Johnson, Senior Developer at Another Tech Company</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
