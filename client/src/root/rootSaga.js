import { all, fork } from 'redux-saga/effects';
import todoListSaga from '../todolist/saga';
import eventDataSaga from '../eventData/saga';
import authSaga from '../auth/saga';

export default function* rootSaga() {	  
  yield all([	    
    fork(todoListSaga),
    fork(eventDataSaga),
    fork(authSaga),
  ]);
}