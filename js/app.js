stocks = angular.module("stocks", ['ui.router'] );

stocks.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    .state('index', {
      url: '/',
      controller: function(){ console.log('anon index ctrl')},
      // templateUrl: 'index.html'
    })

    .state("simulator", {
      url: '/simulator',
      views: {
        'dateFilter': {
          templateUrl: "templates/date_filter.html",
          controller: 'stocksCtrl'
        },

        'stocks': {
          templateUrl: "templates/stocks.html",
          controller: 'stocksCtrl'
        },

        "":{
          templateUrl: "templates/simulator.html",
          controller: 'stocksCtrl'
        }
      }
    })

    .state("simulator.trade", {
      url: '/trade',
      templateUrl: 'templates/simulator/trade.html',
      controller: 'TradeCtrl'
    })

    .state("simulator.transaction", {
      url: '/transaction',
      templateUrl: 'templates/simulator/transaction.html',
      controller: 'TransactionCtrl'
    })

    .state("simulator.portfolio", {
      url: '/portfolio',
      templateUrl: 'templates/simulator/portfolio.html',
      controller: 'PortfolioCtrl'
    });

  $urlRouterProvider.otherwise('/');

});


stocks.filter('tickerFilter', function () {
  return function (items, search) {
    if (!search) return items;

    var result = {};
    for (var key in items) {
      if (key === search){
        result[key] = items[key];
      }
    }
    return result;
  };
});


// enable error handling
stocks.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});