var fideligard = angular.module('fideligard', ['ui.router']);

fideligard.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("");
  $stateProvider
    .state('dashboard',{
      url: '',
      views: {
        'stocks': {
          templateUrl: 'js/templates/stocks.html',
          controller: function() {}
        },
        'datePicker': {
          templateUrl: 'js/templates/datePicker.html',
          controller: 'dateCtrl'
        }
      }
    });
});
