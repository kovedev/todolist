import axios from 'axios';

const config = {
  headers: {
    'Content-Type': 'application/json'
  },
};

export const fetchTodoListData = () => {
  return axios.get('/api/todolist');
};

export const createTodoListItem = (payload) => {
  return axios.post('/api/todolist', payload, config);
};

export const deleteTodoListItem = (id) => {
  return axios.delete('/api/todolist/' + id, config);
};

export const updateTodoListItem = ({id, data}) => {
  return axios.patch('/api/todolist/' + id, data, config);
};

export const markDone = ({id, data}) => {
  return axios.patch('/api/todolist/markdone/' + id, data, config);
};