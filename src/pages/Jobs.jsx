import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { JobCard, JobDetails, LoaderSpinner } from '../components';
import { getJobs } from '../api';
import { FaArrowLeft } from "react-icons/fa";
import { useStateContext } from '../contexts/ContextProvider';

const Jobs = () => {
  const navigate = useNavigate();
  const { userInfo } = useStateContext();
  const [jobs, setJobs] = useState([]);
  const [selectedJob, setSelectedJob] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchData, setSearchData] = useState({
    search: '',
    location: '',
    company: '',
  });
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  useEffect(() => {
  const fetchData = async (queryParams = {}) => {
    setIsLoading(true);
    try {
      const data = await getJobs({ ...queryParams, page });
      setJobs(data.jobs);
      setTotalPages(data.pages);
      if (data.jobs.length > 0) {
        setSelectedJob(data.jobs[0]);
      }
    } catch (error) {
      console.error('Error fetching jobs:', error);
    } finally {
      setIsLoading(false);
    }
  };
  fetchData({ ...searchData });
}, [page, searchData]);


    if (!userInfo) {
      navigate("/login");
    }

 

  const handleInput = (e) => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
  };

  const handleJobSelect = (job) => {
    setSelectedJob(job);
  };

  const handleBackToJobs = () => {
    setSelectedJob(null);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setPage(1);
  };

  const goToPage = (pageNum) => {
    setPage(pageNum);
  };

  const generatePageNumbers = () => {
    const pages = [];
    const startPage = Math.max(1, page - 2);
    const endPage = Math.min(totalPages, page + 2);

    if (startPage > 1) pages.push(1);
    if (startPage > 2) pages.push("...");

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    if (endPage < totalPages - 1) pages.push("...");
    if (endPage < totalPages) pages.push(totalPages);

    return pages;
  };

  return (
    <div className="container mx-auto px-4 h-screen flex flex-col lg:flex-row">
      <div className={`w-full lg:w-2/3 lg:pr-4 overflow-y-auto ${selectedJob ? 'hidden lg:block' : 'block'}`}>
        <h1 className="text-2xl font-semibold mb-6">Top Job Picks for You</h1>

        <form onSubmit={handleSearch} className="mb-4 flex gap-2">
          <input
            type="text"
            name="search"
            placeholder="Title, location, company"
            value={searchData.search}
            onChange={handleInput}
            className="border p-2 rounded"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">Search</button>
        </form>

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

<div className="mt-4 flex justify-center space-x-2">
          {generatePageNumbers().map((pageNum, index) => (
            <button
              key={index}
              onClick={() => typeof pageNum === 'number' && goToPage(pageNum)}
              disabled={pageNum === page || pageNum === "..."}
              className={`p-2 ${pageNum === page ? 'bg-black-1 text-white' : 'bg-gray-200 text-gray-700'} rounded-full`}
            >
              {pageNum}
            </button>
          ))}
        </div>
      </div>

      <div className={`w-full lg:w-1/3 lg:pl-4 lg:border-l border-gray-200 ${selectedJob ? 'block' : 'hidden lg:block'}`}>
        {selectedJob ? (
          <div>
            <button className="lg:hidden mb-4" onClick={handleBackToJobs}>
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
