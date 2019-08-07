module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      user_name: DataTypes.STRING,
      name: DataTypes.STRING
    },
    {
      underscored: true
    }
  );
  users.associate = () => {};
  return users;
};
