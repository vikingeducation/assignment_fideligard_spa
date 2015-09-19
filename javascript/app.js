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
  });

});

// Error Handling
tradeApp.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});







