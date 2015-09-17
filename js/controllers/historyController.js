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
    if (yesterdayFound.length < 1) return "N/A";
    return (currentClosing - yesterdayFound[0].Close)

    // Check 1, 2, and 3 days in the past for our data
  }

  $scope.getLastMonth = function(entry){
    var currentClosing = entry.Close;
    var lastMonth = new Date (entry.Date);
    var targetDays = [];
    targetDays.push(lastMonth.setDate(lastMonth.getDate() - 29))
    targetDays.push(lastMonth.setDate(lastMonth.getDate() - 30))
    targetDays.push(lastMonth.setDate(lastMonth.getDate() - 31))

    // Filter data by entry's symbol
    var filteredData = $scope.stockData.filter(function (el) { return el.Symbol = entry.Symbol })
    var lastMonthFound = [];
    targetDays.forEach(function(day) {
      var result = $filter("dateFilter")(filteredData, day);
      if (result.length > 0 && lastMonthFound.length == 0) {
        lastMonthFound = result;
      }
    });

    if (lastMonthFound.length < 1) return "N/A";
    return (currentClosing - lastMonthFound[0].Close)

    // Check 1, 2, and 3 days in the past for our data
  }

  $scope.getLast6Month = function(entry){
    var currentClosing = entry.Close;
    var last6Month = new Date (entry.Date);
    var targetDays = [];
    targetDays.push(last6Month.setDate(last6Month.getDate() - 179))
    targetDays.push(last6Month.setDate(last6Month.getDate() - 180))
    targetDays.push(last6Month.setDate(last6Month.getDate() - 181))
    targetDays.push(last6Month.setDate(last6Month.getDate() - 182))
    targetDays.push(last6Month.setDate(last6Month.getDate() - 183))
    targetDays.push(last6Month.setDate(last6Month.getDate() - 184))
    targetDays.push(last6Month.setDate(last6Month.getDate() - 185))

    // Filter data by entry's symbol
    var filteredData = $scope.stockData.filter(function (el) { return el.Symbol = entry.Symbol })
    var last6MonthFound = [];
    targetDays.forEach(function(day) {
      var result = $filter("dateFilter")(filteredData, day);
      if (result.length > 0 && last6MonthFound.length == 0) {
        last6MonthFound = result;
      }
    });

    if (last6MonthFound.length < 1) return "N/A";
    return (currentClosing - last6MonthFound[0].Close)

    // Check 1, 2, and 3 days in the past for our data
  }
}]);
