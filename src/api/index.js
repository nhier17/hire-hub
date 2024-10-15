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
