import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import template from 'templates/common/menu.jst'

export default Marionette.View.extend({
  template: template,
  ui: {
    btnHideShow: '#menuHideShow',
    menuItemsContainer: '#menuItemsContainer'
  },
  events: {
    'click @ui.btnHideShow': 'switchHideShow'
  },
  hidden: false,

  initialize: function () {
    this.model = new Backbone.Model();
    this.model.set('menuItems', [
      {
        label: SS.i18n.t('MENU.ITEMS.HOME'),
        path: '#',
        icon: 'mdi-home'
      },
      {
        label: SS.i18n.t('MENU.ITEMS.CONTACT'),
        path: '#contact',
        icon: 'mdi-email'
      },
      {
        label: SS.i18n.t('MENU.ITEMS.ACCOUNT'),
        path: '#account',
        icon: 'mdi-account'
      },
      {
        label: SS.i18n.t('MENU.ITEMS.API'),
        path: '#account/api',
        icon: 'mdi-matrix'
      }
    ]);

    this.refreshModel();
  },

  refresh: function () {
    this.refreshModel();
    this.render();
  },

  refreshModel: function () {
    this.model.get('menuItems').forEach(menuItem => menuItem.active = false);

    let activeElement = this.model.get('menuItems').find(menuItem => menuItem.path.replace('#', '') === location.hash);
    if (activeElement) {
      activeElement.active = true;
    }
  },

  switchHideShow: function () {
    if (this.hidden) {
      $(this.getUI('menuItemsContainer')[0]).slideDown();
      this.getUI('btnHideShow')[0].text = SS.i18n.t('MENU.HIDE');
      this.hidden = false;
    } else {
      $(this.getUI('menuItemsContainer')[0]).slideUp();
      this.getUI('btnHideShow')[0].text = SS.i18n.t('MENU.SHOW');
      this.hidden = true;
    }
  }


});
