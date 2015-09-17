var tradeApp = angular.module('tradeApp', ['ui.router']);


tradeApp.config(function(
                          $stateProvider,
                          $urlRouterProvider){

  $urlRouterProvider.otherwise("/index");

  $stateProvider.state('index',{
    views:{

      'stocks': {
      templateUrl: 'javascript/partials/stocks.html',
      controller: 'tradeCtrl'
      },

     'portfolio': {
      templateUrl: 'javascript/partials/portfolio.html',
      controller: 'tradeCtrl'
      }

    }
  });

});