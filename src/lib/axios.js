import axios from 'axios';
import config from '../config';

const token = localStorage.getItem('access_token');
const headers = {};
headers['X-Requested-With'] = 'Labeler Overview Plugin'

if (token) {
  headers['Authorization'] = "Basic " + btoa(token + ":x-auth-token")  
}

var instance = axios.create({baseURL: config.api.url, headers})

export var rails_instance = axios.create({baseURL: config.rails_api.url, headers})

export default instance