app.controller("portfolioCtrl", ['$scope',
                                 'transactionService',
                                 'historicalStock',
                                 'selectedDate',
                                 function($scope, transactionService, historicalStock, selectedDate){
  $scope.currentDate = selectedDate.getDate;
  $scope.portfolio = transactionService.portfolio(selectedDate.getDate())
  $scope.money = transactionService.getMoney($scope.currentDate())

  $scope.getPrice = historicalStock.getPrice;
  $scope.yesterday = historicalStock.getYesterday;
  $scope.lastMonth = historicalStock.getLastMonth;
  $scope.last6 = historicalStock.getLast6Month;

  $scope.portfolioPrevious = function(offset){
    var now = new Date($scope.currentDate())
    now = new Date(now.setDate(now.getDate() - offset));

    console.log(now);
    if (now < Date.parse('1/1/2014')) return "N/A"

    var previousPortfolio = transactionService.portfolio(now);

    return transactionService.getMoney(now) + previousPortfolio.reduce(function(total, el){
      total += historicalStock.getPrice(now, el.symbol) * el.quantity;
      return total;
    }, 0)
  }

  $scope.portfolioYesterday = function(){
   return $scope.portfolioPrevious(1);

  }

  $scope.portfolioLastMonth = function(){
   return $scope.portfolioPrevious(30);
  }

  $scope.portfolioLast6Month = function(){
    return $scope.portfolioPrevious(180);
  }

  $scope.stockValue = function(){
    return $scope.portfolio.reduce(function(total, el){
      total += historicalStock.getPrice($scope.currentDate(), el.symbol) * el.quantity;
      return total;
    }, 0)
  }

  $scope.totalCost = function(){
    return $scope.portfolio.reduce(function(total, el){
      total += el.cost
      return total;
    }, 0)
  }

  $scope.$watch('currentDate()', function(){
    $scope.portfolio = transactionService.portfolio($scope.currentDate());
    $scope.money = transactionService.getMoney($scope.currentDate())
  });
}]);
