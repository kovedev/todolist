import { all, fork } from 'redux-saga/effects';
import todoListSaga from '../todolist/saga';
import authSaga from '../auth/saga';

export default function* rootSaga() {	  
  yield all([	    
    fork(todoListSaga),
    fork(authSaga),
  ]);
}