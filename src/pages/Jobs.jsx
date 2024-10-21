import React, { useState, useEffect } from 'react';
import { JobCard, JobDetails, LoaderSpinner } from '../components';
import { getJobs } from '../api';
import { FaArrowLeft } from "react-icons/fa";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isViewingDetails, setIsViewingDetails] = useState(false); 

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getJobs();
        setJobs(data);
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
    setIsViewingDetails(true);  
  };

  const handleBackToList = () => {
    setIsViewingDetails(false);  
  };

  return (
    <div className="container mx-auto px-4 pt-20 h-screen">
      {isViewingDetails ? (
        <div className="lg:hidden"> 
           <FaArrowLeft onClick={handleBackToList} className="size-4 mb-8" />
          {selectedJob ? (
            <JobDetails {...selectedJob} />
          ) : (
            <div className="text-center text-gray-600">No job selected.</div>
          )}
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row h-full">
          <div className="w-full lg:w-2/3 lg:pr-4 overflow-y-auto">
            <h1 className="text-2xl font-bold mb-6">Top Job Picks for You</h1>
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

          <div className="hidden lg:block lg:w-1/3 lg:pl-4 lg:border-l border-gray-200">
            {selectedJob ? (
              <JobDetails {...selectedJob} />
            ) : (
              <div className="text-center text-gray-600">Select a job to see details.</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
