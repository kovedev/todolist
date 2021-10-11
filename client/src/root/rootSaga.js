import { all, fork } from 'redux-saga/effects';
import eventDataSaga from '../eventData/saga';
import authSaga from '../auth/saga';

export default function* rootSaga() {	  
  yield all([	    
    fork(eventDataSaga),
    fork(authSaga),
  ]);
}