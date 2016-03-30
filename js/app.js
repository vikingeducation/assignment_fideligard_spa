var fideligard = angular.module('fideligard', ['ui.router']);

fideligard.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("");
  $stateProvider
    .state('dashboard',{
      url: '',
      // finds the first child state where url is empty or matches the parent url, then sets it as default state automatically
      abstract: true,
      views: {
        // default templateUrl for dashboard, child routes go to ui-view tag INSIDE of this template
        '': {
          templateUrl: 'js/templates/swappable.html'
        },
        'stocks': {
          templateUrl: 'js/templates/stocks.html',
          controller: 'stockCtrl'
        },
        'datePicker': {
          templateUrl: 'js/templates/datePicker.html'
        },
      }
    })
    .state('dashboard.landing', {
      url: '',
      templateUrl: 'js/templates/landing.html'
    })
    .state('dashboard.trade', {
      url: '/trade',
      templateUrl: 'js/templates/trade.html',
      controller: 'tradeCtrl',
      params: {
        company: null,
        date: null,
        data: null
      }
    })
    .state('dashboard.transactions', {
      url: '/transactions',
      templateUrl: 'js/templates/transactions.html',
      controller: 'transactionCtrl'
    });
});
