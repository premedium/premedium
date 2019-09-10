import jwt from 'jsonwebtoken';

import { SECRET_KEY, ACCESS_TOKEN_DURATION } from '../../constants';

export default (payload) => {
  const token = jwt.sign({
    data: payload
  }, SECRET_KEY, {
    expiresIn: ACCESS_TOKEN_DURATION
  });

  return token;
};
