import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { RootState } from '../root/rootReducer';
import { Routes, getRouteById } from '../root/routes';
import { logout } from '../auth/actions';

import './topNavigation.scss'; 

const TopNavigation = ({ logout }) => {
  return (
    <div className='top-navigation'>
      <Link to={getRouteById(Routes.HOME)}>
        Home
      </Link>
      <Link to={getRouteById(Routes.HOME)} onClick={() => logout()}>
        Logout
      </Link>
    </div>
  );
};
    
const mapDispatchToProps = {
  logout,
};

const mapStateToProps = (state: RootState) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TopNavigation));