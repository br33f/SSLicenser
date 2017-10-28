import Marionette from 'backbone.marionette';

let ProductController = {
  showProduct: function (id) {
    console.log(`product o id ${id}`);
  }
};

export default Marionette.AppRouter.extend({
  controller: ProductController,

  appRoutes : {
    'product/:id': 'showProduct'
  }
});
