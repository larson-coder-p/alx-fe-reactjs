import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com';

const githubToken = import.meta.env.VITE_APP_GITHUB_API_KEY;

// Create Axios instance with optional authorization header
const api = axios.create({
  baseURL: GITHUB_API_URL,
  headers: githubToken
    ? {
        Authorization: `token ${githubToken}`,
      }
    : {},
});

/**
 * Search GitHub users by query string
 * @param {string} query
 * @returns {Promise<Object>} Search result from GitHub API
 */
export async function searchUsers(query) {
  const response = await api.get('/search/users', {
    params: { q: query },
  });
  return response.data;
}
