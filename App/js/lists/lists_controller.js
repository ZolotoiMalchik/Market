App.module('ListsApp', function( ListsApp, App,
Backbone, Marionette, $, _){
	ListsApp.Controller = {
		showLists: function(){
			var lists = App.request('lists:entities');
			var listsV = new App.ListsApp.ListsView({
				collection: lists
			});

			App.list.show(listsV);
		}
	};
});