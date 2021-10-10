import { createSlice } from '@reduxjs/toolkit';
import { LOGIN, SIGNUP, ACCESS_TOKEN_NOT_FOUND, RECEIVE_ACCESS_TOKEN } from './types';
import { setStorageItem, getStorageItem } from '../utils/localStorageUtils';

const initialState = {
  email: getStorageItem('email'),
  accessToken: getStorageItem('accessToken'),
  isFetching: false,
  errorMessage: '',
};

const countSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
  },
  extraReducers: {
    [LOGIN]: (state) => {
      state.isFetching = true;
    },
    [SIGNUP]: (state) => {
      state.isFetching = true;
    },
    [ACCESS_TOKEN_NOT_FOUND]: (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
    },
    [RECEIVE_ACCESS_TOKEN]: (state, action) => {
      setStorageItem('accessToken', action.payload.accessToken);
      setStorageItem('email', action.payload.email);
      state.isFetching = false;
      state.accessToken = action.payload.accessToken;
      state.email = action.payload.email;
    },
  }
});

export default countSlice.reducer;