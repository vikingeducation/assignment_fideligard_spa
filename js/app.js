var app = angular.module('fideligard', ['ui.router']);

app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});


app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('stocks', {
      url: '',
      views: {
        'date': {
          templateUrl: 'js/templates/date.html',
          controller: 'StocksCtrl'
        },
        'ticker': {
          templateUrl: 'js/templates/ticker.html',
          controller: 'StocksCtrl'
        },
        'main': {
          templateUrl: 'js/templates/main.html'
        }
      },
      resolve: {
        stocks: ['StockService', function(StockService){
          return StockService.getStocks();
        }],
        dates: ['StockService', function(StockService){
          return StockService.allDates();
        }]
      }
    })

    .state('stocks.portfolio', {
      url: '/portfolio',
      views: {
        "main@" : {
          templateUrl: 'js/templates/portfolio.html',
          controller: 'PortfolioCtrl'
        }
      }
    })
    .state('stocks.trade', {
      url: '/trade/:stock',
      params: {
        symbol: null,
        price: null,
        date: null
      },
      views: {
        "main@" : {
          templateUrl: 'js/templates/trade.html',
          controller: 'TradeCtrl'
        }
      }
    })
    .state('stocks.transactions', {
      url: '/transactions',
      views: {
        "main@" : {
          templateUrl: 'js/templates/transactions.html',
          controller: 'TransactionsCtrl'
        }
      }
    })

});
