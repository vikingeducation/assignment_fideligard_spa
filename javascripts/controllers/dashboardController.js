fideligard.controller('DashCtrl', ['$scope', 'dateService', function dashCtrl($scope, dateService) {

  // time slider
  $scope.startDate = dateService.START_DATE;
  $scope.endDate = dateService.END_DATE;
  $scope.msInADay = dateService.MS_IN_A_DAY;
  $scope.chooseDate = false;
  $scope.dateClickHandler = function dateClickHandler() { };
  $scope.dateChangeHandler = function dateChangeHandler() {
    $scope.chooseDate = false;
  };

  // daily stock listing
  $scope.stocks = {};
  $scope.stocks.AAPL = {
    symbol: "AAPL",
    price: 123.45,
    days: {
      one: 1.45,
      seven: -2.12,
      thirty: -2.56,
    }
  };

}]);
