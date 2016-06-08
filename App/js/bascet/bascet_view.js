App.module('BascetApp', function( BascetApp, App,
Backbone, Marionette, $, _){
	BascetApp.BascetView = Marionette.ItemView.extend({
		template: '#header-template',
		ui: {
			count: '#count',
			sum: '#sum'
		},
		getCount: function(){
			var bascet = App.request('bascet:entities');
			return bascet.models.length;
		},
		showCount: function(){
			console.log('I showCount!', this.ui.div);
			this.ui.count.html( this.getCount() + ' шт.' );
		},
		getSum: function(){
			var sum = 0;
			var bascet = App.request('bascet:entities');
			bascet.forEach(function(el, i, arr){
				sum += parseInt( el.get('price'), 10 ) ;
			});

			return sum;
		},
		showSum: function(){
			this.ui.sum.html( this.getSum() + ' руб.' );
		}
	});
});