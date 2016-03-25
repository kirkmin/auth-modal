project.Routers.Router = Backbone.Router.extend({
  initialize: function() {
    // var dropDownView = new project.Views.DropDownView({
    //   collection: project.Collections.boards
    // });
    // $('#add-dropdown').append(dropDownView.render().$el);
    this.$rootEl = $('#main');
  },

  routes: {
    '': 'index'
  },

  index: function () {

    var view = new project.Views.Index();

    this._swapView(view);
  },

  _swapView: function (view) {
    this.currentView && this.currentView.remove();
    this.currentView = view;
    this.$rootEl.html(view.render().$el);
  }
});