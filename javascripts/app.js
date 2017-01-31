var fideligard = angular.module('fideligard', ['ui.router']);

fideligard.config(function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('dashboard', {
      url: "/",
      views: {
        'dateSlider': {
          templateUrl: '/javascripts/templates/dateSlider.html',
          controller: 'TimeCtrl',
        }, 'dailyStockListing': {
          templateUrl: '/javascripts/templates/dailyStockListing.html',
          controller: 'StockCtrl'
        }, 'tradeCreator': {
          templateUrl: '/javascripts/templates/tradeCreator.html',
          controller: 'TradeCreatorCtrl'
        }, 'resources': {
          templateUrl: '/javascripts/templates/resources.html',
          controller: 'ResourceCtrl'
        }
      }
    });

});
