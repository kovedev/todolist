import { createAction } from 'redux-actions';
import {
  SIGNUP, 
  LOGIN, 
  ACCESS_TOKEN_NOT_FOUND, 
  RECEIVE_ACCESS_TOKEN
} from './types';

export const signUp = payload => createAction(SIGNUP)(payload);

export const login = payload => createAction(LOGIN)(payload);

export const receiveAccessToken = payload => createAction(RECEIVE_ACCESS_TOKEN)(payload);

export const accessTokenNotFound = payload => createAction(ACCESS_TOKEN_NOT_FOUND)(payload);
