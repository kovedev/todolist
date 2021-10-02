import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json'
  },
};

export const signUp = (payload) => {
  return axios.post('https://opendata.hopefully.works/api/signup', payload, config);
};

export const login = (payload) => {
  return axios.post('https://opendata.hopefully.works/api/login', payload, config);
};