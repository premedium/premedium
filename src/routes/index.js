import express from 'express';
import users from './users';

const router = express.Router();

router.post('/users', users);

export default router;
