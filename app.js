var app = angular.module('Fildegard', ["ui.router"]);

app.factory('_', ['$window', function($window) {
  return $window._;
}]);

app.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('normal' , {
      url: '',
      views: {
        "dateWidget@": {
          templateUrl: "templates/normal/dateWidget.html",
          controller: "dateCtrl"
        } ,
        "stocksWidget@": {
          templateUrl: "templates/normal/stocksWidget.html",
          controller: "stocksCtrl"
        },
        "mainWidget@": {
          templateUrl: "templates/normal/mainWidget.html",
          controller: "mainCtrl"
        }
      },
      resolve: {
        stocks: ['stockService', function(stockService) {
            return stockService.getStocks();
          }
        ]
      }
    })
    .state('normal.portfolio', {
      url:'/portfolio',
      views: {
        "widget@normal": {
          templateUrl: "templates/portfolio.html",
          controller: "portfolioCtrl"
        }
      }
    })

    .state('normal.transactions', {
      url:'/transactions',
      views: {
        "widget@normal": {
          templateUrl: "templates/transactions.html",
          controller: "transactionsCtrl"
        }
      }
    })

    .state('normal.trade', {
      url: '/trade/:symb',
      views: {
        "widget@normal": {
          templateUrl: "templates/trade.html",
          controller: "tradeCtrl"
        }


      }
    })

    
});

app.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});
