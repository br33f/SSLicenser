/**
 * 400 (Bad Request) Handler
 *
 * Usage:
 * return res.commonError(err);
 *
 */

module.exports = function badRequest(err) {
  let res = this.res;
  let data = {};

  if (err) {
    data.code = err.code;

    if (err.code === "E_VALIDATION") {
      data.reason = err.reason;
      data.invalidAttributes = err.invalidAttributes;
    }
  }

  res.badRequest(data);
};

