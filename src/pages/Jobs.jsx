import React, { useState, useEffect } from 'react';
import { JobCard, JobDetails, LoaderSpinner }  from '../components';
import { getJobs } from '../api';

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isLoading, setIsLoading] = useState(false);


  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getJobs()
        setJobs(data);
        if (data.length > 0) {
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

  return (
    <div className="container mx-auto px-4 pt-20 flex h-screen">
      <div className="w-full lg:w-2/3 pr-4 overflow-y-auto">
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

      <div className="hidden lg:block lg:w-1/3 pl-4 overflow-y-auto border-l border-gray-200">
        {selectedJob ? (
          <JobDetails {...selectedJob} />
        ) : (
          <div className="text-center text-gray-600">Select a job to see details.</div>
        )}
      </div>
    </div>
  );
};

export default Jobs;
