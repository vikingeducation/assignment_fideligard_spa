var fideligard = angular.module('fideligard', ['ui.router']);


fideligard.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/simulator');

  $stateProvider

    // .state('home', {
    //   url: '/home',
    //   views: {
    //     'ticker': {templateUrl: 'templates/home/ticker.html',
    //                controller: 'tickerCtrl'},
    //     // 'portfolio': {templateUrl: 'templates/home/portfolio.html'}
    //   }
    // })

    .state('simulator',{
      url: '/simulator',
      views: {
        'ticker': {
          templateUrl: 'templates/simulator/ticker.html',
          controller: 'tickerCtrl'},
        'date-slider': {
          templateUrl: 'templates/simulator/slider.html',
          controller: 'dateCtrl'},
        '': {
          templateUrl: 'templates/simulator/simulator.html',
          controller: 'simulatorCtrl'
            }
      }

    })

    .state('simulator.trade', {
      url: '/trade',
      templateUrl: 'templates/simulator/trade/trade.html',
      controller: 'tradeCtrl'
    })

    .state('simulator.portfolio', {
      url: '/portfolio',
      templateUrl: 'templates/simulator/portfolio.html',
      controller: 'portfolioCtrl',
    })

    .state('simulator.transactions', {
      url: '/transactions',
      templateUrl: 'templates/simulator/transactions.html',
      controller: 'transactionsCtrl',
    });
});
