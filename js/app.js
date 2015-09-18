stocks = angular.module("stocks", ['ui.router'] );

stocks.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider

    // .state('index', {
    //   url: '/',
    //   controller: function(){ console.log('anon index ctrl')},
    //   templateUrl: 'index.html'
    // })

    .state("simulator", {
      url: '/simulator',
      templateUrl: 'templates/simulator.html',
      controller: function(){ console.log('anon sim ctrl')} //,
      // views: {
      //   'dateFilter': {
      //     templateUrl: "templates/date_filter.html",
      //     controller: 'stocksCtrl'
      //   },

      //   'stocks': {
      //     templateUrl: "templates/stocks.html",
      //     controller: 'stocksCtrl'
      //   }
      // }
    })

    .state("simulator.index", {
      url: '/index',
      // templateUrl: 'templates/'
      // controller: function(){ console.log('anon sim ctrl')},
      views: {
        'dateFilter': {
          templateUrl: "templates/date_filter.html",
          controller: 'stocksCtrl'
        },

        'stocks': {
          templateUrl: "templates/stocks.html",
          controller: 'stocksCtrl'
        }
      }
    })

    .state("simulator.index.trade", {
      url: '/trade',
      templateUrl: 'templates/simulator/trade.html',
      // controller: function(){ console.log('anon sim ctrl')} //,

      controller: 'TradeCtrl' //,
      // views: {
      //   'main': {
      //     templateUrl: "templates/simulator/trade.html",
      //     controller: 'stocksCtrl'
      //   }
      // }
    })

    .state("simulator.index.transaction", {
      url: '/transaction',
      templateUrl: 'templates/simulator/transaction.html',
      controller: 'TransactionCtrl'
    })

    .state("simulator.portfolio", {
      url: '/portfolio',
      templateUrl: 'templates/simulator/portfolio.html',
      controller: 'PortfolioCtrl'
    });


  // $urlRouterProvider.otherwise('/simulator');

});

stocks.filter('tickerFilter', function () {
  return function (items, search) {
    if (!search) return items;

    var result = {};
    for (key in items) {
      if (key === search){
        result[key] = items[key];
      }
    };
    return result;
  };
});


// enable error handling
stocks.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});