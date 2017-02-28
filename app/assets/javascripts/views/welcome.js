<<<<<<< HEAD
project.Views.Welcome = Backbone.View.extend({
	
	template: JST['welcome'],

	initialize: function () {
		var that = this
		$(document).on('data-attribute-changed', function () {that.render()})
	},

	render: function () {
		var content = this.template({
		});
		this.$el.html(content);
		return this;
	}
=======
project.Views.Welcome = Backbone.View.extend({
	
	template: JST['welcome'],

	initialize: function () {
		var that = this
		$(document).on('data-attribute-changed', function () {that.render()})
	},

	render: function () {
		var content = this.template({
		});
		this.$el.html(content);
		return this;
	}
>>>>>>> 9486b4860f23603e208181d96ccaf3a972806474
});