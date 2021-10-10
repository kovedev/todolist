import { createAction } from 'redux-actions';
import {
  FETCH_EVENT_DATA,
  RECEIVE_EVENT_DATA,
  EVENT_DATA_NOT_FOUND,
  SAVE_EVENT_DATA,
  FETCH_EVENT_HISTORY_DATA,
  RECEIVE_EVENT_HISTORY_DATA,
  EVENT_HISTORY_DATA_NOT_FOUND,
} from './types';

export const fetchEventData = (payload) => createAction(FETCH_EVENT_DATA)(payload);

export const receiveEventData = (payload) => createAction(RECEIVE_EVENT_DATA)(payload);

export const eventDataNotFound = () => createAction(EVENT_DATA_NOT_FOUND)();

export const saveEventData = (payload) => createAction(SAVE_EVENT_DATA)(payload);

export const fetchEventHistoryData = () => createAction(FETCH_EVENT_HISTORY_DATA)();

export const receiveEventHistoryData = (payload) => createAction(RECEIVE_EVENT_HISTORY_DATA)(payload);

export const eventHistoryDataNotFound = (payload) => createAction(EVENT_HISTORY_DATA_NOT_FOUND)(payload);
