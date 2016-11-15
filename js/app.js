var StockPortfolioSimulator = angular.module('StockPortfolioSimulator', ['ui.router'])

	.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/");

		$stateProvider
		.state('trade', {
			url: '/trade',
			templateUrl: "js/templates/trade.html",
			controller: "TradeController"
		})
		.state('transactions', {
			url: '/transactions',
			templateUrl: "js/templates/transactions.html",
			controller: "TransactionsController"
		})

	});

StockPortfolioSimulator.factory('_', ['$window', function($window){
	return $window._;
}]);

StockPortfolioSimulator.factory('moment', ['$window', function($window){
	return $window.moment;
}])

// ADDING ERROR HANDLING
StockPortfolioSimulator.run(['$rootScope', function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
}]);
