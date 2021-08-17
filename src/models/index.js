const Sequelize = require('sequelize');
const TodoListItemModel = require('./todolistitem');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.STORAGE_PATH || './todolist_db.sqlite',
});

const TodoListItem = TodoListItemModel(sequelize, Sequelize)

const models = {
  TodoListItem: TodoListItem,
}

module.exports = {
  sequelize, 
  models, 
};