import { createSlice } from '@reduxjs/toolkit';
import {
  FETCH_EVENT_DATA,
  RECEIVE_EVENT_DATA,
  EVENT_DATA_NOT_FOUND,
  SAVE_EVENT_DATA,
  FETCH_EVENT_HISTORY_DATA,
  RECEIVE_EVENT_HISTORY_DATA,
  EVENT_HISTORY_DATA_NOT_FOUND,
} from './types';

const initialState = {
  isFetchingEventData: false,
  isFetchingEventHistoryData: false,
  eventData: null,
  eventHistoryData: null,
};

const eventDataSlice = createSlice({
  name: 'event-data',
  initialState,
  reducers: {
  },
  extraReducers: {
    [FETCH_EVENT_DATA]: (state, action) => {
      state.isFetchingEventData = true;
    },
    [EVENT_DATA_NOT_FOUND]: (state, action) => {
      state.isFetchingEventData = false;
    },
    [RECEIVE_EVENT_DATA]: (state, action) => {
      state.isFetchingEventData = false;
      state.eventData = action.payload;
    },
    [SAVE_EVENT_DATA]: (state, action) => {
      state.isFetchingEventHistoryData = true;
    },
    [FETCH_EVENT_HISTORY_DATA]: (state, action) => {
      state.isFetchingEventHistoryData = true;
    },
    [EVENT_HISTORY_DATA_NOT_FOUND]: (state, action) => {
      state.isFetchingEventHistoryData = false;
    },
    [RECEIVE_EVENT_HISTORY_DATA]: (state, action) => {
      state.isFetchingEventHistoryData = false;
      state.eventHistoryData = action.payload;
    },
  }
});

export default eventDataSlice.reducer;