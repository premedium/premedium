import express from 'express';
// import bodyParser from 'body-parser';

import register from './register';

const users = express();

// users.use(bodyParser.json());
users.use('/register', register);

export default users;
