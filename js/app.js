var app = angular.module('fideligard', ['ui.router']);

app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});

app.factory('_', ['$window', function($window) {
  return $window._;
}]);

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
        'index': {
          templateUrl: 'js/templates/index.html',
          controller: 'StocksCtrl'
        }
      },
      resolve: {
        date: ['DateService', function(DateService){
          return DateService.getDate();
        }],
        stocks: ['StockService', function(StockService){
          return StockService.queryStocks();
        }]
      }
    });

});
