const dbHost = process.env.db_host || 'localhost';
const dbName = process.env.db_name || 'premedium';
const dbUser = process.env.db_user || 'premedium_user';
const dbPassword = process.env.db_password || 'premediumpass';
const dbDialect = 'postgres';

const envs = ['development', 'test', 'production'];
const config = {};

envs.forEach((item) => {
  config[item] = {
    username: dbUser,
    password: dbPassword,
    database: dbName,
    host: dbHost,
    dialect: dbDialect
  };
});

module.exports = config;
