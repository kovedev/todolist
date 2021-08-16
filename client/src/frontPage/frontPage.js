import React, { Component } from 'react';

import TodoListPage from '../todolist/todoListPage';

class FrontPage extends Component{
  render() {
    return (
      <div>
        <TodoListPage/>
      </div>
    );
  }
}

export default FrontPage;