var app = angular.module("app", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/index');

  $stateProvider.state('index', {
    url: '/index',
    views: {
      'index': {
        templateUrl: 'js/templates/index.html',
        controller: 'MainCtrl'
      },
      'historical': {
        templateUrl: 'js/templates/historical.html',
        controller: 'MainCtrl'
      }
    }
  })
})
