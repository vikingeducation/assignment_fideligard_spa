var app = angular.module('fideligard', ['ui.router']);

app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});

app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/trade');

  $stateProvider
    .state('stocks', {
      abstract: true,
      views: {
        'date': {
          templateUrl: 'js/templates/date.html',
          controller: 'StocksDateCtrl'
        },
        'index': {
          templateUrl: 'js/templates/index.html',
          controller: 'StocksIndexCtrl'
        }
      },
      resolve: {
        date: ['DateService', function(DateService){
          return DateService.getDateInfo();
        }],
        stocksObj: ['StockService', function(StockService){
          return StockService.queryStocks();
        }]
      }
    })
    .state('stocks.trade', {
      url: '/trade',
      views: {
        'trade@': {
          templateUrl: 'js/templates/trade.html',
          controller: 'StocksTradeCtrl'
        }
      }
    })
    .state('stocks.transactions', {
      url: '/transactions',
      views: {
        'transactions@': {
          templateUrl: 'js/templates/transactions.html',
          controller: 'StocksTransactionsCtrl'
        }
      }
    })
    .state('stocks.portfolio', {
      url: '/portfolio',
      views: {
        'portfolio@': {
          templateUrl: 'js/templates/portfolio.html',
          controller: 'StocksPortfolioCtrl'
        }
      }
    });

});
