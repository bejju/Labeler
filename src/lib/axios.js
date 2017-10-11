import axios from 'axios';
import config from '../config';

const token = localStorage.getItem('access_token');
const headers = {};

if (token) {
  headers['Authorization'] = "Basic " + btoa(token + ":x-auth-token")
}

var instance = axios.create({baseURL: config.api.url, headers})

export default instance