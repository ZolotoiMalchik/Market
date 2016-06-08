App.module('TableApp', function( TableApp, App,
Backbone, Marionette, $, _){
	TableApp.Controller = {
		showTable: function(model){
			
			var tableC = model.get('collection');
			var newTableC = new App.Entities.TableColl(tableC);
			var bascet = App.request('bascet:entities');
			var tableV = new App.TableApp.TableCollView({
				collection: newTableC
			});			

			console.log('Show Table coll', newTableC);
			App.table.show(tableV);
			newTableC.forEach( function( el, i, arr ){
				
				bascet.forEach( function( el1, i1, arr1 ){
					
					if ( el.get('value') === el1.get('value') ) {
												
						tableV.children.findByModel(el).inBascet();
					}
				});
			});
		}
	};
});