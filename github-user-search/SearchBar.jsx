import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  // Optionally debounce or throttle searches here if needed

  const handleChange = (e) => {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <input
      type="text"
      placeholder="Search GitHub users..."
      value={query}
      onChange={handleChange}
      style={{
        width: '100%',
        padding: '10px',
        fontSize: '1rem',
        marginBottom: '20px',
        boxSizing: 'border-box',
      }}
      aria-label="GitHub username search input"
    />
  );
};

export default SearchBar;
