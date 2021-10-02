import { all, fork, put, takeEvery, call } from 'redux-saga/effects';
import { receiveAccessToken, accessTokenNotFound } from './actions';
import { SIGNUP, LOGIN } from './types';

import { login, signUp } from './requests';

export function* signUpSaga({payload}) {
  try {
    const { data, status } = yield call(signUp, payload);
    switch (status) {
      case 200:
        yield put(receiveAccessToken(data));
        break;
      default:
        yield put(accessTokenNotFound('Sign up error: User already exists'));
        break;
    }
  } catch (error) {
    console.error('Failed to sign up with error "%s"', error);
    yield put(accessTokenNotFound('Sign up error: User already exists'));
  }
}

export function* loginSaga({payload}) {
  try {
    const { data, status } = yield call(login, payload);
    switch (status) {
      case 200:
        yield put(receiveAccessToken(data));
        break;
      default:
        yield put(accessTokenNotFound('Login error: User does not exists'));
        break;
    }
  } catch (error) {
    console.error('Failed to login with error "%s"', error);
    yield put(accessTokenNotFound('Login error: User does not exists'));
  }
}

export default function* authSaga() {
  yield all([
    fork(function*() {
      yield takeEvery(SIGNUP, signUpSaga);
      yield takeEvery(LOGIN, loginSaga);
    }),
  ]);
}