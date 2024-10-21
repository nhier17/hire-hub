import axios from 'axios';

export const base_url = 'https://hire-hub-api-stkl.onrender.com'

//get jobs
export const getJobs = async () => {
    try {
        const response = await axios.get(`${base_url}/api/jobs`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

//apply for a job
export const applyForJob = async (jobId, userId) => {
    try {
        const response = await axios.post(`${base_url}/api/apply`, { userId });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

//get job by id

export const getJobById = async (jobId) => {
    try {
        const response = await axios.get(`${base_url}/api/jobs/${jobId}`);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}