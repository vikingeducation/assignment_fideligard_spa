var app = angular.module('FideligardApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {

  // $urlRouterProvider.otherwise("/");


  $stateProvider


});

// debugging
app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});