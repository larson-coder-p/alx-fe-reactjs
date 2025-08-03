import React, { useState } from 'react';
import Search from './components/Search';
import { searchUsersAdvanced } from './services/githubService';

const App = () => {
  const [users, setUsers] = useState([]);
  const [searchParams, setSearchParams] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);

  const performSearch = async (params, nextPage = 1, append = false) => {
    setLoading(true);
    setError(null);

    try {
      const data = await searchUsersAdvanced({ ...params, page: nextPage });
      const newUsers = data.items || [];
      
      setUsers((prev) => (append ? [...prev, ...newUsers] : newUsers));
      setHasMore(newUsers.length === 30); // GitHub API default per_page is 30
      setPage(nextPage);
    } catch (err) {
      setError('Failed to fetch users.');
      setUsers([]);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (params) => {
    setSearchParams(params);
    performSearch(params, 1, false);
  };

  const handleLoadMore = () => {
    if (!loading && hasMore && searchParams) {
      performSearch(searchParams, page + 1, true);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 font-sans">
      <h1 className="text-3xl font-bold mb-6 text-center">GitHub User Search</h1>

      <Search onSearch={handleSearch} />

      {loading && <p className="text-center mt-4 text-gray-600">Loading...</p>}

      {error && <p className="text-center mt-4 text-red-600">{error}</p>}

      <ul className="divide-y divide-gray-300 mt-6">
        {users.map((user) => (
          <li key={user.id} className="flex items-center py-4 space-x-4">
            <img
              src={user.avatar_url}
              alt={`${user.login} avatar`}
              className="w-16 h-16 rounded-full"
              loading="lazy"
            />
            <div className="flex flex-col flex-1">
              <a
                href={user.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl font-semibold text-blue-700 hover:underline"
              >
                {user.login}
              </a>
              {user.location && <p className="text-gray-600">Location: {user.location}</p>}
              {/* Note: user.location may be null since Search API doesn't return location; see note below */}
              <p className="text-gray-600">
                Repositories: {user.public_repos !== undefined ? user.public_repos : 'N/A'}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {hasMore && !loading && (
        <div className="text-center mt-8">
          <button
            onClick={handleLoadMore}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default App;



