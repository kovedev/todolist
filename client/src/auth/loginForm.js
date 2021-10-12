import React, { useState }  from 'react';
import { connect } from 'react-redux';
import { RootState } from '../root/rootReducer';
import {
  signUp,
  login,
} from './actions';

import './loginForm.scss';

const LoginForm = ( props ) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [newUser, setNewUser] = useState(false);

  const onSubmit = event => {
    const { signUp, login } = props;
    
    const payload = ({
      email: email, 
      password: password,
    });
    
    if(newUser)
      signUp(payload)
    else 
      login(payload)

    event.preventDefault();
  };

  return (
    <div className='login-form'>
      <form onSubmit={onSubmit}>
        {'Please login'}
        <input
          name='email'
          value={email}
          type='text'
          placeholder='Email Address'
          onChange={e => setEmail(e.target.value)}
        />
        <input
          name='password'
          value={password}
          type='password'
          placeholder='Password'
          onChange={e => setPassword(e.target.value)}
        />
        <label>{'New user: '}
          <input
            name='newUser'
            value={newUser}
            type='checkbox'
            onChange={() => setNewUser(!newUser)}
          />
        </label>
        <button type='submit' disabled={password === '' || email === ''}>
          Sign In
        </button>

        {props.errorMessage && <p>{props.errorMessage}</p>}
      </form>
    </div>
  )
};

const mapDispatchToProps = {
  signUp,
  login,
};

const mapStateToProps = (state: RootState) => ({
  email: state.auth.email,
  accessToken: state.auth.accessToken,
  isFetching: state.auth.isFetching,
  errorMessage: state.auth.errorMessage,
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);