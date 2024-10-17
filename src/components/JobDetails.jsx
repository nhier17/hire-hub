import React from 'react';
import { FaBriefcase } from "react-icons/fa";
import { HiOutlineLightBulb, HiOutlineDotsHorizontal } from "react-icons/hi";
import { TfiMenuAlt } from "react-icons/tfi";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { BsArrow90DegRight } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const JobDetails = ({ company, title, date_posted, description, location, salary, skills_required, application_deadline, id }) => {
  const navigate = useNavigate();

  const handleApply = () => {
    navigate(`/apply/${id}`);
  }


  return (
    <div className="p-4">
      <div className="flex items-center justify-between gap-2 mb-4">  
        <div className="bg-gray-200 px-4 py-2 rounded-lg">  
          <p className="text-xl font-bold text-gray-700">{company[0]}</p>
        </div>
        <div className="flex-1 flex justify-between items-center">
          <h2 className="text-gray-500 text-lg">{company}</h2>
          <div className="flex items-center gap-4">
            <BsArrow90DegRight className="size-5 text-gray-600" />
            <HiOutlineDotsHorizontal className="size-6 text-gray-600" />
          </div>
        </div>
      </div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
      <div className="flex items-center gap-2 text-gray-700 mb-4">
        <FaBriefcase className="w-5 h-5" />
        <span className="bg-[#DAEBD1] text-sm p-1 rounded-md">{location}</span>
      </div>
      
      <div className="flex items-center gap-2 text-gray-700 mb-4">
        <TfiMenuAlt className="w-6 h-6" />
        <span className="text-sm"><strong>Skills Required:</strong> {skills_required}</span>
      </div>
      
      <div className="flex items-center gap-2 bg-yellow-100 p-3 rounded-lg text-gray-700 mb-4">
        <HiOutlineLightBulb className="w-6 h-6" />
        <span className="text-sm">Curious where you stand? See how you compare to others who clicked apply.</span>
      </div>

      <div className="flex gap-4 mb-6">
        <button className="bg-blue-500 text-white flex items-center gap-2 py-2.5 px-5 rounded-lg hover:bg-blue-700 transition"
        onClick={handleApply}
        >
          Apply Now
          <span><FaArrowUpRightFromSquare /></span>
        </button>
        <button className="bg-gray-100 text-[#0A66c2] px-5 py-2.5 rounded ring-1 ring-blue-500 hover:bg-gray-200 transition">
          Save
        </button>
      </div>
      <h4 className="text-xl font-semibold mb-2">About the Job</h4>
      <p className="text-gray-700 mb-6">{description}</p>
      <h4 className="text-xl font-semibold mb-2">Application Process</h4>
      <p className="text-gray-700 mb-4">If you possess the skills and passion for this role, please apply.</p>
      <p className="text-gray-700"><strong>Application Deadline:</strong> {new Date(application_deadline).toLocaleDateString()}</p>
    </div>
  );
};

export default JobDetails;
