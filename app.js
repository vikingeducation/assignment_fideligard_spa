var app = angular.module("app", ['ui.router', "ui.bootstrap"]);

app.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise('/index/portfolio');

  $stateProvider.state('index', {
    url: '/index',
    views: {
      'date-picker': {
        templateUrl: 'js/templates/datePicker.html',
        controller: 'MainCtrl'
      },
      'historical': {
        templateUrl: 'js/templates/historical.html',
        controller: 'historyCtrl'
      }
    }
  })
  .state("index.portfolio", {
    url: '/portfolio',
    views: {
      'display@': {
        templateUrl: "js/templates/portfolio.html",
        controller: "portfolioCtrl"
      }
    }
  })
  .state("index.trade", {
    url: '/trade/:symbol',
    views: {
      'display@': {
        templateUrl: "js/templates/trade.html",
        controller: "tradeCtrl"
      }
    }
  })
  .state("index.transaction", {
    url: '/transaction',
    views: {
      'display@': {
        templateUrl: "js/templates/transactions.html",
        controller: "transactionCtrl"
      }
    }
  })
})
