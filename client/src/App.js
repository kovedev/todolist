import React from 'react';
import TopNavigation from './topNavigation/topNavigation';

const App = ({
  children,
}) => {
  return (
    <div>
      <TopNavigation/>
      {children}
    </div>
  );
};

export default App;