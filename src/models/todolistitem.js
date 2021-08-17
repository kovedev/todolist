const TodoListItemModel = (sequelize, DataTypes) => sequelize.define('todolistitems', {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  done: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  }
}, {
  tableName: 'todolistitems',
  timestamps: false,
});

module.exports = TodoListItemModel;