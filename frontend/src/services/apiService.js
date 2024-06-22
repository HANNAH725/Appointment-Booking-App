// src/services/apiService.js

import axios from 'axios';
import { BASE_URL, token } from '../config';

const fetchUserData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/user/profile`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error fetching user data:', error);
  }
};

export default fetchUserData;
