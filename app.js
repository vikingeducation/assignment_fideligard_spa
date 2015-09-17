var app = angular.module("app", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/index');

  $stateProvider.state('index', {
    url: '/index',
    templateUrl: 'js/templates/index.html',
    controller: 'MainCtrl',
  })
})
