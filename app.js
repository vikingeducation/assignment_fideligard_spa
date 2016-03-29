var fideligard = angular.module('fideligard', ['ui.router', 'ngMaterial']);

fideligard.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('dashboard', 
    { url: '',
      templateUrl: 'dashboard.html',
      controller: 'DashboardCtrl'
    })
  .state('stocks',
    { url: '/stocks',
      templateUrl: 'templates/stocks.html',
      controller: 'StocksCtrl'
    })



})



// debug
fideligard.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});