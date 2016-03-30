var fideligard = angular.module('fideligard', ['ui.router']);

fideligard.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("");
  $stateProvider
    .state('dashboard',{
      url: '',
      views: {
        '': {
          templateUrl: 'js/templates/landing.html'
        },
        'stocks': {
          templateUrl: 'js/templates/stocks.html',
          controller: 'stockCtrl'
        },
        'datePicker': {
          templateUrl: 'js/templates/datePicker.html'
        }
      }
    });
    // .state('dashboard.trade', {
    //   url: '',
    //   template: '<h1>Trade</h1>',
    //   controller: 'tradeCtrl'
    // });
});
