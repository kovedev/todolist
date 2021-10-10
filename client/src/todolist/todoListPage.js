import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../root/rootReducer';
import {
  fetchTodoListData,
  createTodoListItem,
  deleteTodoListItem,
  updateTodoListItem,
  markDone,
} from './actions';
import './todoListPage.scss'; 

const TodoListPage = (props) => {
  const [newTodoItem, setNewTodoItem] = useState('');
  const { 
    createTodoListItem, 
    fetchTodoListData, 
    deleteTodoListItem, 
    isFetchingTodoListData, 
    updateTodoListItem, 
    todoListData, 
    markDone, 
  } = props;
  
  useEffect(() => {
    if(!todoListData && !isFetchingTodoListData)
      fetchTodoListData();
  });

  const inputChange = (event) => {
    setNewTodoItem(event.target.value);
  }

  const createTodoListItemFunction = (event) => {
    event.preventDefault();
    if(!isFetchingTodoListData){
      createTodoListItem({
        text: newTodoItem,
      });
      setNewTodoItem('');
    }
  }

  const deleteTodoListItemFunction = (id) => {
    if(!isFetchingTodoListData)
      deleteTodoListItem(id);
  }

  const updateTodoListItemFunction = (event, id) => {
    if(!isFetchingTodoListData)
      updateTodoListItem({
        id: id,
        data: {
          text: event.target.value
        },
      });
  }

  const markDoneFunction = (id, done) => {
    if(!isFetchingTodoListData)
      markDone({
        id: id,
        data: {
          done: !done,
        },
      });
  }

  if(!todoListData && isFetchingTodoListData)
    return (<div className='todo-list'>loading</div>)

  return (
    <form onSubmit={createTodoListItemFunction}>
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
                onChange={(event) => updateTodoListItemFunction(event, item.id)} />
              <div key={index} className='todo-list-buttons'>
                <button 
                  className='todo-list-button' 
                  onClick={() => markDoneFunction(item.id, item.done)}
                  style={{ backgroundColor: item.done ? '#8F8A' : '#F88A'}}
                  >
                  {item.done ? 'Done' : 'Not Done'}
                </button>
                <button className='todo-list-button' onClick={() => deleteTodoListItemFunction(item.id)}>
                  Delete
                </button>
              </div>
            </div>
          )}
        <div className='todo-list-title'>
          Add new todo item:
        </div>
          <div className='todo-list-item'>
            <textarea 
              className='todo-list-textarea' 
              value={newTodoItem} 
              onChange={inputChange}/>
            <input className='todo-list-button' disabled={!newTodoItem} type="submit" value="Add" />
          </div>
      </div>
    </form>
  )
}

const mapDispatchToProps = {
  fetchTodoListData,
  createTodoListItem,
  deleteTodoListItem,
  updateTodoListItem,
  markDone,
};

const mapStateToProps = (state: RootState) => ({
  isFetchingTodoListData: state.todoList.isFetchingTodoListData,
  todoListData: state.todoList.todoListData,
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoListPage);