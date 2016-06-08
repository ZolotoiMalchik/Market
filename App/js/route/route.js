App.module('RouteApp', function( RouteApp, App,
Backbone, Marionette, $, _){
	RouteApp.Router = Marionette.AppRouter.extend({ 
		appRoutes: {
			'main': 'showMain',
			'main/:id': 'showCategories'
		} 
	});

	var API = {
		showMain: function(){
			App.headerV = new App.BascetApp.BascetView();
			App.headerV.on('render', function(){
				this.showCount();
				if ( this.getSum() !== undefined ) {
					this.showSum();
				}
			});
			
			App.header.show( App.headerV );
			App.ListsApp.Controller.showLists();
		},
		showCategories: function(model){
			
			if ( typeof model !== 'Object' ) {
				var lists = App.request('lists:entities');
				model = lists.get(model);
				this.showMain();
			}
			
			App.TableApp.Controller.showTable(model);
		}
	};

	App.on('main:list', function(){
		console.log('Main list trigger work')
		App.navigate('main');
		API.showMain();
	});

	App.on('main:categories', function(model){
		
		this.navigate('main/' + model.get('id'));
		API.showCategories(model);
	});

	App.addInitializer(function(){
		new RouteApp.Router({
			controller: API
		});
	});
});