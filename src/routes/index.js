import express from 'express';
// import bodyParser from 'body-parser';

import users from './api/users';

const router = express();

// router.use(bodyParser.json());
router.use('/users', users);

export default router;
