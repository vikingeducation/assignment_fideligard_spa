var app = angular.module('fideligard', ['ui.router']);

app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});


app.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider

    .state('stocks', {
      url: '/',
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

    .state('stocks.porfolio', {
      url: '/porfolio',
      templateUrl: 'js/templates/porfolio.html'
    })
    .state('stocks.trade', {
      url: '/trade',
      templateUrl: 'js/templates/trade.html'
    })
    .state('stocks.transactions', {
      url: '/transactions',
      templateUrl: 'js/templates/transactions.html'
    })

});
