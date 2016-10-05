var StockApp = angular.module("StockApp", ['ui.router']);


angular.module("StockApp").controller("StocksCtrl", ['$scope', 'stockService', 'dateService', function($scope, stockService, dateService){
  
  //commented out APPL warm up 
  // stockService.getAPPL().then(function(appleData){
  //   $scope.days = appleData.query.results.quote;
  //   $scope.data = appleData;
  //   foo = dateService.selectedDate;
  //   $scope.selectedDate = dateService.selectedDate;
    
  //   $scope.apple = stockService.findDateForDay("APPL", $scope.selectedDate);

  //   $scope.appleOne = stockService.findChange("APPL", $scope.selectedDate, 1);
  //   $scope.appleSeven = stockService.findChange("APPL", $scope.selectedDate, 7);
  //   $scope.appleThirty = stockService.findChange("APPL", $scope.selectedDate, 30);

  // });
  $scope.tickerFilter = "";
  
  $scope.selectedDate = dateService.selectedDate;



  $scope.$watch(function(){
    return dateService.selectedDate;
  }, function(newDate){
    $scope.selectedDate = newDate;

    $scope.stocks = stockService.stocksByDate($scope.selectedDate);
  });
  
  
  //$scope.currentStocks = stockService.allStocksByDay($scope.selectedDate);
 stockService.getStocks();
 $scope.stocks = stockService.stocksByDate($scope.selectedDate);
  
  

}])


StockApp.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise("/");


  $stateProvider
    .state('main', {
      url: "",
      views: {
        "@": {
          templateUrl: "/js/templates/portfolio.html",
          controller: "PortfolioCtrl"
        },
        'stocks@': {
          templateUrl: "/js/templates/stocks.html",
          controller: "StocksCtrl"
        },

        'datepicker@': {
          templateUrl: "/js/templates/datepicker.html",
          controller: "DatePickerCtrl"
        },

        'statepicker@': {
          templateUrl: "/js/templates/statepicker.html",
          controller: "StateCtrl"
        }

      }
    })//end main state

    .state("main.transactions", {
      url: "/transactions",
      views: {
        "@": {
          templateUrl: "js/templates/transactions.html",
          controller: "TransactionsCtrl"
        }
      }
    })

    .state("main.trade", {
      url: "/trade/:symbol/:price",
      views: {
        "@": {
          templateUrl: "js/templates/trade.html",
          controller: "TradeCtrl"
        }
      }
    })
    
    

});






StockApp.factory('_', ['$window', function($window) {
  return $window._; 
}]);




StockApp.run(function($rootScope){
  $rootScope.$on("$stateChangeError", console.log.bind(console));
});