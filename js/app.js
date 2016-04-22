var financialApp = angular.module( 'financialApp', ['ui.router'] );

financialApp.config( function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/portfolio");

  $stateProvider

  .state('stocks', {
      url: "",
      templateUrl: "templates/main.html",
      controller: 'StocksCtrl'
    })

  .state('stocks.portfolio', {
      url: "/portfolio",
      templateUrl: "templates/portfolio.html",
      controller: 'PortfolioCtrl'
    })

  .state('stocks.trading', {
      url: "/trading",
      templateUrl: "templates/trading.html",
      controller: 'TradingCtrl',
      params: {
        symbol: undefined,
      }
    })

  .state('stocks.transactions', {
      url: "/transactions",
      templateUrl: "templates/transactions.html",
      controller: 'TransactionsCtrl'
    })
});

financialApp.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
