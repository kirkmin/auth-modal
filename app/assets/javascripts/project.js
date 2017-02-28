<<<<<<< HEAD
window.project = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  initialize: function() {
    var $root = $('#main');
    this.currentUserId = $root.attr('data-current-user');
    new project.Routers.Router();
    Backbone.history.start();
  },
=======
window.project = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  Utils: {},
  initialize: function() {
    var $root = $('#main');
    this.currentUserId = $root.attr('data-current-user');
    new project.Routers.Router();
    Backbone.history.start();
  },
>>>>>>> 9486b4860f23603e208181d96ccaf3a972806474
}