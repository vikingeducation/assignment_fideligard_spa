var app = angular.module('fideligard', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('stocks', {
      url: '/',
      views: {
        'date': {
          templateUrl: 'js/templates/date.html',
          controller: 'StocksCtrl'
        },
        'index': {
          templateUrl: 'js/templates/index.html',
          controller: 'StocksCtrl',
          resolve: {
            stocks: ['StockService', function(StockService){
              return StockService.all();
            }]
          }
        }
      },
      controller: 'StocksCtrl',
      resolve: {
        date: ['DateService', function(DateService){
          return DateService.getDate();
        }]
      }
    });

});
