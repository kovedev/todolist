const Sequelize = require('sequelize');
const EventDataModel = require('./eventdata');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: process.env.STORAGE_PATH || './eventdata_db.sqlite',
});

const EventData = EventDataModel(sequelize, Sequelize)

const models = {
  EventData: EventData,
}

module.exports = {
  sequelize, 
  models, 
};