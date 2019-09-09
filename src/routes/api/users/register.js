const express = require('express');
const cors = require('cors');

const users = express.Router();

users.use(cors());

const key = 'secret';

users.post('/register/', (req, res) => {
  const { userName, email, phoneNumber, password } = req;

  const userData = {
    user_name: userName,
    email,
    phone_number: phoneNumber,
    password
  };

  res.secret = key;

  return userData;
});
