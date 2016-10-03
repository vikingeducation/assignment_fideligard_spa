var fideligardApp = angular.module('fideligardApp',
                                   ['ui.router', 'ui.bootstrap']);

fideligardApp.factory("_", ["$window", function($window) {
  return $window._
}])


fideligardApp.config(function($urlRouterProvider, $stateProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      views: {
        'datepicker@': {
          templateUrl: 'templates/datepicker.html',
          controller: 'datepickerCtrl'
        },
        'stocks-panel@': {
          templateUrl: 'templates/stocks.html',
          controller: 'stocksPanelCtrl'
        },
        'tradeWrapper': {
          templateUrl: 'templates/_trade.html',
        }
      }
    })

    .state("main.trades", {
      url: "/trades/:symbol/",
      templateUrl: 'templates/trade.html',
      controller: 'tradePanelCtrl'
    })

    .state("main.transactions", {
      url: "/transactions",
      templateUrl: "templates/transactions.html", 
      controller: "transactionsPanelCtrl"
    })

});


// ERROR HANDLING
fideligardApp.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
