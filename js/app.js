var StockPortfolioSimulator = angular.module('StockPortfolioSimulator', ["oc.lazyLoad", 'ui.router'])

	.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/");

		$stateProvider
		.state('trade', {
			url: '/trade',
			templateUrl: "js/templates/trade.html",
			resolve: {
				deps: ["$ocLazyLoad", 
					function($ocLazyLoad){
						return $ocLazyLoad.load('js/controllers/trade_controller.js');
					}
				]
			}
		})
		.state('transactions', {
			url: '/transactions',
			templateUrl: "js/templates/transactions.html",
			resolve: {
				deps: ["$ocLazyLoad",
					function($ocLazyLoad){
						return $ocLazyLoad.load('js/controllers/transactions_controller.js');
					}
				]
			}
		})
		.state('portfolio', {
			url: '/portfolio',
			templateUrl: "js/templates/portfolio.html",
			resolve: {
				deps: ["$ocLazyLoad",
					function($ocLazyLoad){
						return $ocLazyLoad.load('js/controllers/portfolio_controller.js');
					}
				]
			}
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
