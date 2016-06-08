var App = new Marionette.Application();

App.addRegions({
	header: '#header',
	main: '#main',
	list: '#list',
	table: '#table'
});


App.navigate = function(route, options){
	options || (options = {});
	Backbone.history.navigate(route, options);
};

App.getCurrentRoute = function(){
	return Backbone.history.fragment;
};


App.on('start', function(options){
	console.log('App start');
	if ( Backbone.history ){ 
		Backbone.history.start();

		if (this.getCurrentRoute() === "" ){
			App.trigger("main:list");
		}
	}
});

