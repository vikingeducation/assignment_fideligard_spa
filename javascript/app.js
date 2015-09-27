var tradeApp = angular.module('tradeApp', ['ui.router']);


tradeApp.config(function( $stateProvider,
                          $urlRouterProvider){

  $urlRouterProvider.otherwise('/simulator');

  $stateProvider.state('index', {
    url: '/',

    resolve: {
      stockData: function(stockDataService){
        stockDataService.getStocksFromYahoo();
      }
    },

    views:{
      'stocks': {
        templateUrl: 'javascript/templates/stocks.html',
        controller: 'stocksCtrl'
        },

      'datePicker': {
        templateUrl: 'javascript/templates/datePicker.html',
        controller: 'datePickerCtrl'
      },

      '': {
        templateUrl: 'javascript/templates/index.html'
      }

    }
  });

  $stateProvider.state('index.simulator',{
    url: 'simulator',
    templateUrl: 'javascript/templates/simulator.html',
    controller: 'simCtrl'
  });

  $stateProvider.state('index.simulator.trade',{
    url: '/trade/:symbol?price?date',
    templateUrl: 'javascript/templates/trade.html',
    controller: 'tradeCtrl'
  });

  $stateProvider.state('index.simulator.transactions',{
    url: '/transactions',
    templateUrl: 'javascript/templates/transactions.html',
    controller: 'transactionCtrl'
  });


  $stateProvider.state('index.simulator.portfolio',{
    url: '/portfolio',
    templateUrl: 'javascript/templates/portfolio.html',
    controller: 'portfolioCtrl'
  });

});

// Error Handling
tradeApp.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});







