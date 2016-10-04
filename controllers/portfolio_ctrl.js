Fideligard.controller('PortfolioCtrl', ['$scope', 'yqlService', 'dateService', 'portfolioService', function($scope, yqlService, dateService, portfolioService){

  $scope.quotes = yqlService.getStocks();
  $scope.dates = yqlService.getDates();
  $scope.date = dateService.getDate();
  $scope.cash = portfolioService.getCash();
  $scope.reverser = false;

  var newDate = $scope.dates[$scope.date.index]
  $scope.currentPortfolio = portfolioService.getStockByDate(newDate);
  $scope.totalValues = portfolioService.totalStats(newDate, $scope.quotes);

  $scope.$watch('date.index', function(index){
    var upDate = $scope.dates[index]
    $scope.currentPortfolio = portfolioService.getStockByDate(upDate);
    $scope.totalValues = portfolioService.totalStats(upDate, $scope.quotes);
  });

  $scope.reverse = function() {
    $scope.reverser = !$scope.reverser;
  }

}]);