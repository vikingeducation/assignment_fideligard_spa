var fideligard = angular.module("fideligard", ['ui.router']);

fideligard.factory('_', [
  '$window',
  function($window) {
    return $window._;
  }
]);

fideligard.config([
  '$stateProvider',
  '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/')

    $stateProvider.state('dashboard', {
      url: '/',
      views: {
        'stocks@': {
          templateUrl: '/app/templates/stocks.html',
          controller: 'StocksCtrl'
        },
        'datepicker@': {
          templateUrl: '/app/templates/slider.html',
          controller: 'DatePickerCtrl'
        }
      }
    })
  }
]);

fideligard.run(function($rootScope) {
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
