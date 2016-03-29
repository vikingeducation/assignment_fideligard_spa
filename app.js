var stocks = angular.module( 'Stocks', ['ui-router']);


store.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/stocks");

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

  .state('stocks.portfolio',
    {
      url: "/trading",
      templateUrl: "templates/trading.html",
      controller: 'StocksCtrl'
    })

  .state('stocks.portfolio',
    {
      url: "/transactions",
      templateUrl: "templates/transactions.html",
      controller: 'StocksCtrl'
    })

});
