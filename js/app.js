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
          return DateService.getDate();
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
          templateUrl: 'js/templates/trade.html'
        }
      }
    });

});
