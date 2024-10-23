import React, { useState, useEffect } from 'react';
import { JobCard, JobDetails, LoaderSpinner } from '../components';
import { getJobs } from '../api';
import { FaArrowLeft } from "react-icons/fa";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getJobs();
        setJobs(data);
        if(data.length > 0) {
          setSelectedJob(data[0]);
        }
      } catch (error) {
        console.error('Error fetching jobs:', error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  const handleBackToJobs = () => {
    setSelectedJob(null); 
  };

  return (
    <div className="container mx-auto px-4 h-screen flex flex-col lg:flex-row">
      <div className={`w-full lg:w-2/3 lg:pr-4 overflow-y-auto ${selectedJob ? 'hidden lg:block' : 'block'}`}>
        <h1 className="text-2xl font-semibold mb-6">Top Job Picks for You</h1>
        {isLoading ? (
          <LoaderSpinner />
        ) : (
          <div className="flex flex-col gap-4">
            {jobs.length > 0 ? (
              jobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  onSelect={handleJobSelect}
                  isActive={selectedJob && selectedJob.id === job.id}
                />
              ))
            ) : (
              <div className="text-center text-gray-600">No jobs available.</div>
            )}
          </div>
        )}
      </div>

      <div className={`w-full lg:w-1/3 lg:pl-4 lg:border-l border-gray-200 ${selectedJob ? 'block' : 'hidden lg:block'}`}>
        {selectedJob ? (
          <div>
            <button
              className="lg:hidden  mb-4"
              onClick={handleBackToJobs}
            >
              <FaArrowLeft className="size-5" /> 
            </button>
            <JobDetails {...selectedJob} />
          </div>
        ) : (
          <div className="text-center text-gray-600">Select a job to see details.</div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
