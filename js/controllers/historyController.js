app.controller("historyCtrl", 
  ['$scope', 
   '$filter', 
   'historicalStock', 
   'selectedDate', 
   function($scope, $filter, historicalStock, selectedDate){
  $scope.stockData = historicalStock.getStockData();

  $scope.sortCriteria = "";
  $scope.reverseList = [false, false, false, false, false, false];

  $scope.sortBy = function(criteria){
    var columns = {
      1: "Symbol",
      2: "Close",
      3: $scope.getYesterday,
      4: $scope.getLastMonth,
      5: $scope.getLast6Month,
    }
    if (!columns[criteria]) return;

    if (columns[criteria] == $scope.sortCriteria){
      $scope.reverseList[criteria] = !$scope.reverseList[criteria];
      $scope.reverse = $scope.reverseList[criteria];
    } else {
      $scope.sortCriteria = columns[criteria];
    }
  }

  $scope.symbols = function() {
    return $scope.stockData.list.reduce(function(result, current){
      if (result.indexOf(current.Symbol) == -1) {
        result.push(current.Symbol);
      }
      return result;
    }, [])
  }

  $scope.selectedDate = selectedDate.dates;

  $scope.getYesterday = function(entry){
    return historicalStock.getLast(0, entry);
  }

  $scope.getLastMonth = function(entry){
    return historicalStock.getLast(29, entry);
  }

  $scope.getLast6Month = function(entry){
    return historicalStock.getLast(179, entry);
  }
}]);
