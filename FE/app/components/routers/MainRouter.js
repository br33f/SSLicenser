import Marionette from 'backbone.marionette';

import AbstractController from './common/AbstractController';
import AbstractRouter from './common/AbstractRouter';

/* Views */

let MainController = AbstractController.extend({
  showHomepage: function () {
    console.log('showHomepage');

    this.layoutView.setContent(new (Marionette.View.extend({
      template: _.template('TEST CONTENT')
    })));
  }
});

export default AbstractRouter.extend({
  ControllerClass: MainController,

  appRoutes : {
    'panel': 'showHomepage',
    '': 'showHomepage',
  }
});
