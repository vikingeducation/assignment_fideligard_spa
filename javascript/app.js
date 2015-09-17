var tradeApp = angular.module('tradeApp', ['ui.router']);


tradeApp.config(function(
                          $stateProvider,
                          $urlRouterProvider){

  $urlRouterProvider.otherwise("/");

  $stateProvider

  .state('parent',{
    url: '/',
    views:{

      'stocks': {
       
      templateUrl: 'javascript/templates/stocks.html',
      controller: 'tradeCtrl'
      },

     'portfolio': {
      
      templateUrl: 'javascript/templates/portfolio.html',
      controller: 'tradeCtrl'
      }

    }
  
  });

});

