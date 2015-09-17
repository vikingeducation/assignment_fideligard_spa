var tradeApp = angular.module('tradeApp', ['ui.router']);


tradeApp.config(function(
                          $stateProvider,
                          $urlRouterProvider){

  $urlRouterProvider.otherwise("/");

  $stateProvider

  .state('parent',{
    url: '/',
    controller: 'tradeCtrl',
    views:{

        'stocks': {
        templateUrl: 'javascript/templates/stocks.html'
        

        },

       'portfolio': {
        templateUrl: 'javascript/templates/portfolio.html',
        
        }
      },
    resolve: {
      stockData : ['tradeYahooService', function(tradeYahooService){
              return tradeYahooService.getStock();
            }]
    }
  
  });

});

