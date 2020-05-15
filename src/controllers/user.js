const bcrypt = require('bcrypt');
const User = require('../model/user');

exports.signUp = (req, res) => {
  try {
    bcrypt.hash(req.body.password, 10).then((hash) => {
      const user = new User({
        email: req.body.email,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        passHash: hash,
        state: req.body.state,
        country: req.body.country,
        age: req.body.age,
        maritalStatus: req.body.maritalStatus,
        sex: req.body.sex,
        sexOrientation: req.body.sexOrientation,
        religious: req.body.religious,
        religion: req.body.religion
      });
      user.save().then(() => {
        res
          .status(201)
          .json({ message: 'user registration successful' })
          .catch(() => {
            res.status(500).send({ message: 'user registration unsuccessful' });
          });
      });
    });
  } catch (error) {
    throw Error(error);
  }
};
