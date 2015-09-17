app.controller("historyCtrl", ['$scope', '$filter', 'historicalStock', 'selectedDate', function($scope, $filter, historicalStock, selectedDate){
  $scope.stockData = historicalStock.getStockData();
  $scope.selectedDate = selectedDate.getDate;

  $scope.getYesterday = function(entry){
    var currentClosing = entry.Close;
    var yesterday = new Date (entry.Date);

    yesterday = yesterday.setDate(yesterday.getDate());

    // Filter data by entry's symbol
    var filteredData = $scope.stockData.filter(function (el) { return el.Symbol = entry.Symbol })
    var yesterdayFound = $filter("dateFilter")(filteredData, yesterday)

    return (currentClosing - yesterdayFound[0].Close)

    // Check 1, 2, and 3 days in the past for our data
  }
}]);
