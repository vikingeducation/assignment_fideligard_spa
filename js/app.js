var StockPortfolioSimulator = angular.module('StockPortfolioSimulator', ['ui.router'])

	.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/");

		$stateProvider.state('trade', {
			url: '/trade/:id',
			templateUrl: "js/templates/trade.html"
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
