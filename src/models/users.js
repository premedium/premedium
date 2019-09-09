module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.MAX_SAFE_INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          not: ['s'],
          min: 4,
          max: 26
        }
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          isEmail: true
        }
      },
      phone_number: {
        type: DataTypes.STRING,
        unique: true,
        validate: {
          isNumeric: true
        }
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING
      }
    },
    {
      underscored: true
    }
  );
  users.associate = () => {};
  return users;
};
