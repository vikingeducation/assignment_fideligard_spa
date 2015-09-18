var tradeApp = angular.module('tradeApp', ['ui.router']);


tradeApp.config(function(
                          $stateProvider,
                          $urlRouterProvider){

  $urlRouterProvider.otherwise("/");

  $stateProvider.state('report',{
    url: '/',

    resolve: {
      stockData : ['tradeYahooService',
      function(tradeYahooService){ tradeYahooService.getStock();}]
    },

    views:{

        'stocks': {
        templateUrl: 'javascript/templates/stocks.html',
        controller: 'tradeCtrl'
        },

       'portfolio': {
        templateUrl: 'javascript/templates/portfolio.html',
        controller: 'portfolioCtrl'
        }
      }

  });

  $stateProvider.state('portfolio.trade',{
    url: '/trade',
    templateUrl: 'javascript/templates/trade.html'
  });

});

