// src/components/Search.jsx
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState('');
  const [minRepos, setMinRepos] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch({ username, location, minRepos });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-xl mx-auto p-6 bg-white rounded-lg shadow-lg grid gap-6 grid-cols-1 sm:grid-cols-3 items-end"
      aria-label="Advanced GitHub user search form"
    >
      {/* Username Field */}
      <div className="flex flex-col">
        <label htmlFor="username" className="mb-1 font-medium text-gray-700">
          Username
        </label>
        <input
          id="username"
          type="text"
          placeholder="e.g. octocat"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          autoComplete="off"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          aria-describedby="username-help"
        />
        <small id="username-help" className="text-gray-400 mt-1 text-sm">
          Search by GitHub username or keywords
        </small>
      </div>

      {/* Location Field */}
      <div className="flex flex-col">
        <label htmlFor="location" className="mb-1 font-medium text-gray-700">
          Location
        </label>
        <input
          id="location"
          type="text"
          placeholder="e.g. San Francisco"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          autoComplete="off"
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          aria-describedby="location-help"
        />
        <small id="location-help" className="text-gray-400 mt-1 text-sm">
          Optional: filter users by location
        </small>
      </div>

      {/* Minimum Repositories Field */}
      <div className="flex flex-col">
        <label htmlFor="minRepos" className="mb-1 font-medium text-gray-700">
          Min. Repositories
        </label>
        <input
          id="minRepos"
          type="number"
          min="0"
          placeholder="e.g. 10"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder-gray-400"
          aria-describedby="minRepos-help"
        />
        <small id="minRepos-help" className="text-gray-400 mt-1 text-sm">
          Optional: minimum number of public repositories
        </small>
      </div>

      {/* Submit Button (full width on small screens) */}
      <button
        type="submit"
        className="sm:col-span-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-md py-3 mt-2 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-400 shadow-lg"
        aria-label="Search GitHub users"
      >
        Search
      </button>
    </form>
  );
};

export default Search;




