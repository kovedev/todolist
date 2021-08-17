import React from 'react';
import TopNavigation from './topNavigation/topNavigation';
import './App.css';

const App = ({
  children,
}) => {
  return (
    <div className="body">
      <TopNavigation/>
      {children}
    </div>
  );
};

export default App;