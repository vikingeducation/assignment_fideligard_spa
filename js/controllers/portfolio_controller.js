StockApp.controller("PortfolioCtrl", ['$scope', 'portfolioService', 'transactionService', 'dateService', function($scope, portfolioService, transactionService, dateService){
  
  
  //sync date
  console.log("loading");
  $scope.selectedDate = dateService.selectedDate;

  $scope.$watch(function(){
    return dateService.selectedDate;
  }, function(newDate){
    $scope.selectedDate = newDate;

    $scope.portfolio = portfolioService.buildPortfolio(newDate);
  });


  //get portfolio before date


}]);



