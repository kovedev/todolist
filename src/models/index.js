const Sequelize = require('sequelize');
const TodoListItemModel = require('./todolistitem');
const EventDataModel = require('./eventdata');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.STORAGE_PATH || './todolist_db.sqlite',
});

const TodoListItem = TodoListItemModel(sequelize, Sequelize)
const EventData = EventDataModel(sequelize, Sequelize)

const models = {
  TodoListItem: TodoListItem,
  EventData: EventData,
}

module.exports = {
  sequelize, 
  models, 
};