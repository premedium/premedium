import express from 'express';

import users from './api/users';

const router = express();

router.use('/users', users);

export default router;
