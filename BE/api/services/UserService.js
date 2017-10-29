let jwt = require('jsonwebtoken');

module.exports = {
  jwtSign: function (payload) {
    return jwt.sign(payload, sails.config.secret, {
      expiresIn: '2 days',
      algorithm: 'HS512'
    });
  },

  jwtVertify: function (token, next) {
    return jwt.verify(
      token,
      sails.config.secret,
      {algorithms: ['HS512']},
      next
    );
  }

};
