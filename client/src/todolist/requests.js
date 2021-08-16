import axios from 'axios';

export const fetchTodoListData = () => {
  return axios.get('/api/todolist');
};