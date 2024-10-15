import React, { createContext, useContext, useState } from 'react';

const JobsContext = createContext();

export const ContextProvider = ({ children }) => {
    const [userInfo, setUserInfo] = useState(null)
    const [jobs, setJobs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    return (
        <JobsContext.Provider value={{ 
            jobs,
            setJobs,
            isLoading, 
            setIsLoading, 
            searchTerm, 
            setSearchTerm, 
            userInfo,
            setUserInfo
            }}>
            {children}
        </JobsContext.Provider>
    );

};

export const useStateContext = () => useContext(JobsContext)