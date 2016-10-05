StockApp.controller("PortfolioCtrl", ['$scope', 'portfolioService', 'transactionService', 'dateService', '$timeout', function($scope, portfolioService, transactionService, dateService, $timeout){
  
  
  
  //sync date
  console.log("loading");
  $scope.selectedDate = dateService.selectedDate;


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


  //seperate from the watcher above because this one doesn't need stocks to 
  //load
  $scope.$watch(function(){
    return dateService.selectedDate;
  }, function(newDate){
    $scope.selectedDate = newDate;

    $scope.portfolio = portfolioService.buildPortfolio(newDate);
  });


  //get portfolio before date


}]);



