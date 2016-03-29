var financialApp = angular.module( 'financialApp', ['ui.router']);


financialApp.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("portfolio");

  $stateProvider

  .state('stocks',
    {
      url: "",
      templateUrl: "templates/main.html",
      controller: 'StocksCtrl'
    })

  .state('stocks.portfolio',
    {
      url: "/portfolio",
      templateUrl: "templates/portfolio.html",
      controller: 'StocksCtrl'
    })

  .state('stocks.trading',
    {
      url: "/trading",
      templateUrl: "templates/trading.html",
      controller: 'StocksCtrl'
    })

  .state('stocks.transactions',
    {
      url: "/transactions",
      templateUrl: "templates/transactions.html",
      controller: 'StocksCtrl'
    })

});
