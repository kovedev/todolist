import { createSlice } from '@reduxjs/toolkit';
import {
  FETCH_TODOLIST_DATA,
  RECEIVE_TODOLIST_DATA,
  TODOLIST_DATA_NOT_FOUND,
  CREATE_TODOLIST_ITEM,
  DELETE_TODOLIST_ITEM,
  UPDATE_TODOLIST_ITEM,
} from './types';

const initialState = {
  isFetchingTodoListData: false,
  todoListData: null,
};

const todoListSlice = createSlice({
  name: 'todolist',
  initialState,
  reducers: {
  },
  extraReducers: {
    [FETCH_TODOLIST_DATA]: (state, action) => {
      state.isFetchingTodoListData = true;
    },
    [TODOLIST_DATA_NOT_FOUND]: (state, action) => {
      state.isFetchingTodoListData = false;
    },
    [RECEIVE_TODOLIST_DATA]: (state, action) => {
      state.isFetchingTodoListData = false;
      state.todoListData = action.payload;
    },
    [CREATE_TODOLIST_ITEM]: (state, action) => {
      state.isFetchingTodoListData = true;
    },
    [DELETE_TODOLIST_ITEM]: (state, action) => {
      state.isFetchingTodoListData = true;
    },
    [UPDATE_TODOLIST_ITEM]: (state, action) => {
      state.isFetchingTodoListData = true;
    },
  }
});

export default todoListSlice.reducer;