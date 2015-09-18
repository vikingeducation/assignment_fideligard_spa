var fideligard = angular.module('fideligard', ['ui.router']);


fideligard.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/home');

  $stateProvider

    // .state('home', {
    //   url: '/home',
    //   views: {
    //     'ticker': {templateUrl: 'templates/home/ticker.html',
    //                controller: 'tickerCtrl'},
    //     // 'portfolio': {templateUrl: 'templates/home/portfolio.html'}
    //   }
    // })

    .state('home',{
      url: '/home',
      views: {
        '': {templateUrl: 'templates/trade/trade.html',
                  controller: 'tradeCtrl'},
        'ticker': {templateUrl: 'templates/home/ticker.html',
                   controller: 'tickerCtrl'},
      }
    });
});
