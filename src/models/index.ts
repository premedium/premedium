import { Sequelize } from 'sequelize';
import * as config from '../config/config';

const { username, password, database, host, dialect } = config.development;
const sequelize = new Sequelize(database, username, password, {
  host,
  dialect
});

export default sequelize;
