import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../root/rootReducer';
import {
  fetchTodoListData,
  createTodoListItem,
  deleteTodoListItem,
  updateTodoListItem,
} from './actions';
import './todoListPage.css'; 

class TodoListPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoItem: ''
    };
  }

  componentDidMount() {
    const { fetchTodoListData, isFetchingTodoListData, todoListData } = this.props;
    if(!todoListData && !isFetchingTodoListData)
      fetchTodoListData();
  }

  inputChange = (event) => {
    this.setState({newTodoItem: event.target.value});
  }

  createTodoListItemFunction = (event) => {
    const { createTodoListItem, isFetchingTodoListData } = this.props;
    const { newTodoItem } = this.state;
    event.preventDefault();
    if(!isFetchingTodoListData){
      createTodoListItem({
        text: newTodoItem,
      });
      this.setState({newTodoItem: ''});
    }
  }

  deleteTodoListItemFunction = (id) => {
    const { deleteTodoListItem, isFetchingTodoListData } = this.props;
    if(!isFetchingTodoListData)
      deleteTodoListItem(id);
  }

  updateTodoListItemFunction = (event, id) => {
    const { updateTodoListItem, isFetchingTodoListData } = this.props;
    if(!isFetchingTodoListData)
      updateTodoListItem({
        id: id,
        data: {
          text: event.target.value
        },
      });
  }

  render() {
    const { todoListData, isFetchingTodoListData } = this.props;
    const { newTodoItem } = this.state;

    if(!todoListData && isFetchingTodoListData)
      return (<div className='todo-list'>loading</div>)

    return (
      <form onSubmit={this.createTodoListItemFunction}>
        <div className='todo-list'>
          <div className='todo-list-title'>
            TODO List:
          </div>
          {(todoListData && todoListData.todoListItems) &&
            todoListData.todoListItems.map((item, index) => 
              <div key={index} className='todo-list-item'>
                <textarea
                  className='todo-list-textarea'
                  value={item.text}
                  onChange={(event)=>this.updateTodoListItemFunction(event, item.id)} />
                <button className='todo-list-button' onClick={()=>this.deleteTodoListItemFunction(item.id)}>
                  Delete
                </button>
              </div>
            )}
          <div className='todo-list-title'>
            Add new todo item:
          </div>
            <div className='todo-list-item'>
              <textarea 
                className='todo-list-textarea' 
                value={newTodoItem} 
                onChange={this.inputChange}/>
              <input className='todo-list-button' disabled={!newTodoItem} type="submit" value="Add" />
            </div>
        </div>
      </form>
    );
  }
}

const mapDispatchToProps = {
  fetchTodoListData,
  createTodoListItem,
  deleteTodoListItem,
  updateTodoListItem,
};

const mapStateToProps = (state: RootState) => ({
  isFetchingTodoListData: state.todoList.isFetchingTodoListData,
  todoListData: state.todoList.todoListData,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPage);