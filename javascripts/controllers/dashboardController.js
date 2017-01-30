fideligard.controller('DashCtrl', ['$scope', 'dateService', function dashCtrl($scope, dateService) {

  // time slider
  $scope.startDate = dateService.START_DATE;
  $scope.endDate = dateService.END_DATE;
  $scope.chooseDate = false;
  $scope.calendarToScalarDate = dateService.calendarToScalarDate;
  $scope.currentDate = dateService.currentDate;
  $scope.currentScalarDate = dateService.calendarToScalarDate($scope.currentDate);

  $scope.sliderChangeHandler = function() {
    $scope.currentDate = dateService.scalarToCalendarDate($scope.currentScalarDate);
  };
  $scope.dateClickHandler = function dateClickHandler() {
    $scope.chooseDate = true;
  };
  $scope.dateChangeHandler = function dateChangeHandler() {
    $scope.currentScalarDate = dateService.calendarToScalarDate($scope.currentDate);
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
