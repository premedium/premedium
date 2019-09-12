module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      user_name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: {
          min: 2,
          max: 20
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
