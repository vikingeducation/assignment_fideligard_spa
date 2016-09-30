var fideligard = angular.module("fideligard", ['ui.router']);

Fideligard.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('dashboard')

  $stateProvider.state('dashboard', {
    url: 'dashboard',
    views: {
      'stocks': {
        templateUrl: 'stocks.html',
        controller: 'StocksCtrl'
      },
      'datepicker': {
        templateUrl: 'date_picker.html',
        controller: 'DatePickerCtrl'
      }
    }
  }).state('dashboard.trade', {


  })

});
