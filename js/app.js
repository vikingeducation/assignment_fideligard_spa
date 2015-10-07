var fideligard = angular.module('fideligard', ['ui.router', 'ui.bootstrap']);


fideligard.config( function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/fi/panels");

  $stateProvider
  .state('fideligard', {
    url: '/fi',
    templateUrl: 'js/templates/fideligard.html',
    controller: function($scope){ console.log("main") }
  })

  .state('fideligard.panels', {
    url: '/panels',
    views: {
      'datepicker': {
        templateUrl: 'js/templates/datepicker.html',
        controller: function($scope){ console.log("datepicker") }
      },
      'stocks': {
        templateUrl: 'js/templates/stocks.html',
        controller: function($scope){ console.log("stocks") }
      },
      'trade': {
        templateUrl: 'js/templates/main/trade.html',
        controller: function($scope){ console.log("trade") }
      },
      'transactions': {
        templateUrl: 'js/templates/main/transactions.html',
        controller: function($scope){ console.log("transactions") }
      },
      'portfolio': {
        templateUrl: 'js/templates/main/portfolio.html',
        controller: function($scope){ console.log("portfolio") }
      }
    }
  })


});


// ADDING ERROR HANDLING
fideligard.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});