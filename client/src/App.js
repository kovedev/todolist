import React from 'react';
import { connect } from 'react-redux';
import { RootState } from './root/rootReducer';
import TopNavigation from './topNavigation/topNavigation';
import LoginForm from './auth/loginForm';

import './App.scss';

const App = ( props ) => {
  if (!props.email || !props.accessToken)
    return (
      <LoginForm />
    )

  return (
    <div className="body">
      <TopNavigation/>
      {props.children}
    </div>
  );
};

const mapDispatchToProps = {
};

const mapStateToProps = (state: RootState) => ({
  email: state.auth.email,
  accessToken: state.auth.accessToken,
});

export default connect(mapStateToProps, mapDispatchToProps)(App);