import Marionette from 'backbone.marionette';

import HeaderView from './common/Header.js';
import FooterView from './common/Footer.js';

import template from 'templates/main.jst';

export default Marionette.View.extend({
  template: template,

  regions: {
    header: {
      el: '#headerPlaceholder',
      replaceElement: true
    },
    content: {
      el: '#content',
      replaceElement: false
    },
    footer: {
      el: '#footerPlaceholder',
      replaceElement: true
    }
  },

  onRender: function () {
    this.showChildView('header', new HeaderView());
    this.showChildView('footer', new FooterView());
  },

  setContent: function (view) {
    this.showChildView('content', view);
  }
});
