app.controller("historyCtrl", ['$scope', '$filter', 'historicalStock', 'selectedDate', function($scope, $filter, historicalStock, selectedDate){
  $scope.stockData = historicalStock.getStockData();

  $scope.sortCriteria = "";
  $scope.reverse = false;

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
      $scope.reverse = !$scope.reverse;
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

  $scope.selectedDate = selectedDate.getDate;

  $scope.getLast = function(offset, entry){
    var currentClosing = entry.Close;
    var startingDate = new Date(entry.Date);
    var targetDays = [];
    targetDays.push(startingDate.setDate(startingDate.getDate() - offset))
    targetDays.push(startingDate.setDate(startingDate.getDate() - 1))
    targetDays.push(startingDate.setDate(startingDate.getDate() - 1))
    targetDays.push(startingDate.setDate(startingDate.getDate() - 1))
    targetDays.push(startingDate.setDate(startingDate.getDate() - 1))

    var filteredData = $scope.stockData.list.filter(function(el){ return el.Symbol == entry.Symbol })
    var results = [];
    targetDays.forEach(function(day) {
      var result = $filter("dateFilter")(filteredData, day);
      if (result.length > 0 && results.length == 0) {
        results = result;
      }
    });

    return (results.length < 1) ? "N/A" : currentClosing - results[0].Close
  }

  $scope.getYesterday = function(entry){
    return $scope.getLast(0, entry);
  }

  $scope.getLastMonth = function(entry){
    return $scope.getLast(29, entry);
  }

  $scope.getLast6Month = function(entry){
    return $scope.getLast(179, entry);
  }
}]);
