import { combineReducers } from '@reduxjs/toolkit';

import eventDataReducer from '../eventData/reducer';
import authReducer from '../auth/reducer';

const allReducers = { 
  eventData: eventDataReducer,
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