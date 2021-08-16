import React, { Component } from 'react';
import { connect } from 'react-redux';
import { RootState } from '../root/rootReducer';
import {
  fetchTodoListData,
  createTodoListItem,
  deleteTodoListItem,
  updateTodoListItem,
} from './actions';

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
      return (<div>spinner</div>)

    return (
      <div>
        {(todoListData && todoListData.todoListItems) &&
          todoListData.todoListItems.map((item, index) => 
            <div key={index}>
              <input
                type="text"
                value={item.text}
                onChange={(event)=>this.updateTodoListItemFunction(event, item.id)} />
              <button onClick={()=>this.deleteTodoListItemFunction(item.id)}>
                Delete
              </button>
            </div>
          )}
        <form onSubmit={this.createTodoListItemFunction}>
          <div>
            Add new todo item:
          </div>
          <input value={newTodoItem} type="text" onChange={this.inputChange}/>
          <input disabled={!newTodoItem} type="submit" value="Submit" />
        </form>
      </div>
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