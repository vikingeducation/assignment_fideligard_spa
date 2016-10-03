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
          controller: 'StockCtrl'
        },
        'datepicker@': {
          templateUrl: '/app/templates/slider.html',
          controller: 'DatePickerCtrl'
        }
      },
      resolve: {
        stocks: ['StockService', function(StockService) {
            return StockService.getAllStocks();
          }
        ],
        date: ['DateService', function(DateService) {
          DateService.setDate(1439784000000);
          return DateService.getDate().time;
        }]
      }
    })
  }
]);

fideligard.run(function($rootScope) {
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
