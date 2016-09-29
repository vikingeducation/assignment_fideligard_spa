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
