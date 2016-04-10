var simulator = angular.module( 'simulator', ['ui.router', 'ui.validate', 'ui.bootstrap'] );

simulator.config( function($stateProvider, $urlRouterProvider ){

  $urlRouterProvider.otherwise('/portfolio');

  $stateProvider
    .state('main', {
      abstract: true,
      url: '',
      views: {
        'date': {
          templateUrl: 'js/templates/_date.html',
          controller: 'DateCtrl'
        },
        'stocks': {
          templateUrl: 'js/templates/_stocks.html',
          controller: 'StockPricesCtrl'
        },
        'main': {
          templateUrl: 'js/templates/_mainWrapper.html',
        }
      },
      resolve: {
        init: function( stockPrices ){
          return stockPrices.init();
        }
      }
    })

    .state('Portfolio', {
      parent: 'main',
      url: '/portfolio',
      templateUrl: 'js/templates/main/_portfolio.html'
    })

    .state('Trade', {
      parent: 'main',
      url: '/trade',
      templateUrl: 'js/templates/main/_trade.html',
      controller: 'TradeCtrl',
      params: {symbol: undefined, date: undefined}
    })

    .state('Transactions', {
      parent: 'main',
      url: '/transactions',
      templateUrl: 'js/templates/main/_transactions.html',
      controller: 'TransactionsCtrl',
      params: {newIdx: undefined}
    });

});