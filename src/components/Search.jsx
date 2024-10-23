import React from 'react';
import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <div className="">
      <form className="flex items-center w-full max-w-md bg-gradient-to-r from-gray-200 to-gray-100 px-4 py-2 rounded-md">
        <FaSearch className="text-2xl text-gray-600 mr-4"  />
        <input 
        type="text" 
        className="bg-transparent w-full focus:outline-none  text-gray-700"
        placeholder="Search"
        />
      </form>
    </div>
  )
}

export default Search
