// src/services/githubService.js
import axios from 'axios';

// Base URL for GitHub user API endpoint
const BASE_URL = 'https://api.github.com/users/';

/**
 * Fetch GitHub user data by username
 * @param {string} username
 * @returns {Promise<Object>} GitHub user data
 */
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}${username}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      throw new Error('User not found');
    }
    throw new Error('An error occurred while fetching data');
  }
};


