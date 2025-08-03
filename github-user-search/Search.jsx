// src/components/Search.jsx
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() !== '') {
      onSearch(username.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: '8px', width: '300px', marginRight: '10px' }}
        aria-label="GitHub username input"
      />
      <button type="submit" style={{ padding: '8px 16px' }}>
        Search
      </button>
    </form>
  );
};

export default Search;
