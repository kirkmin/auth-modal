<<<<<<< HEAD
project.Views.Index = Backbone.CompositeView.extend({
	
	template: JST['index'],

	render: function () {
		var content = this.template({
		});
		this.$el.html(content);
		this.renderWelcome();
		return this;
	},

	renderWelcome: function () {
		var view = new project.Views.Welcome();
		this.addSubview('#welcome', view);
	}
=======
project.Views.Index = Backbone.CompositeView.extend({
	
	template: JST['index'],

	render: function () {
		var content = this.template({
		});
		this.$el.html(content);
		this.renderWelcome();
		return this;
	},

	renderWelcome: function () {
		var view = new project.Views.Welcome();
		this.addSubview('#welcome', view);
	}
>>>>>>> 9486b4860f23603e208181d96ccaf3a972806474
});