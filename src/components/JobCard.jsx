import React from 'react';

const JobCard = ({ job, onSelect, isActive }) => {
  // Function to calculate time difference and format it as "hours ago", "days ago", etc.
  const timeSincePosted = (datePosted) => {
    const now = new Date();
    const postedDate = new Date(datePosted);
    const diffInMs = now - postedDate;
    
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInWeeks = Math.floor(diffInDays / 7);

    if (diffInHours < 24) {
      return `${diffInHours} hour${diffInHours !== 1 ? 's' : ''} ago`;
    } else if (diffInDays < 7) {
      return `${diffInDays} day${diffInDays !== 1 ? 's' : ''} ago`;
    } else {
      return `${diffInWeeks} week${diffInWeeks !== 1 ? 's' : ''} ago`;
    }
  };

  return (
    <div
      onClick={() => onSelect(job)}
      className={`cursor-pointer p-4 bg-white shadow hover:shadow-md transition-shadow rounded-lg ${
        isActive ? 'border-l-4 border-blue-500' : ''
      }`}
    >
      <div className="flex items-center gap-3">
        <div className="bg-gray-200 px-6 py-4 rounded-lg flex items-center justify-center">
          {job.companyLogo ? (
            <img
              src={job.companyLogo}
              alt={`${job.company} Logo`}
              className="h-16 w-16 rounded-full object-cover"
            />
          ) : (
            <p className="text-xl font-bold text-gray-700">{job.company.charAt(0)}</p>
          )}
        </div>
        <div>
          <h2 className="text-lg font-semibold text-blue-500">{job.title}</h2>
          <h3 className="text-gray-600">{job.company}</h3>
          <p className="text-gray-500 mt-1">{job.location}</p>
          <p className="text-gray-500 text-sm mt-2">{job.salary}</p>
          <p className="text-green-700 text-sm mt-2">
            {timeSincePosted(job.date_posted)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
