import axios from 'axios';

export const base_url = 'https://hire-hub-api-stkl.onrender.com'

//get jobs
export const getJobs = async ({ search = '', location = '', company = '', page = 1, per_page = 10 } = {}) => {
    try {
        const response = await axios.get(`${base_url}/api/jobs`, {
            params: { search, location, company, page, per_page }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching jobs:', error);
        return { jobs: [], total: 0, pages: 1, current_page: 1 };
    }
};


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