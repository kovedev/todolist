import { combineReducers } from '@reduxjs/toolkit';

import todoListReducer from '../todolist/reducer';

const allReducers = { 
  todoList: todoListReducer,
};

export let rootReducer = combineReducers({
  ...allReducers,
});

export default function createReducer(injectedReducers = {}){
  rootReducer = combineReducers({
    ...allReducers,
    ...injectedReducers,
  });

  return rootReducer;
}

export type RootState = ReturnType<typeof rootReducer>;