// import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { Users } from "../../models";

export default (req, res) => {
  const userData = {
    user_name: req.body.user_name,
    email: req.body.email,
    phone: req.phone,
    password: req.body.password
  };

  userData.password = bcrypt.hashSync(userData.password, 10);

  Users.create(userData)
    .then(() => {
      res.json({status: 200});
    })
    .catch((err) => {
      res.status(400).json({info: err});
    });
};
