import React from 'react';
import { Route, Switch } from 'react-router';
import App from '../App';
import EventDataPage from '../eventData/eventDataPage';
import ErrorPage from '../errorPage/errorPage';

export const Routes = {
  HOME: 'home',
};

export const getRouteById = (id: string): string => {
  const routes = {
    [Routes.HOME]: '/',
  };
  return routes[id] ? routes[id] : '';
};

export default
<App>
  <Switch>
    <Route exact path='/' component={EventDataPage} />
    <Route component={ErrorPage} />
  </Switch>
</App>;