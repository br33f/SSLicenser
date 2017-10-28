import 'bootstrap';

import Marionette from 'backbone.marionette';
import Backbone from 'backbone';

/* Views */
import MainView from './views/Main';

/* Routers */
import MainRouter from './routers/MainRouter';
import ProductRouter from './routers/ProductRouter';

export default Marionette.Application.extend({
  region: '#app',
  layoutView: null,

  onStart() {
    this.layoutView = new MainView();
    this.startRouters();

    Backbone.history.start();

    this.showView(this.layoutView);
  },

  startRouters() {
    new MainRouter({layoutView: this.layoutView});
    new ProductRouter({layoutView: this.layoutView});
  }
});
