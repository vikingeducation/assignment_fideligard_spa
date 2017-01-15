var Fideligard = angular.module('Fideligard', ['ui.router', 'rzModule']);


// inject the services provided by ui-router
Fideligard.config(
  ['$stateProvider', '$urlRouterProvider',
  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('root', {
        url: '/',
        views: {
          dateSlider: {
            templateUrl: 'js/templates/_date_slider.html',
            controller: 'DateCtrl',
          },
          stockPanel: {
            templateUrl: 'js/templates/_stock_panel.html',
            controller: 'StockCtrl'
          },
          portfolioPanel: {
            templateUrl: 'js/templates/_portfolio_panel.html',
          },
        },
        resolve: {
          stocks: ['stockService', function(stockService) {
             return stockService.getAllStocks();
           }
          ],
          date: ['dateService', function(dateService) {
            return dateService.getCurrent();
          }]
        }
      })
      .state('root.trade', {
        url: 'trade/:symbol',
        views: {
          'portfolioPanel@' : {
            templateUrl: 'js/templates/_trade.html',
            controller: 'TradeCtrl',
          }
        },
      });
    }
  ]);

Fideligard.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});