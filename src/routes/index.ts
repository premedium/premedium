import * as express from 'express';

import users from './api/users/index';

const router = express();

router.use('/users', users);

export default router;
