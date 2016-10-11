var StockPortfolioSimulator = angular.module('StockPortfolioSimulator', ['ui.router'])

	.config(function($stateProvider, $urlRouterProvider){

		$urlRouterProvider.otherwise("/");

		$stateProvider.state('trade', {
			url: '/trade',
			templateUrl: "js/templates/trade.html"
		})

	})

StockPortfolioSimulator.constant('_', 
	window._
);

StockPortfolioSimulator.constant('moment', 
	window.moment
);

// ADDING ERROR HANDLING
StockPortfolioSimulator.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
