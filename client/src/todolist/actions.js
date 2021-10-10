import { createAction } from 'redux-actions';
import {
  FETCH_TODOLIST_DATA,
  RECEIVE_TODOLIST_DATA,
  TODOLIST_DATA_NOT_FOUND,
  CREATE_TODOLIST_ITEM,
  DELETE_TODOLIST_ITEM,
  UPDATE_TODOLIST_ITEM,
  MARK_DONE,
} from './types';

export const fetchTodoListData = () => createAction(FETCH_TODOLIST_DATA)();

export const receiveTodoListData = (payload) => createAction(RECEIVE_TODOLIST_DATA)(payload);

export const todoListDataNotFound = () => createAction(TODOLIST_DATA_NOT_FOUND)();

export const createTodoListItem = (payload) => createAction(CREATE_TODOLIST_ITEM)(payload);

export const deleteTodoListItem = (payload) => createAction(DELETE_TODOLIST_ITEM)(payload);

export const updateTodoListItem = (payload) => createAction(UPDATE_TODOLIST_ITEM)(payload);

export const markDone = (payload) => createAction(MARK_DONE)(payload);