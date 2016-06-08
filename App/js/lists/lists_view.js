App.module('ListsApp', function( ListsApp, App,
Backbone, Marionette, $, _){
	ListsApp.ListView = Marionette.ItemView.extend({
		tagName: 'li',
		template: "#list-template",
		events: {
			'click': 'showItem'
		},
		showItem: function(e){
			e.preventDefault();
			App.trigger('main:categories', this.model);
		}

	});

	ListsApp.ListsView = Marionette.CollectionView.extend({
		tagName: 'ul',
		childView: ListsApp.ListView 
	});

});