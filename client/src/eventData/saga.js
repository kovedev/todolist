import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { 
  receiveEventData, 
  eventDataNotFound,
  fetchEventHistoryData as fetchEventHistoryDataAction,
  receiveEventHistoryData,
  eventHistoryDataNotFound
} from './actions';
import { fetchEventData, fetchEventHistoryData, saveEventData } from './requests';
import {
  FETCH_EVENT_DATA,
  SAVE_EVENT_DATA,
  FETCH_EVENT_HISTORY_DATA,
} from './types';

export function* fetchEventDataSaga({payload}) {
  try {
    const { data, status } = yield call(fetchEventData, payload);
    switch (status) {
      case 200:
        yield put(receiveEventData(data));
        break;
      case 401:
        yield put(eventDataNotFound());
        break;
      default:
        yield put(eventDataNotFound());
        break;
    }
  } catch (error) {
    console.error('Failed to fetch event data with error "%s"', error);
    yield put(eventDataNotFound());
  }
};

export function* saveEventDataSaga({payload}) {
  try {
    const { status } = yield call(saveEventData, payload);
    switch (status) {
      case 200:
        yield put(fetchEventHistoryDataAction());
        break;
      default:
        yield put(eventHistoryDataNotFound());
        break;
    }
  } catch (error) {
    console.error('Failed to save event data with error "%s"', error);
  }
};

export function* fetchEventHistoryDataSaga() {
  try {
    const { data, status } = yield call(fetchEventHistoryData);
    switch (status) {
      case 200:
        yield put(receiveEventHistoryData(data.eventData));
        break;
      default:
        yield put(eventHistoryDataNotFound());
        break;
    }
  } catch (error) {
    console.error('Failed to fetch event history data with error "%s"', error);
    yield put(eventHistoryDataNotFound());
  }
};

export default function* counterSaga() {
  yield all([
    fork(function*() {
      yield takeEvery(FETCH_EVENT_DATA, fetchEventDataSaga);
      yield takeEvery(SAVE_EVENT_DATA, saveEventDataSaga);
      yield takeEvery(FETCH_EVENT_HISTORY_DATA, fetchEventHistoryDataSaga);
    }),
  ]);
};