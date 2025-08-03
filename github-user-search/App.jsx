import React, { useState } from 'react';
import SearchBar from './components/SearchBar';
import UserList from './components/UserList';
import { searchUsers } from './services/githubApi';

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Callback to perform GitHub user search
  const handleSearch = async (query) => {
    if (!query) {
      setUsers([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const data = await searchUsers(query);
      setUsers(data.items || []); // GitHub API returns results in `items`
    } catch (err) {
      setError('Failed to fetch users. Please try again later.');
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        maxWidth: 700,
        margin: '40px auto',
        fontFamily: 'Arial, sans-serif',
        padding: '20px',
      }}
    >
      <h1>GitHub User Search</h1>

      <SearchBar onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      {error && (
        <p style={{ color: 'red', marginTop: 10 }}>
          {error}
        </p>
      )}

      <UserList users={users} />
    </div>
  );
}

export default App;

