App.module('Entities', function( Entities, App,
Backbone, Marionette, $, _){
	Entities.MyModel = Backbone.Model.extend({});

	Entities.Coll = Backbone.Collection.extend({
		model: Entities.MyModel,
		localStorage: new Backbone.LocalStorage('MyStorage')
	});

	Entities.TableModel = Backbone.Model.extend({});
	Entities.TableColl = Backbone.Collection.extend({
		model: Entities.TableModel
	});

	Entities.BascetModel = Backbone.Model.extend({});
	Entities.BascetColl = Backbone.Collection.extend({
		model: Entities.BascetModel
	});

	var bascet;

	table1 = new Entities.TableColl([
		{id: 1, value: 'a1', price: 10},
		{id: 2, value: 'b1', price: 12},
		{id: 3, value: 'c1', price: 10}
	]);
	
	table2 = new Entities.TableColl([
		{id: 1, value: 'a2', price: 10},
		{id: 2, value: 'b2', price: 12},
		{id: 3, value: 'c2', price: 10},
		{id: 4, value: 'd2', price: 13},
		{id: 5, value: 'e2', price: 10},
		{id: 6, value: 'f2', price: 14}
	]);
	table3 = new Entities.TableColl([
		{id: 1, value: 'a3', price: 10},
		{id: 2, value: 'b3', price: 12},
		{id: 3, value: 'c3', price: 10},
		{id: 4, value: 'd3', price: 13},
		{id: 5, value: 'e3', price: 10},
		{id: 6, value: 'f3', price: 14},
		{id: 7, value: 'a4', price: 10},
		{id: 8, value: 'b4', price: 12},
		{id: 9, value: 'c4', price: 10},
		{id: 10, value: 'd4', price: 13},
		{id: 11, value: 'e4', price: 10},
		{id: 12, value: 'f4', price: 14}
	]);


	var InitializeLists = function(){
		var lists = new Entities.Coll([
			{id: 1, value: 'Наименование 1', collection: table1},
			{id: 2, value: 'Наименование 2', collection: table2},
			{id: 3, value: 'Наименование 3', collection: table3}
		]);
		lists.forEach(function(list){
			list.save();
		});

		return lists;
	};


	var InitializeBascet = function(){
		bascet = new Entities.BascetColl();
	};

	var Do = {
		getLists: function(){
			var lists = new Entities.Coll();
			lists.fetch()
				.fail(function(){
					console.log('Faild load storage');
				}).done(function(){
					console.log('Done load storage');
				});

				lists.length = 0;
			
			if ( lists.length === 0 ){
				console.log('LISTS 1', lists);
				return InitializeLists();
			}

			return lists;
		},
		getBascet: function(){
			if ( bascet === undefined ){
				InitializeBascet();
			}
			return bascet;
		}
	};

	App.reqres.setHandler('lists:entities', function(){
		return Do.getLists();
	});
	App.reqres.setHandler('bascet:entities', function(){
		return Do.getBascet();
	});

});