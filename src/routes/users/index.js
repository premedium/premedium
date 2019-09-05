import express from 'express';
import login from './login';

// const users = { login };

const router = express.Router();

router.post('/users', login);

export default router;
