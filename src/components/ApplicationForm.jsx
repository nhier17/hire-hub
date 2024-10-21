import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import axios from 'axios';
import { base_url } from '../api';
import { toast } from 'react-hot-toast';
import CustomInput, { FormFieldType } from './CustomInput';
import { getJobById } from '../api';

const ApplicationForm = () => {
const navigate = useNavigate();
const { id } = useParams();

const [fullName, setFullName] = useState('');
const [email, setEmail] = useState('');
const [phoneNumber, setPhoneNumber] = useState('');
const [portfolio, setPortfolio] = useState('');
const [countryOfResidence, setCountryOfResidence] = useState('');
const [noticePeriod, setNoticePeriod] = useState('');
const [salaryExpectation, setSalaryExpectation] = useState('');
const [yearsOfExperience, setYearsOfExperience] = useState('');
const [coverLetter, setCoverLetter] = useState('');
const [resume, setResume] = useState(null);

const [message, setMessage] = useState('');
const [error, setError] = useState('');
const [isLoading, setIsLoading] = useState(false);
const [activeTab, setActiveTab] = useState('Overview'); 
const [description, setDescription] = useState('');

useEffect(() => {
const getJob = async () => {
try {
const job = await getJobById(id);
setDescription(job.description);

} catch (error) {
console.error(error);
}
}
getJob();

}, [id]);

const handleFileChange = (e) => {
setResume(e.target.files[0]);
};

const handleSubmit = async (e) => {
e.preventDefault();
setIsLoading(true);
setMessage('');
setError('');

const token = localStorage.getItem('token'); 
if (!token) {
  navigate('/login');
  return;
}

if (!fullName || !email || !phoneNumber || !countryOfResidence || !noticePeriod || !salaryExpectation || !yearsOfExperience || !resume) {
  setError('Please fill in all required fields.');
  setIsLoading(false);
  return;
}

const formData = new FormData();
formData.append('job_id', id);
formData.append('full_name', fullName);
formData.append('email', email);
formData.append('phone_number', phoneNumber);
formData.append('portfolio', portfolio);
formData.append('country_of_residence', countryOfResidence);
formData.append('notice_period', noticePeriod);
formData.append('salary_expectation', salaryExpectation);
formData.append('years_of_experience', yearsOfExperience);
formData.append('cover_letter', coverLetter);
formData.append('resume', resume);

try {
  const response = await axios.post(`${base_url}/api/apply`, formData, {
      headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
      },
  });

  if (response.status === 201) {
      setMessage('Application submitted successfully!');
      toast.success('Application submitted!');
      navigate('/jobs');
  } else {
      setError('Failed to submit application.');
  }
} catch (error) {
  setError(error.response?.data?.message || 'An error occurred while submitting your application.');
} finally {
  setIsLoading(false);
}
};

return (
<div className="max-w-3xl mx-auto shadow-lg rounded-lg p-8 pt-20">
  <div className="flex gap-2 shadow-md rounded-md p-4 mb-4">
      <button 
          className={`px-4 py-2 font-medium rounded ${activeTab === 'Overview' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setActiveTab('Overview')}
      >
          Overview
      </button>
      <button 
          className={`px-4 py-2 font-medium rounded ${activeTab === 'Application' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
          onClick={() => setActiveTab('Application')}
      >
          Application
      </button>
  </div>

  {activeTab === 'Overview' && (
      <div className="p-4 bg-white rounded-md shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Job Overview</h2>
          <p className="text-gray-700">
            {description}
          </p>
      </div>
  )}

  {activeTab === 'Application' && (
      <div>
          {message && <p className="text-green-600 mb-4">{message}</p>}
          {error && <p className="text-red-600 mb-4">{error}</p>}
          
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="space-y-6">
          <div className="grid grid-cols-1 gap-6">
              <div>
                  <label className="block text-gray-700 font-medium">Full Name</label>
                  <span className="text-sm mt-2">Please enter your legal name</span>
                  <CustomInput
                      fieldType={FormFieldType.INPUT}
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Enter your full name"
                      required
                  />
              </div>

              <div>
                  <label className="block text-gray-700 font-medium">Email Address</label>
                  <span className="text-sm mt-2">Please enter a valid email address</span>
                  <CustomInput
                      fieldType={FormFieldType.INPUT}
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                  />
              </div>

                  <div>
              <label className="block text-gray-700 font-medium">Phone Number</label>
              <span className="text-sm mt-2">Please enter a valid phone number</span>
              <CustomInput
              fieldType={FormFieldType.PHONE_INPUT}
              name="phone_number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              />
              </div>

              <div>
              <label className="block text-gray-700 font-medium">Portfolio (Optional)</label>
              <span className="text-sm mt-2">Please enter your portfolio URL (optional)</span>
              <CustomInput
              fieldType={FormFieldType.INPUT}
              type="url"
              value={portfolio}
              onChange={(e) => setPortfolio(e.target.value)}
              placeholder="Enter your portfolio URL"
              />
              </div>

              <div>
              <label className="block text-gray-700 font-medium">Country of Residence</label>
              <span className="text-sm mt-2">Please enter your country of residence</span>
              <CustomInput
              fieldType={FormFieldType.INPUT}
              type="text"
              value={countryOfResidence}
              onChange={(e) => setCountryOfResidence(e.target.value)}
              placeholder="Enter your country of residence"
              required
              />
              </div>

              <div>
              <label className="block text-gray-700 font-medium">Notice period(in days)</label>
              <span className="text-sm mt-2">Please enter your notice period in days</span>
              <CustomInput
              fieldType={FormFieldType.INPUT}
              type="text"
              value={noticePeriod}
              onChange={(e) => setNoticePeriod(e.target.value)}
              placeholder="Enter your notice period"
              required
              />
              </div>

              <div>
              <label className="block text-gray-700 font-medium">Salary Expectation (USD)</label>
              <span className="text-sm mt-2">Please enter your salary expectations</span>
              <CustomInput
              fieldType={FormFieldType.INPUT}
              type="number"
              value={salaryExpectation}
              onChange={(e) => setSalaryExpectation(e.target.value)}
              placeholder="Enter your salary expectation"
              required
              />
              </div>

              <div>
              <label className="block text-gray-700 font-medium">Years of Experience</label>
              <span className="text-sm mt-2">Please select your years of experience</span>
              <CustomInput
              fieldType={FormFieldType.SELECT}
              value={yearsOfExperience}
              onChange={(e) => setYearsOfExperience(e.target.value)}
              required
              options={[
                {value: 'Select Experience', label: 'Select Ecperience'},
                {value: 'Up to 2 years', label: 'Up to 2 years'},
                {value: '3-4 years', label: '3-4 years'},
                {value: '5-9 years', label: '5-9 years'},
                {value: '10+ years', label: '10+ years'},
              ]}

              />
              </div>

              <div>
              <label className="block text-gray-700 font-medium">Cover Letter</label>
              <span className="text-sm mt-2">Please write a brief cover letter</span>

              <CustomInput
              fieldType={FormFieldType.TEXTAREA}
              value={coverLetter}
              onChange={(e) => setCoverLetter(e.target.value)}
              placeholder="Enter your cover letter"
              required
              />
              </div>

              <div>
              <label className="block text-gray-700 font-medium">Upload Resume</label>
              <span className="text-sm mb-2">Please upload your document (preferably as a PDF file)</span>
              <CustomInput
                  fieldType={FormFieldType.INPUT}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange}
                  required
              />
              </div>
              <button 
              type="submit"
              className={`bg-blue-500 text-white flex items-center gap-2 py-2 px-5 rounded-lg hover:bg-blue-600 transition ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isLoading}
              >
              {isLoading ? 'Submitting...' : 'Submit Application'}
              <FaArrowUpRightFromSquare />
              </button>
              </div>
                    </form>
                </div>
              )}
              </div>
);
};

export default ApplicationForm;
