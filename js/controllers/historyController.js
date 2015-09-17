app.controller("historyCtrl", ['$scope', '$filter', 'historicalStock', 'selectedDate', function($scope, $filter, historicalStock, selectedDate){
  $scope.stockData = [];
  historicalStock.getStockData(getData);

  function getData(result) {
    $scope.stockData = $scope.stockData.concat(result.data.query.results.quote)
  }

  $scope.symbols = function() {
    return $scope.stockData.reduce(function(result, current){
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

    var filteredData = $scope.stockData.filter(function(el){ return el.Symbol == entry.Symbol })
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
