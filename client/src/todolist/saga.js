import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { receiveTodoListData, todoListDataNotFound } from './actions';
import { fetchTodoListData } from './requests';
import {
  FETCH_TODOLIST_DATA,
} from './types';

export function* fetchTodoListDataSaga() {
  try {
    const { data, status } = yield call(fetchTodoListData);
    switch (status) {
      case 200:
        yield put(receiveTodoListData(data));
        break;
      default:
        yield put(todoListDataNotFound());
        break;
    }
  } catch (error) {
    console.error('Failed to fetch todoList data with error "%s"', error);
    yield put(todoListDataNotFound());
  }
};

export default function* counterSaga() {
  yield all([
    fork(function*() {
      yield takeEvery(FETCH_TODOLIST_DATA, fetchTodoListDataSaga);
    }),
  ]);
};