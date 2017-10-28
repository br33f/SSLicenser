import Marionette from 'backbone.marionette';

export default Marionette.Object.extend({
  layoutView: null,

  initialize: function (options) {
    this.layoutView = options.layoutView;
  }
});
