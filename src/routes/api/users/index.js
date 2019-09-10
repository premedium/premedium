import express from 'express';

import register from './register';
import googleApi from './googleApi';

const users = express();

users.use('/register', register);
users.use('/googleApi', googleApi);

export default users;
