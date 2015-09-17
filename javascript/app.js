var tradeApp = angular.module('tradeApp', []);


tradeApp.config(function($stateProvider, $urlRouterProvider){

  $urlRouteProvider.otherwise("/index");

  $stateProvider.state('main-page',{
    views:{

      'stocks': {
      templateUrl: 'js/templates/stocks.html',
      controller: 'tradeCtrl'
      },

     'portfolio': {
      templateUrl: 'js/templates/portfolio.html',
      controller: 'tradeCtrl'
      }
    }
  });

});