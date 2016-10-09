StockApp.controller("PortfolioCtrl", ['$scope', 'portfolioService', 'transactionService', 'dateService', '$timeout', function($scope, portfolioService, transactionService, dateService, $timeout){
  
  $scope.cash = portfolioService.availableCash();
  
  //sync date
  $scope.selectedDate = dateService.selectedDate;
  $scope.$watch(function(){
    return dateService.selectedDate;
  }, function(newDate){
    $scope.selectedDate = newDate;

  });



  //wait to do this stocks have to load for current price
  var initializing = true;
  $scope.$watch(function(){
    if(initializing){
      $timeout(function(){ initializing = false; }, 5000);
    } else {
      return dateService.selectedDate;
    }
  }, function(newDate){
    $scope.portfolio = portfolioService.buildPortfolio($scope.selectedDate);
  });


  

  //get portfolio before date


}]);



