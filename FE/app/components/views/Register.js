import DefaultContentView from './common/DefaultContentView';

import registerTemplate from 'templates/views/register.jst';

export default DefaultContentView.extend({
  template: registerTemplate,
  ui: {
    'email': 'input[name="email"]',
    'password': 'input[name="password"]',
    'passwordRepeat': 'input[name="passwordRepeat"]',
    'register': '#register'
  },
  events: {
    'click @ui.register': 'onRegister'
  },

  onRegister: function () {
    alert('test');
  }
});
