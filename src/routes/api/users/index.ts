import * as express from 'express';

import register from './register';

const users = express();

users.use('/register', register);

export default users;
