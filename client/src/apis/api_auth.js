import axios from 'axios';
import { BASE_URL } from './api';

const API_URL = `${BASE_URL}/api/auth`;

const apiAuth = {
  /**
   * Sign up a new user.
   * @param {Object} user - The user object with email and password.
   * @returns {Promise} - The response from the API.
   */
  signUp: async (user) => {
    try {
      const response = await axios.post(`${API_URL}/sign-up`, user);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  },

  /**
   * Sign in an existing user.
   * @param {string} email - The user's email.
   * @param {string} password - The user's password.
   * @returns {Promise} - The JWT token if successful.
   */
  signIn: async (email, password) => {
    try {
      const response = await axios.post(`${API_URL}/sign-in`, { email, password });
      localStorage.setItem("tokenAuth", response.data.token);
      return response.data;
    } catch (error) {
      throw error.response ? error.response.data : error;
    }
  }
};

export default apiAuth;