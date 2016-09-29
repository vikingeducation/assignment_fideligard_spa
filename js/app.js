"use strict";
var app = angular.module('stocks', ['ui.router']);

//routes
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/fideligard');

	$stateProvider
		.state('main', {
			url: '/fideligard',
			views: {
				'stocksTicker':{
					templateUrl: 'js/templates/stocksTicker.html'
				},
				'dateSlider':{
					templateUrl: 'js/templates/dateSlider.html',
					controller: "MainCtrl"
				},
				'mainContent':{
					templateUrl: 'js/templates/mainContent.html'
				}
			},
      resolve: {
        date: function(dateService) {
          return dateService.getDate();
        }
      }

		})
		.state('main.portfolio', {
			url: '/portfolio',
			templateUrl: 'js/templates/portfolio.html',
			controller: 'PortfolioCtrl'
		})
		.state('main.trade', {
			url: '/trade',
			templateUrl: 'js/templates/trade.html',
			controller: 'TradeCtrl'
		})
		.state('main.transactions', {
			url: '/transactions',
			templateUrl: 'js/templates/transactions.html',
			controller: 'TransactionsCtrl'
		});

}]);
