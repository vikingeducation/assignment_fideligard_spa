var StockPortfolioSimulator = angular.module('StockPortfolioSimulator', ['ui.router'])

	.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/");

	})

StockPortfolioSimulator.constant('_', 
	window._
);