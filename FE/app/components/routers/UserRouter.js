import AbstractController from './common/AbstractController';
import AbstractRouter from './common/AbstractRouter';

/* Views */
import RegisterView from '../views/Register';

/* Templates */


let UserController = AbstractController.extend({
  register: function () {
    this.layoutView.setContent(new RegisterView());
  }
});

export default AbstractRouter.extend({
  ControllerClass: UserController,

  appRoutes : {
    'account/register': 'register'
  }
});
