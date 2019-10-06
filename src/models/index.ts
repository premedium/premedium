import { Sequelize, Model } from 'sequelize';
import * as config from '../config/config';
import UsersModel from './users';

const { username, password, database, host, dialect } = config.development;
export const sequelize = new Sequelize(database, username, password, {
  host,
  dialect
});
export const Users: Model = UsersModel(sequelize, Sequelize);
