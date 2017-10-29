/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
  create: function (req, res) {
    User.newUser({login: req.body.login, password: req.body.password}, err => {
      if (err) {
        res.commonError(err);
      } else {
        res.ok();
      }
    });
  },

  login: function (req, res) {
    User.login({login: req.body.login, password: req.body.password}, (err, result) => {
      if (err) {
        res.serverError("Wystąpił błąd podczas próby logowania.");
      } else {
        if (result) {
          res.ok({success: true, msg: "Zalogowano", token: result});
        } else {
          res.badRequest({success: false, msg: "Nieudana próba logowania."})
        }
      }
    });
  },

  list: function (req, res) {
    User.find().exec((err, users) => {
      if (err) {
        res.commonError(err);
      } else {
        res.send(users);
      }
    });
  }
};

