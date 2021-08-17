import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { Routes, getRouteById } from '../root/routes';
import './topNavigation.css'; 

const TopNavigation = () => {
  return (
    <div className='top-navigation'>
      <Link to={getRouteById(Routes.HOME)}>
        Home
      </Link>
    </div>
  );
};
  
export default withRouter(TopNavigation);