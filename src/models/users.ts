import { Model, DataTypes } from 'sequelize';

import sequelize from './index';

class User extends Model {
  static create(userData: {
    user_name: any;
    email: any;
    phone: any;
    password: any;
  }) {
    throw new Error('Method not implemented.');
  }
  public id: number;

  public user_name: string;

  public email: string;

  public phone: string;

  public password: string;

  public readonly createdAt!: Date;

  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        min: 2,
        max: 20
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    phone: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        min: 6,
        max: 18
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'users',
    sequelize
  }
);

export default User;
