import { createAction } from 'redux-actions';

import {
  FETCH_TODOLIST_DATA,
  RECEIVE_TODOLIST_DATA,
  TODOLIST_DATA_NOT_FOUND,
} from './types';

export const fetchTodoListData = () => createAction(FETCH_TODOLIST_DATA)();
export const receiveTodoListData = payload => createAction(RECEIVE_TODOLIST_DATA)(payload);
export const todoListDataNotFound = () => createAction(TODOLIST_DATA_NOT_FOUND);