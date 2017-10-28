import Marionette from 'backbone.marionette';

export default Marionette.AppRouter.extend({
  ControllerClass: null,
  controller: null,

  initialize: function (options) {
    this.controller = new this.ControllerClass(options);
  }
});
