import Marionette from 'backbone.marionette';

import AbstractController from './common/AbstractController';
import AbstractRouter from './common/AbstractRouter';

/* Views */

let MainController = AbstractController.extend({
  showHomepage: function () {
    this.layoutView.setContent(new (Marionette.View.extend({
      template: _.template('TEST CONTENT')
    })));
  },

  notFoundRedirect: function () {
    Backbone.history.navigate('#notFound', {trigger: true});
  },

  showNotfound: function () {
    console.log('error');

    this.layoutView.setContent(new (Marionette.View.extend({
      template: _.template('ERROR CONTENT')
    })));
  }
});

export default AbstractRouter.extend({
  ControllerClass: MainController,

  appRoutes : {
    '': 'showHomepage',
    'panel': 'showHomepage',
    'notFound': 'showNotfound',
    '*notFound': 'notFoundRedirect',
  }
});
