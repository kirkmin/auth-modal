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
});