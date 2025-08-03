// src/App.jsx
import React, { useState } from 'react';
import Search from './components/Search';
import { fetchUserData } from './services/githubServices';

const App = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Called by Search component on form submit with username
  const handleSearch = async (username) => {
    setLoading(true);
    setError(null);
    setUserData(null);

    try {
      const data = await fetchUserData(username);
      setUserData(data);
    } catch (err) {
      setError('Looks like we can’t find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', fontFamily: 'Arial, sans-serif', padding: 20 }}>
      <h1>GitHub User Search</h1>
      <Search onSearch={handleSearch} />

      {loading && <p>Loading...</p>}

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {userData && (
        <div style={{ marginTop: 20 }}>
          <img
            src={userData.avatar_url}
            alt={`${userData.login} avatar`}
            width={100}
            height={100}
            style={{ borderRadius: '50%' }}
          />
          <h2>{userData.name || userData.login}</h2>
          <p>
            <a href={userData.html_url} target="_blank" rel="noopener noreferrer">
              View GitHub Profile
            </a>
          </p>
          {userData.bio && <p>{userData.bio}</p>}
          <p>
            Followers: {userData.followers} | Following: {userData.following}
          </p>
          <p>Public Repos: {userData.public_repos}</p>
        </div>
      )}
    </div>
  );
};

export default App;


