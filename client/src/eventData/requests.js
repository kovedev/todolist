import axios from 'axios';
import { config } from '../utils/config';

export const fetchEventData = (accessToken) => {
  return axios.get('https://opendata.hopefully.works/api/events', {
    headers: {
      'Authorization': `Bearer ${accessToken}`,
    },
  });
};

export const fetchEventHistoryData = () => {
  return axios.get('/api/event-history-data');
};

export const saveEventData = (payload) => {
  return axios.post('/api/event-history-data', payload, config);
};
