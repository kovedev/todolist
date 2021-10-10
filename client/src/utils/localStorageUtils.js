const prefix = 'event-data';

export const getStorageItem = (key) => {
  return JSON.parse(localStorage.getItem(buildStorageKey(key))) || '';
};

export const setStorageItem = (key, value) => {
  value = JSON.stringify(value);
  localStorage.setItem(buildStorageKey(key), value);
};

const buildStorageKey = (key) => {
  return [prefix, key].join(':');
};