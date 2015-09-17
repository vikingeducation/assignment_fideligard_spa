var fideligard = angular.module('fideligard', ['ui.router']);


fideligard.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/home');

  $stateProvider

    .state('home', {
      url: '/home',
      templateUrl: 'templates/home.html',
      controller: "homeCtrl"
    });
});
