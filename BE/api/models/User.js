/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

let bcrypt = require('bcrypt');

module.exports = {
  attributes: {
    login: {
      type: 'string',
      required: true
    },
    password: {
      type: 'string',
      required: true
    },
    permission: {
      type: 'int',
      defaultsTo: 0
    }
  },

  newUser: function (data, next) {
    bcrypt.hash(data.password, sails.config.bcrypt_rounds, (err, encryptedPassword) => {
      if (err)
        throw err;

      this.create({login: data.login, password: encryptedPassword}).exec(next);
    });
  },

  login: function (data, next) {
    User.findOne({login: data.login}, (err, user) => {
      if (err)
        next(err);

      bcrypt.compare(data.password, user.password, (err, result) => {
        if (err)
          next(err);

        if (result) {
          let payload = {
            userId: user.id
          };

          result = UserService.jwtSign(payload);
        }

        next(null, result);
      })
    });
  }
};

