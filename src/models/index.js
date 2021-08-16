import Sequelize from 'sequelize';

import TodoListItemModel from './todolistitem';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.STORAGE_PATH || './todolist_db.sqlite',
});

const TodoListItem = TodoListItemModel(sequelize, Sequelize)

const models = {
  TodoListItem: TodoListItem,
}

export { sequelize }

export default models;