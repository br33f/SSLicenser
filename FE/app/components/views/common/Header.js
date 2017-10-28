import Marionette from 'backbone.marionette';
import AlertsView from './Alerts';

import template from 'templates/common/header.jst'

export default Marionette.View.extend({
  template: template,
  regions: {
    alerts: {
      el: '#alerts-placeholder',
      replaceElement: true
    }
  },

  onRender: function () {
    this.renderAlerts();
  },

  renderAlerts: function () {
    this.showChildView('alerts', new AlertsView());
  }

});
