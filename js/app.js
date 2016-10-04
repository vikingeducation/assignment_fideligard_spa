"use strict";
var app = angular.module('stocks', ['ui.router']);

//lodash
app.factory('_', ['$window', function($window){
  return $window._;
}]);

app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});

//routes
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/fideligard');

	$stateProvider
		.state('main', {
			url: '/fideligard',
			views: {
				'stocksTicker':{
					templateUrl: 'js/templates/stocksTicker.html',
					controller: "StocksCtrl"
				},
				'dateSlider':{
					templateUrl: 'js/templates/introOptions.html',
					controller: 'IntroCtrl'
				},
				'mainContent':{
					templateUrl: 'js/templates/portfolio.html',
					controller: 'PortfolioCtrl'
				}
			},
      resolve: {
        date: function(dateService) {
          return dateService.getDate();
        },
        stocks: function(StocksService){
          return StocksService.all();
        },
        dates: ['stocks', 'StocksService', function(stocks, StocksService){
          return StocksService.getDateCollection();
        }]
      }
		})
		.state('main.portfolio', {
			url: '/portfolio',
			views:{
				'dateSlider@': {
					templateUrl: 'js/templates/dateSlider.html',
					controller: "DateCtrl"
				}
			}
		})
		.state('main.portfolio.trade', {
			url: '/trade',
			params: {symbol: ''},
			views: {
				'mainContent@':{
					templateUrl: 'js/templates/trade.html',
					controller: 'TradeCtrl'
				}
			}
			
		})
		.state('main.portfolio.transactions', {
			url: '/transactions',
			views: {
				'mainContent@': {
					templateUrl: 'js/templates/transactions.html',
					controller: 'TransactionsCtrl'
				}
			}
		});

}]);
