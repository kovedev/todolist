const TodoListItemModel = (sequelize, DataTypes) => sequelize.define('todolistitems', {
  text: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  tableName: 'todolistitems',
  timestamps: false,
});

export default TodoListItemModel;