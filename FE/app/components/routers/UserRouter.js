import Marionette from 'backbone.marionette';

let UserController = {
  create: function () {
    console.log(`create}`);
  }
};

export default Marionette.AppRouter.extend({
  controller: UserController,

  appRoutes : {
    'user/create': 'create'
  }
});
