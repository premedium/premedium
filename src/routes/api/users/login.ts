import express from 'express';

const login = express.Router();

login.post('/login', (req, res) => {
  login(req, res);
});

export default login;
