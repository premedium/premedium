import { hashSync } from 'bcrypt';

import { Users } from '../../models';
import { BCRYPT_SALT } from '../../constants';

export default (req, res) => {
  const userData = {
    user_name: req.body.user_name,
    email: req.body.email,
    phone: req.phone,
    password: req.body.password
  };

  userData.password = hashSync(userData.password, BCRYPT_SALT);

  Users.create(userData)
    .then(() => {
      res.json({ status: 200 });
    })
    .catch((err) => {
      res.status(400).json({ info: err.errors[0].message });
    });
};
