import Backbone from 'backbone';
import Marionette from 'backbone.marionette';

import template from 'templates/common/breadcrumbs.jst'

export default Marionette.View.extend({
  template: template,

  initialize: function () {
    this.refreshModel();
  },

  refresh: function () {
    this.refreshModel();
    this.render();
  },

  refreshModel: function () {
    this.model = new Backbone.Model();
    this.model.set('breadcrumbs', [{
      path: '#',
      label: SS.i18n.t('MENU.HOME')
    }]);

    let explodedLocationHash = location.hash.replace('#', '').split('/');

    explodedLocationHash.forEach(loc => {
      if (loc.length > 0) {
        let lastPath = this.model.get('breadcrumbs')[this.model.get('breadcrumbs').length - 1].path;
        let breadcrumb = {
          path: lastPath + loc + '/',
          label: SS.i18n.t(`MENU.${loc.toUpperCase()}`)
        };

        this.model.get('breadcrumbs').push(breadcrumb);
      }
    })
  }


});
