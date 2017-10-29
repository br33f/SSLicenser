import Marionette from 'backbone.marionette';

import AbstractController from './common/AbstractController';
import AbstractRouter from './common/AbstractRouter';

import DefaultContentView from '../views/common/DefaultContentView';

/* Views */

/* Templates */
import notFoundTemplate from 'templates/views/notfound.jst';

let MainController = AbstractController.extend({
  showHomepage: function () {
    this.layoutView.setContent(new (DefaultContentView.extend({
      template: _.template('TEST CONTENT')
    })));
  },

  notFoundRedirect: function () {
    Backbone.history.navigate('#notFound', {trigger: true});
  },

  showNotfound: function () {
    this.layoutView.setContent(new (DefaultContentView.extend({
      template: notFoundTemplate
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
