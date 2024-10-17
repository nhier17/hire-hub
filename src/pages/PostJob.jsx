import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import CustomInput, { FormFieldType } from '../components/CustomInput'; 
import { base_url } from '../api'; 
import { CiCalendar } from "react-icons/ci";
import axios from 'axios';

const PostJob = () => {
  const navigate = useNavigate();
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [location, setLocation] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [skillsRequired, setSkillsRequired] = useState('');
  const [salary, setSalary] = useState('');
  const [employmentType, setEmploymentType] = useState('');
  const [applicationDeadline, setApplicationDeadline] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const formattedDeadline = new Date(applicationDeadline).toISOString();

    const jobData = new FormData();
    jobData.append('title', jobTitle);
    jobData.append('company', companyName);
    jobData.append('location', location);
    jobData.append('description', jobDescription);
    jobData.append('skills_required', skillsRequired);
    jobData.append('employment_type', employmentType);
    jobData.append('salary', salary); 
    jobData.append('application_deadline', formattedDeadline);

    try {
      const response = await axios.post(`${base_url}/api/jobs`, jobData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });

      if (response.data) {
        toast.success('Job posted successfully!');
        navigate('/jobs');
      } else {
        toast.error('Failed to post the job');
      }
    } catch (error) {
      console.error('Error posting job', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <div className="max-w-3xl mx-auto px-4 py-8 pt-20">
        <h2 className="text-2xl font-semibold text-gray-700 text-center mb-6">Post a New Job</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
            <label className="block text-gray-700 font-medium my-2">Job Title
          <CustomInput
            fieldType={FormFieldType.INPUT}
            label="Job Title"
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            required
          />
          </label>
          <label className="block text-gray-700 font-medium my-2">Company Name
          <CustomInput
            fieldType={FormFieldType.INPUT}
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            required
          />
          </label>
          <label className="block text-gray-700 font-medium my-2">Job location
          <CustomInput
            fieldType={FormFieldType.INPUT}
            label="Location"
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
          </label>
          <label className="block text-gray-700 font-medium my-2"> Job Description
          <CustomInput
            fieldType={FormFieldType.TEXTAREA}
            type="textarea"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            required
          />
          </label>
          <label className="block text-gray-700 font-medium my-2">Skills Required (comma-separated)
          <CustomInput
            fieldType={FormFieldType.INPUT}
            type="text"
            value={skillsRequired}
            onChange={(e) => setSkillsRequired(e.target.value)}
            required
          />
          </label>
          <label className="block text-gray-700 font-medium my-2">Select Employment Type
          <CustomInput
            fieldType={FormFieldType.SELECT}
            type="select"
            options={[
                {value: 'Select', label: 'Select Employment Type'}, 
                { value: 'Full-time', label: 'Full-time' },
                { value: 'Part-time', label: 'Part-time' },
                { value: 'Contract', label: 'Contract' },
                { value: 'Internship', label: 'Internship' },
              ]}
            value={employmentType}
            placeholder="Employment Type"
            onChange={(e) => setEmploymentType(e.target.value)}
            required
          />
          </label>
          <label className="block text-gray-700 font-medium my-2">Application Deadline
          <CustomInput
            fieldType={FormFieldType.DATE_PICKER}
            type="date"
            value={applicationDeadline}
            onChange={(e) => setApplicationDeadline(e.target.value)}
            dateFormat="MM/dd/yyyy"
            icon={<CiCalendar />}
          />
          </label>
          <label className="block text-gray-700 font-medium my-2">Salary (annualy or monthly)
            <CustomInput
              fieldType={FormFieldType.INPUT}
              type="text"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </label>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            disabled={isLoading}
          >
            {isLoading ? 'Posting...' : 'Post Job'}
          </button>
        </form>
      </div>
  );
};

export default PostJob;
