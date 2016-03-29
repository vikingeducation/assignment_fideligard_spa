var fideligard = angular.module('fideligard', ['ui.router', 'ngMaterial']);

fideligard.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
  .state('container',
    { url: '/',
      templateUrl: 'dashboard.html',
      controller: 'DashboardCtrl',
  })
  .state('container.content', {
    url: '',
    views: {
      'datepicker': {
        templateUrl: 'templates/datepicker.html',
        controller: 'DatePickerCtrl'
      },
      'stocks': {
        templateUrl: 'templates/stocks.html',
        controller: 'StocksCtrl'
      }
    }
  });




});



// debug
fideligard.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
