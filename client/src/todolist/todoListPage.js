import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../root/rootReducer';
import {
  fetchTodoListData,
} from './actions';

class TodoListPage extends Component {
  componentDidMount() {
    const { fetchTodoListData, isFetchingTodoListData, todoListData } = this.props;
    if(!todoListData && !isFetchingTodoListData)
      fetchTodoListData();
  }

  render() {
    const { todoListData, isFetchingTodoListData } = this.props;

    if(!todoListData && isFetchingTodoListData)
      return (<div>spinner</div>)

    return (
      <div>
        {todoListData && 
          todoListData.todoListItems.map((item, index) =>
            <div key={index}>{item.id} {item.text}</div>
          )
        }
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchTodoListData,
};

const mapStateToProps = (state: RootState) => ({
  isFetchingTodoListData: state.todoList.isFetchingTodoListData,
  todoListData: state.todoList.todoListData,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPage);