// src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com/search/users';

const githubToken = import.meta.env.VITE_APP_GITHUB_API_KEY;

const api = axios.create({
  baseURL: BASE_URL,
  headers: githubToken
    ? { Authorization: `token ${githubToken}` }
    : {},
});

/**
 * Search GitHub users with advanced filters
 * @param {Object} params { username, location, minRepos }
 * @returns {Promise<Object>} GitHub API search result
 */
export async function searchUsersAdvanced({ username, location, minRepos }) {
  // Build query string parts
  let query = '';

  if (username) query += `${username}`;

  if (location) query += ` location:${location}`;

  if (minRepos && !isNaN(Number(minRepos))) query += ` repos:>=${Number(minRepos)}`;

  // Trim and encode query string
  query = query.trim();

  if (!query) {
    // No search criteria, return empty result
    return { items: [] };
  }

  const response = await api.get('', {
    params: { q: query, per_page: 30 },
  });

  return response.data;
}



