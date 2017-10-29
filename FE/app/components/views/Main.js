import Marionette from 'backbone.marionette';

import HeaderView from './common/Header.js';
import MenuView from './common/Menu.js';
import BreadcrumbsView from './common/Breadcrumbs.js';
import FooterView from './common/Footer.js';

import template from 'templates/main.jst';

export default Marionette.View.extend({
  template: template,
  breadcrumbs: null,
  menu: null,

  regions: {
    header: {
      el: '#header',
      replaceElement: false
    },
    breadcrumbs: {
      el: '#breadcrumbs',
      replaceElement: false
    },
    menu: {
      el: '#menu',
      replaceElement: false
    },
    content: {
      el: '#content',
      replaceElement: false
    },
    footer: {
      el: '#footer',
      replaceElement: false
    }
  },

  initialize: function () {
    $(window).on("resize", this.updateContentMaxHeight.bind(this));
  },

  onRender: function () {
    this.showChildView('header', new HeaderView());
    this.showChildView('footer', new FooterView());

    this.breadcrumbs = new BreadcrumbsView();
    this.showChildView('breadcrumbs', this.breadcrumbs);

    this.menu = new MenuView();
    this.showChildView('menu', this.menu);
  },

  setContent: function (view) {
    this.showChildView('content', view);
    this.breadcrumbs.refresh();
    this.menu.refresh();
    this.updateContentMaxHeight();
  },

  updateContentMaxHeight: function () {
    let $contentElement = this.$el.find('#content');
    let $footerElement = this.$el.find('#footer');
    let maxHeightCalculated = $(window).height() - $contentElement.offset().top - $footerElement.height();
    $contentElement.css('max-height', maxHeightCalculated);
  }
});
