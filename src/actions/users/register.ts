import { hashSync } from 'bcrypt';
import { Response, Request, Errback } from 'express';

import { Users } from '../../models';
import { BCRYPT_SALT } from '../../constants';

export default (req: Request, res: Response): void => {
  const userData = {
    user_name: req.body.user_name,
    email: req.body.email,
    phone: req.body.phone,
    password: req.body.password
  };

  userData.password = hashSync(userData.password, BCRYPT_SALT);
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  Users.create(userData)
    .then(() => {
      res.json({ status: 200 });
    })
    .catch((err: Errback) => {
      res.status(400).json({ info: err });
    });
};
