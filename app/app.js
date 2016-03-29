var stocks = angular.module('stocks', ['ui.router']);

stocks.config(function($stateProvider, $urlRouterProvider) {

 /// config here
  $urlRouterProvider.otherwise('/stocks');

  $stateProvider

  .state( 'stocks', {
    url: '/stocks',
    controller: 'StocksCtrl',
    templateUrl: '/app/templates/stocks.html',
    // views: {
    //   'slider@stocks': {
    //     templateUrl: '/app/templates/stocks/slider.html',
    //     controller: 'SliderCtrl'
    //   },
    //   'stocksWindow@stocks': {
    //     templateUrl:'/app/templates/stocks/stocksWindow.html',
    //     controller: 'StocksWindowCtrl'
    //   },
    // }
  })

 .state('stocks.portfolio', {
    url: '/portfolio',
    controller: 'PortfolioCtrl',
    template: "<div>Portfolio</div>",
 })

 .state( 'stocks.trade', {
    url: '/trade',
    controller: 'TradeCtrl',
    template: "<div>Trade</div>",
 })

 .state( 'stocks.transactions', {
    url: '/transactions',
    controller: 'TransactionCtrl',
    template:  "<div>Transaction</div>",
 });


});

