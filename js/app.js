var StockSimulator = angular.module('StockSimulator', ['ui.router', 'ui.bootstrap', 'rzModule']);

StockSimulator.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('dashboard', {
			url: '/',
			views: {
				'stocks@': {
					templateUrl: 'js/templates/stocks.html',
					controller: 'stocksCtrl'
				},
				'datePicker@': {
					templateUrl: 'js/templates/datePicker.html',
					controller: 'dateCtrl'
				}
			}
		})
		.state('dashboard.trade', {
			url: 'trade/:id',
			views: {
				'trade@': {
					templateUrl: "js/templates/trade.html",
					controller: 'tradeCtrl'
				}
			}
		})
		.state('dashboard.transaction', {
			url: 'transaction',
			views: {
				'transaction@': {
					templateUrl: "js/templates/transaction.html",
					controller: 'transactionCtrl'
				}
			}
		})
		.state('dashboard.portfolio', {
			url: 'portfolio',
			views: {
				'portfolio@': {
					templateUrl: 'js/templates/portfolio.html',
					controller: 'portfolioCtrl'
				}
			}
		})
});
