import { combineReducers } from '@reduxjs/toolkit';

import todoListReducer from '../todolist/reducer';
import authReducer from '../auth/reducer';

const allReducers = { 
  todoList: todoListReducer,
  auth: authReducer,
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