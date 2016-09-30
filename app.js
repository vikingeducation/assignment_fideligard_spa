var Fideligard = angular.module('Fideligard', ['ui.router']);

Fideligard.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("");

  $stateProvider.state('dashboard', {
    url: '',
    views: {
      'range@': {
        templateUrl: 'templates/range.html',
        controller: 'RangeCtrl'
      },

      'stocks@': {
        templateUrl: 'templates/stocks.html',
        controller: 'StocksCtrl'
      }
    }
  })

  .state('dashboard.portfolio', {
    url: '/portfolio',
    views: {
      '@': {
        templateUrl: 'templates/portfolio.html'
      }
    }
  })

  .state('dashboard.transaction', {
    url: '/transaction',
    views: {
      '@': {
        templateUrl: 'templates/transaction.html',
        controller: 'TransactionCtrl'
      }
    }
  })

  .state('dashboard.trade', {
    url: '/:sym',
    views: {
      '@': {
        templateUrl: 'templates/trade.html',
        controller: 'TradeCtrl'
      }
    }
  });

}]);