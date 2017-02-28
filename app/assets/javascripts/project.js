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
}