import { all, fork } from 'redux-saga/effects';
import todoListSaga from '../todolist/saga';

export default function* rootSaga() {	  
  yield all([	    
    fork(todoListSaga),
  ]);
}