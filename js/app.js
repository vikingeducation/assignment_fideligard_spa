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
        'ticker': {templateUrl: 'templates/simulator/ticker.html',
                   controller: 'tickerCtrl'},
        '': {templateUrl: 'simulator.html',
             controller: function(){console.log("here")}
            }
      }

    })

    .state('simulator.trade', {
      url: '/trade',
      templateUrl: 'templates/simulator/trade/trade.html',
      controller: 'tradeCtrl'
    });
});
