
var stocks = angular.module('fideligard', ['ui.router']);

stocks.config(function($stateProvider, $urlRouterProvider) {

 /// config here
  $urlRouterProvider.otherwise('/stocks');

  $stateProvider

  .state( 'stocks', {
    url: '/stocks',
    controller: 'StocksCtrl',
    views: {
      slider: {
        templateUrl: '/templates/stocks/slider.html',
        controller: 'SliderCtrl'
      },
      stocksWindow: {
        templateUrl:'/templates/stocks/stocksWindow.html',
        controller: 'StocksWindowCtrl'
      },
    }
  })

 .state('stocks.portfolio', {
    url: '/portfolio',
    controller: 'PortfolioCtrl',
    template: "<div></div>",
 })

 .state( 'stocks.trade', {
    url: '/trade',
    controller: 'TradeCtrl',
    template: "<div></div>",
 })

 .state( 'stocks.transactions', {
    url: '/transactions',
    controller: 'TransactionCtrl',
    template:  "<div></div>",
 });


});

