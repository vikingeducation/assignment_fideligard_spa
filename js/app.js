var StockPortfolioSimulator = angular.module('StockPortfolioSimulator', ['ui.router'])

	.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/");

		$stateProvider.state('trade', {
			url: '/trade',
			template: "<h1>Cos I know</h1>"
		})

	})

StockPortfolioSimulator.constant('_', 
	window._
);

StockPortfolioSimulator.constant('moment', 
	window.moment
);