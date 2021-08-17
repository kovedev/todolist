import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { 
  fetchTodoListData as fetchTodoListDataAction, 
  receiveTodoListData, 
  todoListDataNotFound 
} from './actions';
import { fetchTodoListData, createTodoListItem, deleteTodoListItem, updateTodoListItem, markDone } from './requests';
import {
  FETCH_TODOLIST_DATA,
  CREATE_TODOLIST_ITEM,
  DELETE_TODOLIST_ITEM,
  UPDATE_TODOLIST_ITEM,
  MARK_DONE,
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

export function* createTodoListItemSaga({payload}) {
  try {
    const { status } = yield call(createTodoListItem, payload);
    switch (status) {
      case 200:
        yield put(fetchTodoListDataAction());
        break;
      default:
        yield put(todoListDataNotFound());
        break;
    }
  } catch (error) {
    console.error('Failed to create todoList item with error "%s"', error);
    yield put(todoListDataNotFound());
  }
};

export function* deleteTodoListItemSaga({payload}) {
  try {
    const { status } = yield call(deleteTodoListItem, payload);
    switch (status) {
      case 200:
        yield put(fetchTodoListDataAction());
        break;
      default:
        yield put(todoListDataNotFound());
        break;
    }
  } catch (error) {
    console.error('Failed to delete todoList item with error "%s"', error);
    yield put(todoListDataNotFound());
  }
};

export function* updateTodoListItemSaga({payload}) {
  try {
    const { status } = yield call(updateTodoListItem, payload);
    switch (status) {
      case 200:
        yield put(fetchTodoListDataAction());
        break;
      default:
        yield put(todoListDataNotFound());
        break;
    }
  } catch (error) {
    console.error('Failed to update todoList item with error "%s"', error);
    yield put(todoListDataNotFound());
  }
};

export function* markDoneSaga({payload}) {
  try {
    const { status } = yield call(markDone, payload);
    switch (status) {
      case 200:
        yield put(fetchTodoListDataAction());
        break;
      default:
        yield put(todoListDataNotFound());
        break;
    }
  } catch (error) {
    console.error('Failed to update todoList item with error "%s"', error);
    yield put(todoListDataNotFound());
  }
};

export default function* counterSaga() {
  yield all([
    fork(function*() {
      yield takeEvery(FETCH_TODOLIST_DATA, fetchTodoListDataSaga);
      yield takeEvery(CREATE_TODOLIST_ITEM, createTodoListItemSaga);
      yield takeEvery(DELETE_TODOLIST_ITEM, deleteTodoListItemSaga);
      yield takeEvery(UPDATE_TODOLIST_ITEM, updateTodoListItemSaga);
      yield takeEvery(MARK_DONE, markDoneSaga);
    }),
  ]);
};