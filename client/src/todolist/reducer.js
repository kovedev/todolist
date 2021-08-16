import { createSlice } from '@reduxjs/toolkit';
import {
  FETCH_TODOLIST_DATA,
  RECEIVE_TODOLIST_DATA,
  TODOLIST_DATA_NOT_FOUND,
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
  }
});

export default todoListSlice.reducer;