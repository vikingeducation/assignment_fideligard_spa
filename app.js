var fideligard = angular.module('fideligard', ['ui.router', 'ngMaterial']);

fideligard.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('dashboard');

  $stateProvider
  .state('fideligard',
    { url: '/',
      templateUrl: 'dashboard.html',
      controller: 'DashboardCtrl'
  })
  .state('fideligard.dashboard', {
    url: 'dashboard',
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
  })
  .state('fideligard.dashboard.trade', {
    url: '/trade?symbol?price?date',
    views: {
      '@fideligard': {
        controller: 'TradeCtrl',
        templateUrl: 'templates/trade.html'        
      }
    }
  })
  .state('fideligard.dashboard.transactions', {
    url: '/transactions',
    views: {
      '@fideligard': {
        templateUrl: "templates/transactions.html",
        controller: "TransactionsCtrl"
      }
    }

  })



});



// debug
fideligard.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
