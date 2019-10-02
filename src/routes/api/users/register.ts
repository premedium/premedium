import * as express from 'express';
import register from '../../../actions/users/register';

const login = express.Router();

login.post('/', (req, res) => {
  register(req, res);
});

export default login;
