const EventDataModel = (sequelize, DataTypes) => sequelize.define('eventdatas', {
  sensor1: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  sensor2: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  sensor3: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  sensor4: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  }
}, {
  tableName: 'eventdatas',
  timestamps: false,
});

module.exports = EventDataModel;