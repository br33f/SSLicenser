export default {
  i18n: {
    _languageFile: require("assets/lang/pl.json"),
    t: function (path) {
      return SS.utils.findNested(this._languageFile, path) || path;
    }
  },

  utils: {
    findNested: _findNested
  },

  alerts: {
    _alertList: [],
    _hasChanged: true,
    getList: function () {
      this._hasChanged = false;
      return this._alertList;
    },
    clear: function () {
      this._alertList = [];
    },
    add: function (msg) {
      this._hasChanged = true;
      this._alertList.push(msg);
    },
    hasChanged: function () {
      return this._hasChanged;
    }
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
