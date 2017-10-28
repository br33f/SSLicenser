export default {
  i18n: {
    languageFile: require("assets/lang/pl.json"),
    t: function (path) {
      return SS.utils.findNested(this.languageFile, path) || path;
    }
  },

  utils: {
    findNested: _findNested
  }
};

function _findNested(obj, keyPath) {
  let keyPathArray = keyPath.split('.');

  Array.prototype.forEach.call(keyPathArray, key => {
    if (obj && obj[key])
      obj = obj[key];
    else
      obj = null;
  });

  return obj ;
}
