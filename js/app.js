var fideligard = angular.module('fideligard', ['ui.router', 'ui.bootstrap']);


fideligard.config( function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise("/fi/s/trade");

  $stateProvider
  .state('fideligard', {
    url: '/fi',
    views: {
      '': {
        templateUrl: 'js/templates/fideligard.html',
        controller: 'MainCtrl'
      }
    }
  })


  .state('fideligard.shared', {
    url: '/s',
    views: {
      'datepicker': {
        templateUrl: 'js/templates/datepicker.html',
        controller: 'DatePickerCtrl'
      },
      'stocks': {
        templateUrl: 'js/templates/stocks.html',
        controller: 'StocksCtrl'
      },
      'main': {
        templateUrl: 'js/templates/main/main.html',
        controller: function($scope){ console.log("main base") }
      }
    }
  })


  .state('fideligard.shared.trade', {
    url: '/trade/:symbol',
    views: {
      '': {
        templateUrl: 'js/templates/main/trade.html',
        controller: 'TradeCtrl'
      }
    }
  })

  .state('fideligard.shared.transactions', {
    url: '/transactions',
    views: {
      '': {
        templateUrl: 'js/templates/main/transactions.html',
        controller: function($scope){ console.log("transactions") }
      }
    }
  })

  .state('fideligard.shared.portfolio', {
    url: '/portfolio',
    views: {
      '': {
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