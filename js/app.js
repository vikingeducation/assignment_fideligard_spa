var StockApp = angular.module("StockApp", ['ui.router']);




StockApp.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/");


  $stateProvider
    .state('main', {
      url: "",
      views: {
        "@": {
          templateUrl: "/js/templates/portfolio.html",
          controller: "PortfolioCtrl"
        },
        'stocks@': {
          templateUrl: "/js/templates/stocks.html",
          controller: "StocksCtrl"
        },

        'datepicker@': {
          templateUrl: "/js/templates/datepicker.html",
          controller: "DatePickerCtrl"
        }
      }
    })

    .state("main.stocks", {
      url: "/stocks/:id",
      views: {
        "@": {
          templateUrl: "js/templates/stock.html"
        }
      }
    })
    
    

});




















StockApp.factory('_', ['$window', function($window) {
  return $window._; 
}]);