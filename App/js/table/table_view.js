App.module('TableApp', function( TableApp, App,
Backbone, Marionette, $, _){
	TableApp.TableView = Marionette.ItemView.extend({
		template: "#table-template",
		ui: {
			button: '.btn'
		},
		events: {
			'click button': 'addToBascet'
		},
		addToBascet: function(){
			
			this.inBascet();
			
			var bascet = App.request('bascet:entities');
			var bascetModel = new App.Entities.BascetModel({
				price: this.model.get('price'),
				value: this.model.get('value')
			});
			bascet.add( bascetModel );
			App.headerV.render();			
		},
		inBascet: function(){
			this.ui.button[0].innerHTML = '<i class="icon-shopping-cart"></i> В корзине';
			this.ui.button.prop('disabled', 'disabled');
		}
	});

	TableApp.TableCollView = Marionette.CollectionView.extend({
		childView: TableApp.TableView 
	});
});